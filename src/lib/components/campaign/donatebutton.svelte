<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let text = "Donate";
    export let active = false;

</script>
<<<<<<< HEAD
<button on:click={()=>{dispatch('clicked',{})}} class="p-2 md:p-4 rounded-lg  border-2 border-green-500 text-lg md:text-xl  {active?'bg-green-500': 'bg-white'}">
=======
<button on:click={()=>{dispatch('clicked',{})}} class="p-2 md:p-4 rounded-lg  border-2 w-full border-green-500 md:text-2xl  {active?'bg-green-500': 'bg-white'}">
>>>>>>> 1a83baf46bff27d112a770bd45ab14aab54b11fe
    <p class="{active?'text-white':'text-greeen-500'} font-bold" >{text}</p>
</button>
