import { json } from '@sveltejs/kit'

// create get method
export async function GET({locals: { supabase }}){

    // fetch the campaign with name tech for good from supabase
    const { data:campaign, error } = await supabase
        .from('campaigns')
        .select('*')
        .eq('name', 'tech_for_good')
        .limit(1)
        .maybeSingle()

    // if there is an error, return the error
    if (error) return json({ error })

    // fetch the sum of transactions for the campaign
    const { data:total_donated, error:sumError } = await supabase.rpc('get_campaign_transactions_sum', {
        campaign_id: campaign.id,is_complete: true
    })
    
    // if there is an error, return the error
    if (sumError) return json({ error: sumError })

    // return the campaign and the sum of transactions

    //fetch the number of complete transactions of the campaign from supabase
    const { data:total_transactions, error:total_transactions_error } = await supabase.rpc('get_completed_transactions_count_by_campaign_id', {
        campaign_id: campaign.id
    })
    if (total_transactions_error) return json({ error: total_transactions_error })

    return json({ campaign, total_donated,total_transactions })

}


export async function POST({ locals: { supabase }, request }) {
    
        
    
        // get the donation from the request
        const donation = await request.json()

        console.log(donation)
        
        // get the campaign from supabase
        const { data: campaign, error } = await supabase
            .from('campaigns')
            .select('*')
            .eq('name', 'tech_for_good')
            .limit(1)
            .maybeSingle()

        // if there is an error, return the error
        if (error) return json({ error })

        // trigger tinypesa stk payment
        // base url is https://tinypesa.com/api/v1/express/initialize
        // body structure sis as follows
        // {amount,msisdn}

        // use fetch to trigger the stk push add the Apikey header
        const response = await fetch('https://tinypesa.com/api/v1/express/initialize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Apikey': '4zDDqSO1x1e'
            },
            body: JSON.stringify({
                amount: donation.amount,
                msisdn: donation.phone
            })  
        })


        if (response.status !== 200) return json({ error: 'Error triggering payment' })

        let tiny_data = await response.json()
        
        

        // // create the transaction
        const { data, error: transaction_error } = await supabase
            .from('transactions')
            .insert([
                {
                    campaign_id: campaign.id,
                    amount: donation.amount,
                    tiny_pesa_id: tiny_data.request_id,
                    is_complete: false,
                    name: donation.name,
                    message: donation.message,
                    phone: donation.phone
                },
            ])
            .select()
            
        // // if there is an error, return the error
        if (transaction_error) return json({ error: transaction_error })



        // // return the campaign
        return json( data )
    
}