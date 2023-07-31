
<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let loading=false
</script>

<button type="button" on:click={()=>{dispatch('clicked',{})}} class="bg-[#1D976C] text-white font-bold flex items-center py-2 mt-5 px-10 rounded-full">
    {#if loading}
        <div class="animate-spin rounded-full mr-2 h-6 w-6 border-b-2 border-white"></div>
    {/if}
    <p>Donate button</p>
</button>