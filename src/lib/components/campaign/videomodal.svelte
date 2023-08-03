<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let show = false;
</script>

<!----Modal to embed a youtube video based on tailwind css-->
<div class="fixed inset-0 z-40 {!show?"hidden":''}">

    <div class="flex z-50 h-screen items-center justify-center" style="background:rgba(29, 29, 108, 0.5)" on:click={()=>{dispatch('closed',{})}}>

        <div class="bg-white z-50 rounded-lg p-2 lg:p-8 w-11/12 md:w-1/2 lg:w-1/3">

            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ijNqehsIKuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        
        </div>
    </div>

</div>

