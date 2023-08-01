
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let loading=false;
    export let mode = "default";

    let background = "bg-green-500";
    let text = "Donate";

    //observer the mode and update background
    $: {
        if(mode === "default"){
            background = "bg-green-500";
            text = "Donate";
        }else if(mode === "error"){
            background = "bg-red-500";
            text = "Not completed, retry";
        }else if(mode === "pending"){
            text = "Processing...Check your phone";
            background = "bg-gray-500";
        }
    }
</script>

<button type="button" on:click={()=>{dispatch('clicked',{})}} class="{background} text-white font-bold flex items-center py-2 mt-5 px-10 rounded-full">
    {#if loading}
        <div class="animate-spin rounded-full mr-2 h-6 w-6 border-b-2 border-white"></div>
    {/if}
    <p>{text}</p>
</button>