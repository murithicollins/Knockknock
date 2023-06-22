<script>

  //import Ruler
  import Ruler from './Ruler.svelte'
  //import Carousel
  import Carousel from './hero/Carousel.svelte'
    
</script>

<!-- heros section -->
<main class="">
  <!-- main div -->

  <Ruler>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

      <div class="flex items-center">
        <div>
            <h1 class="text-4xl font-bold font-primary  text-[#EF6C00]">
              KNOCK KNOCK
            </h1>

            <p class="my-4 md:my-6 leading-loose border rounded-lg text-sm p-4">
              A <span class="text-[#EF6C00] font-bold">global innovation</span> hub for assistive and <span class="text-[#EF6C00] font-bold">inclusive tech</span> <br> for persons with <span class="text-[#EF6C00] font-bold">hearing loss</span>. 
            </p>

            <h1 class="text font-semibold underline">Some of our works</h1>

            <div class="flex my-4 gap-4">
              

              <a href="/Product" class="border border-[#00394F] flex items-center gap-4 text-wite px-4 py-2 rounded-full text-xs">
                <p >KnockKnock gadget</p><img src="/img/arrow-right.svg" alt="" class="inline-block h-5 w-5">
              </a>

              <a href="/bell" class="border border-[#00394F] flex items-center gap-4 text-wite px-4 py-2 rounded-full text-xs">
                <p >I-Bell</p><img src="/img/arrow-right.svg" alt="" class="inline-block h-5 w-5">
              </a>
              
            </div>

            <div>
              <p class="xl:text-sm my-4">
                We are always excited to work with people who are passionate about making the world a better place for persons with hearing loss.
              </p>

              <button class="my-4" on:click={() => window.location.href = "mailto:info@knockknock.co.ke"}
                  >
                  <div class="text-xs font-tertiary font-bold  text-white  bg-[#00394F] p-4 rounded-full">Work with Us</div>
              </button>
            </div>
              






        </div>
      </div>

      <div>
        <div class="flex items-center py-4">
          <div class="">
            <iframe class="rounded-lg" width="100" height="70" src="https://www.youtube.com/embed/_NDC_-Tdd5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="mx-2 md:ml-5">
            <h1 class="font-bold text-sm">Featured on Eburu TV</h1>
            <p class="my-2 text-xs">
              Watch how we are changing lives of people with hearing loss
            </p>
            <!--Youtube link as a button-->
            <button class="bg-red-600 text-white px-4 py-2 rounded-full text-xs">
              <a href="https://www.youtube.com/watch?v=_NDC_-Tdd5g" target="_blank">Watch Now on youtube</a>
            </button>
          </div>

        </div>

        <div class="h-1 w-full rounded-full bg-[#EF6C00]"></div>

        <Carousel />
      </div>

    </div>
  </Ruler>

  <div class=" hidden">
    <!-- secondary div -->
    <div class="flex flex-col md:flex-row gap-2 md:gap-2 ">
      <!-- context -->
      <div class="grow w-full md:w-1/2 flex items-center justify-center ">
        <div class="space-y-8">
          <div>
            
          </div>
          <div>
            <p class="text-[#00394F] md:text-24 font-secondary pr-5 mb-5">
              listens to sounds in the environment and conveys them in a way perceivable by persons with hearing loss..
            </p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <!-- img -->
      <div class="w-full md:w-1/2 mt-10">
        <img src="img/knock team.png" class="image " alt="" />
      </div>
    </div>

  </div>
</main>

 <!-- <div class="flex flex-col ">
    <div class="relative"> 
      <div class="">
            <h2 class=" "><br class="hidden md:block" /></h2>
            <p class=" ">
                
            </p>
            <div class="flex items-center ">
            
      </div>
    </div>
    <div class="flex justify-center mt-20 inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:absolute xl:px-0 ">
      
    </div>
    </div> --> 
<style>
.image{
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>