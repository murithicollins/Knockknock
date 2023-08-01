<script>
  import  Esther from '$lib/assets/Esther.jpg';
    export let showModal = false;
</script>

{#if showModal}
<div class="fixed z-40 inset-0" style="background:rgba(29, 29, 108, 0.5)">

  <div class="flex h-screen items-center justify-center">
    <div class="bg-white rounded-t-lg p-8 w-1/2 flex justify-center mx-auto">
      <div class="p-12">
        <div class="my-4">
          <h1>
            Thank You John for supporting the tech4good4i-bell campaign
          </h1>
        </div>
        <div class="bg-slate-700 p-10 flex justify-center ">
          <div class="bg-white px-2 rounded-md">
            <img class="h-56" src={Esther} alt="">
            <div>
              <h1 class="my-2 font-bold">John Doe</h1>
              <h2 class="my-2">Ceo Knocknck</h2>
            </div>
          </div>
        </div>
        <div>
  
  
          
        </div>
      </div>
    </div>
  </div>
  
</div>
{/if}