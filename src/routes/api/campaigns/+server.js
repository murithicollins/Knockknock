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

    return json({ campaign, total_donated })

}


export async function POST({ locals: { supabase }, request }) {
    
        
    
        // get the donation from the request
        const donation = await request.json()
        
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
        const { data: tiny_pesa_response, error: tiny_pesa_error } = await fetch('https://tinypesa.com/api/v1/express/initialize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Apikey': '5f9b3b0e-2f9a-4f4b-8e0a-5f9b3b0e2f9a'
            },
            body: JSON.stringify({
                amount: donation.amount,
                msisdn: donation.msisdn
            })  
        }).then(res => res.json())


        console.log(tiny_pesa_response)
        
        

        // create the transaction
        const { data, error: transaction_error } = await supabase
            .from('transactions')
            .insert([
                {
                    campaign_id: campaign.id,
                    amount: donation.amount,
                    tiny_pesa_id: tiny_pesa_response.request_id,
                    is_complete: false,
                },
            ])
            .single()
            
        // if there is an error, return the error
        if (transaction_error) return json({ error: transaction_error })



        // return the campaign
        return json({ data })
    
}