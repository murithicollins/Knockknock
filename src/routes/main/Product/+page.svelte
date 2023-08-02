<script>
    import {Ruler} from '$lib/components';
    import KnockImg from '$lib/assets/products/knock.png';
</script>
<!-- main  -->
<Ruler>
    <main class="py-4 md:py-8 px-4">
        <!-- knock knock -->
        <div class="flex flex-col md:flex-row justify-center my-4 md:my-10">
            <div>
                <img src={KnockImg} alt="">
            </div>
            <!-- context -->
            <div class="flex items-center justify-center bg-white ">
                <div class="drop-shadow-md border-2 py-16 px-8 space-y-8 w-full md:w-3/5">
                    <div class="flex justify-center" >
                        <h3 class="font-primary  text-2xl font-bold  text-[#EF6C00]  ">
                            KNOCK KNOCK
                        </h3>
                    </div>
                    <div class="flex items-center">
                        <p class="text-[#00394F] font-secondary text-24">Knock knock alerts a Deaf person when there is a knock on their door.</p>
                    </div>
                    <div class="flex justify-center">
                        <a href="mailto:info@knockknock.co.ke">
                            <button class="inline-flex items-center justify-center h-12 px-6 mr-6 font-tertiary  text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-cyan-950">LEARN MORE</button>
                        </a>
                    </div>
                </div>
        
            </div>
        </div>
        <!-- i bell -->
        <div class="flex justify-center  bg-[#D9D9D9] p-4 md:p-8 mb-10">
            <div class="">
                <div class="flex justify-center">
                    <h3 class="font-primary  text-4xl font-bold  text-[#EF6C00]  dark:text-white">I-BELL</h3>
                </div>
                <!-- containers -->
                <div class="flex justify-center items-center" >
                    <div class="flex flex-col md:flex-row justify-center gap-2 md:gap-4  m-4 md:m-8 p-4 md:p-8" >
                        <!-- why -->
                        <div class="bg-[#ffffff] p-4 md:p-8  h-72 flex items-center drop-shadow-xl border-4 border-gray-300">
                            <div class="space-y-4">
                                <h1 class="flex justify-center font-bold text-2xl">why</h1>
                                <p class="flex items-center text-[#00394F] font-secondary text-24">
                                    Most schools for the Deaf use the conventional sound-based system which is ineffective because the majority of the students are Deaf. 
                                </p>
                            </div>
            
                        </div>
                        <!-- what -->
                        <div class="p-4 md:p-8  h-72 flex items-center bg-[#ffffff] drop-shadow-xl border-4 border-gray-300">
                            <div class="space-y-4">
                                <h1 class="flex justify-center font-bold text-2xl">what</h1>
                                <p class="text-[#00394F] font-secondary text-24">
                                    i-bell is an inclusive bell system that incorporates visual alerts to the ‘conventional’ sound bell system by capitalizing on the flickering of lights.  
                                </p>
                            </div>
            
                        </div>
                        <!-- how -->
                        <div class="p-4 md:p-8  h-72 flex items-center bg-[#ffffff] drop-shadow-xl border-4 border-gray-300">
                            <div class="space-y-4" >
                                <h1 class="flex justify-center font-bold text-2xl">how</h1>
                                <p class="text-[#00394F] font-secondary text-24">
                                    We intend to implement i-bell in all schools for the Deaf and integrated schools in Kenya as we move to those across Africa through partnering with organizations working with the Deaf or similar interests.   
                                </p>
                            </div>
            
                        </div>
                    </div>
                </div>
                <!-- button -->
                <div class="flex justify-center">
                    <a href="/bell">
                        <button class="inline-flex items-center justify-center h-12 px-6 mr-6 font-tertiary text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-cyan-950">LEARN MORE</button>
                    </a>
                </div>
            </div>
    
        </div>
        <!-- baby monitor -->
    </main>
</Ruler>
