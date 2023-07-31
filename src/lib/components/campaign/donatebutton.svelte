<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let text = "Donate";
    export let active = false;

</script>
<button on:click={()=>{dispatch('clicked',{})}} class="p-2 md:p-4 rounded-lg  border-2 border-green-500 text-lg md:text-2xl  {active?'bg-green-500': 'bg-white'}">
    <p class="{active?'text-white':'text-greeen-500'} font-bold" >{text}</p>
</button>
