<script>
    import {Ruler} from '$lib/components';
    import 'aos/dist/aos.css';
    // importing images
    import KnockTeam from '$lib/assets/team/knock team.png';
    import EstherImg from '$lib/assets/team/Esther.jpg';
    import BrianImg from '$lib/assets/team/Brian.jpg';
    import JoeImg from '$lib/assets/team/joe.jpg';
    import DennisImg from '$lib/assets/team/Dennis.png';
    import LinkedImg from '$lib/assets/team/LinkedImg.png';


    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { onMount } from "svelte";

    onMount(() => {
        AOS.init()
    })
</script>

<Ruler>
  <main>
    <!-- about section -->
    <div class="flex justify-center item-center pt-10">
      <div class="flex flex-col md:flex-row justify-center gap-10 shadow-xl bg-[#D9D9D9] p-4 md:p-10 md:py-4 md:px-14">
        <div class="">
          <img src={KnockTeam} class="rounded md:rounded-r-3xl " alt="" height="500" width="1000"/>
        </div>
        <div class="flex justify-center  w-full md:w-3/5 p-2 md:p-10">
          <div>
            <h1 class="mb-4 text-2xl font-primary font-bold  text-[#EF6C00]">About Us</h1>
            <p class="text-sm md:text-24 font-secondary">
              Knock knock was started in December 2021 with the goal of building a gadget that could alert a Deaf person when a knock happened on their door. However, with research and study into the target population, we realized that the problem dug deeper than just the inability of Deaf persons to know when someone is at their door.
                Stories from the Deaf community revealed how crippled this population
                was by their inability to perceive sounds; which pushed us to think deeper, not just in terms of a product but what impact we, as experienced techies, could make on this community.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="container my-24 px-6 mx-auto animate-ease-in-sine" data-aos="fade-up">
      <!-- Section: Design Block -->
      <section class="mb-32 text-gray-800 text-center">
        <h2 class="text-2xl font-primary text-[#EF6C00]  font-bold mb-8">
          Team
        </h2>
        <div class="grid gap-x-2  md:grid-cols-4 container h-5/6 space-y-4 md:space-y-0">
          <!-- esther -->
          <div class="">
            <div class="" style="">
              <img src={EstherImg} class="mx-auto shadow-lg object-cover h-96 w-96" alt=""
                style="" />
            </div>
            <div class="flex flex-col justify-center mx-auto w-5/6 -mt-8 relative z-5 shadow-md hover:transform hover:-translate-y-1" >
              <div class="bg-white">
                <div class="w-full h-2 bg-[#00394F] "></div>
                <div class="flex justify-center">
                  <div class="">
                    <h5 class="text-lg font-bold mt-2">Esther Mueni</h5>
                    <p class="text-24">Team Lead</p>
                  </div>
                </div>
                <div class="bg-[#EF6C00] hover:bg-[#00394F] text-white p-2 w-full rounded-md flex justify-center ">
                  <div class="p-2">
                    <img src={LinkedImg} class="h-4 " alt="">
                  </div>
                  <div class="p-1">
                    <a href="https://www.linkedin.com/in/esther-mueni-919012196/">
                      <button class=" ">Linked In</button>
                    </a>
                  </div>
                </div>              </div>
            </div>

          </div>

          <!-- brain -->
          <div class="">
            <div class="" style="">
              <img src={BrianImg} class="mx-auto shadow-lg object-cover h-96 w-96" alt=""
                style="" />
            </div>
            <div class="flex flex-col justify-center mx-auto w-5/6 -mt-8 relative z-5 shadow-md hover:transform hover:-translate-y-1" >
              <div class="bg-white">
                <div class="w-full h-2 bg-[#00394F]"></div>
                <div class="flex justify-center">
                  <div class="">
                    <h5 class="text-lg font-bold mt-2">Brian Olasya</h5>
                    <p class="text-24">Technical Lead</p>
                  </div>
                </div>
                <div class="bg-[#EF6C00] hover:bg-[#00394F] text-white p-2 w-full rounded-md flex justify-center ">
                  <div class="p-2">
                    <img src={LinkedImg} class="h-4 " alt="">
                  </div>
                  <div class="p-1">
                    <a href="https://www.linkedin.com/in/brian-olasya/">
                      <button class=" ">Linked In</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- joe -->
          <div class="">
            <div class="" style="">
              <img src={JoeImg} class="mx-auto shadow-lg object-cover h-96 w-96" alt=""
                style="" />
            </div>
            <div class="flex flex-col justify-center mx-auto w-5/6 -mt-8 relative z-5 shadow-md hover:transform hover:-translate-y-1" >
              <div class="bg-white">
                <div class="w-full h-2 bg-[#00394F]"></div>
                <div class="flex justify-center">
                  <div class="">
                    <h5 class="text-lg font-bold mt-2">Joseph Mwaniki</h5>
                    <p class="text-24">Operations Lead</p>
                  </div>
                </div>
                <div class="bg-[#EF6C00] hover:bg-[#00394F] text-white p-2 w-full rounded-md flex justify-center ">
                  <div class="p-2">
                    <img src={LinkedImg} class="h-4 " alt="">
                  </div>
                  <div class="p-1">
                    <a href="https://www.linkedin.com/in/ngatiamwaniki/">
                      <button class=" ">Linked In</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- dennis -->
          <div class="">
            <div class="" style="">
              <img src={DennisImg} class="mx-auto shadow-lg  object-cover h-96 w-96"  alt=""
                style="" />
            </div>
            <div class="flex flex-col justify-center mx-auto w-5/6 -mt-8 relative z-5 shadow-md hover:transform hover:-translate-y-1" >
              <div class="bg-white">
                <div class="w-full h-2 bg-[#00394F]"></div>
                <div class="flex justify-center">
                  <div class="">
                    <h5 class="text-lg font-bold mt-2">Dennis Kariuki</h5>
                    <p class="text-24">Software engineer</p>
                  </div>
                </div>
                <div class="bg-[#EF6C00] hover:bg-[#00394F] text-white p-2 w-full rounded-md flex justify-center ">
                  <div class="p-2">
                    <img src={LinkedImg} class="h-4 " alt="">
                  </div>
                  <div class="p-1">
                    <a href="https://www.linkedin.com/in/dennis-kariuki-a6800b126/">
                      <button class=" ">Linked In</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </main>
</Ruler>


<style>
.font-primary {
      font-family: "Quicksand", sans-serif;
    }
    
.font-secondary {
      font-family: sans-serif;
    }
    
.font-tertiary {
      font-family: "Museo Slab", serif;
    }

@keyframes ease-in-sine {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

</style>

