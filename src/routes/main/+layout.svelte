<script>
  import {Navbar} from '$lib/components'
  import {Footer} from '$lib/components'

  import '@fontsource-variable/quicksand';
  
</script>

<style>

</style>


<svelte:head>
    <title>KnockKnock</title> 
    <meta name="description" content="listens to sounds in the environment and conveys them in a way perceivable by persons with hearing loss..">
</svelte:head>


<Navbar />

<slot />

<Footer />
