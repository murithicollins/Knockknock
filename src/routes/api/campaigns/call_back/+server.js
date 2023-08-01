import { json } from '@sveltejs/kit'
import Pusher from 'pusher'


export async function POST({ locals: { supabase }, request }) {

    const tiny_transaction = await request.json()   

    // get tiny transaction id
    const tiny_transaction_id = tiny_transaction.Body.stkCallback.TinyPesaID
    
    // get the transaction from supabase
    const { data: transaction, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('tiny_pesa_id', tiny_transaction_id)
        .limit(1)
        .maybeSingle()
    
    // if the tiny transaction is not found, return an error
    if (error) return json({ error })

    // Result code
    let result_code = tiny_transaction.Body.stkCallback.ResultCode
    let is_complete = result_code == 0 ? true : false

    // update the transaction is_complete to true
    const { data: updated_transaction, error: update_error } = await supabase
        .from('transactions')
        .update({ is_complete: is_complete })
        .eq('id', transaction.id)
        .single()
    if (update_error) return json({ error: update_error })

    //TODO broadcast the event on pusher


    // create a pusher instance
    const pusher = new Pusher({
        appId: "1644057",
        key: "50240557a4bfd5073fb1",
        secret: "d801dddc6b36c0f36e17",
        cluster: "ap2",
        useTLS: true
      });

    if(is_complete){
        pusher.trigger(`transactions-${transaction.id}`, "transaction_completed", {
            id: transaction.id
          });
    }else{
        pusher.trigger(`transactions-${transaction.id}`, "transaction_failed", {
            id: transaction.id
          });
    }
        
    return json({ })
}