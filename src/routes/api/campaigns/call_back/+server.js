import { json } from '@sveltejs/kit'


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

    // update the transaction is_complete to true
    const { data: updated_transaction, error: update_error } = await supabase
        .from('transactions')
        .update({ is_complete: true })
        .eq('id', transaction.id)
        .single()
    if (update_error) return json({ error: update_error })

    //TODO broadcast the event on pusher
        
    return json({ })
}