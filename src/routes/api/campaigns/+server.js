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