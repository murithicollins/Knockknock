<script>
  import Esther from "$lib/assets/Esther.jpg";
  import Donation from "$lib/assets/icons/donation.svg";
  import User from "$lib/assets/icons/avatar.svg";
  import Donatebg from "$lib/assets/icons/donate_bg.png";
  import Edit from "$lib/assets/icons/edit.svg";
  import Share from "$lib/assets/icons/share.svg";
  import html2canvas from "html2canvas";

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();


  export let showModal = false;
  export let donation = {
    name: "John Doe",
  };

  let Avatar = User;
  let files;
  $: {
    if (files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Avatar = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    }
  }

  let exportCard = () =>{
    // capture the div id export-card and convert it to a downloadable image
    html2canvas(document.querySelector("#export-card")).then(canvas => {
      // document.body.appendChild(canvas)
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = `${donation.name}.png`;
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }

</script>

{#if showModal}
  <div class="fixed z-40 inset-0" style="background:rgba(29, 29, 108, 0.5)">
    <div class="flex h-screen items-center justify-center">
      <div class="bg-white z-50 rounded-lg p-2 lg:p-8 w-11/12 md:w-1/2 lg:w-1/3">
        <div class="p-4">
          <div class="my-4">
            <h1 class="font-bold text-center">
              Thank You {donation.name} for supporting the <br /> tech4good4i-bell
              campaign
            </h1>
            <p on:click|self={()=>{dispatch('closed',{})}} class="text-blue-500 text-center font-bold my-2">
              go back to campaign
            </p>
          </div>
          <div
            id="export-card"
            class="bg-purple-900 rounded-lg p-4 py-4 lg:p-10 flex flex-col items-center w-full lg:w-3/4 mx-auto" style="background-image:url('{Donatebg}');"
          >
            <div class="flex justify-center">
              <img src="{Donation}" class="mx-2" alt="">
              <div class="bg-white px-2 rounded-md">
                <img class="h-56 w-56 object-cover" src={Avatar} alt="" />
                <div class="flex flex-col items-center">
                  <h1 class="my-2 font-bold">{donation.name}</h1>
                  <h2 class="my-2">Tech for Good supporter</h2>
                </div>
              </div>
            </div>

            <h1 class="text-white text-center my-4 font-bold">
              I have proudly made a <br> donation to I-bell
            </h1>

          </div>

          <div class="flex mt-5 px-4 md:px-12 justify-center font-bold">
              <div on:click={exportCard} class="flex items-center px-2 md:px-4 border-2 cursor-pointer border-black rounded-full px-2 py-1 mr-4 md:mr-12">
                <p class="mr-2">Share</p> <img src="{Share}" class="h-4 h-4" alt="">
              </div>

              <label for="avatar" class="flex items-center px-2 md:px-4 border-2 cursor-pointer border-black rounded-full px-2 py-1">
                <img src="{Edit}" class="mr-2 h-4 h-4" alt=""> <p>edit picture</p> 
              </label>
              <input type="file" name="avatar" id="avatar" style="display:none" bind:files>
          </div>

          <div />
        </div>
      </div>
    </div>
  </div>
{/if}
