<script>
    import {Ruler} from '$lib/components';
    import NormBell from '$lib/assets/bell/normbell.svg';
    import IBell from '$lib/assets/bell/ibell.svg';
</script>
<Ruler>
    <main>
        <!-- main div -->
        <div>
            <!-- img and header -->
            <div class="flex justify-center my-4 md:my-10">
                <!--flex div  -->
                <div>
                    <div class="flex justify-center">
                        <h3 class="font-primary text-xl font-bold text-[#EF6C00] ">The "normal" bell system</h3>
                    </div>
                    <div>
                        <img src={NormBell} alt="">
                    </div>
                </div>
            </div>
            <!-- problem  and about  -->
            <div class="flex flex-col md:flex-row  justify-center bg-[#D9D9D9]  gap-8 w-full p-4 md:p-10 my-4 md:my-10">
                <!-- the problem -->
                <div class="w-full md:w-1/2 p-4 md:p-10 my-4 md:my-10">
                    <h1 class="flex items-center justify-center font-primary text-xl font-bold text-[#EF6C00] mb-10">The problem</h1>
                    <p class=" text-[#00394F] text-sm md:text-24 font-secondary">The school bell system i impolrtant in creating  wel-organize structure for smooth running of activities in a school. It is used to announce critical times in the school, create routine, and to get attention 
                        in cases of emergencies. Most schools for the Deaf in Kenya use the ‘conventional’ 
                        sound based bell system which is ineffective because a majority of the students are Deaf. This implies the system is ineffective which could lead to - lack of respect for time, excuses for lateness, anda  decline in teaching quality.
                    </p>
                </div>
                <!-- about -->
                <div class="w-full md:w-1/2 p-4 md:p-10 my-4 md:my-10">
                    <h1 class="flex justify-center font-primary text-2xl font-bold text-[#EF6C00] mb-10">About i-bell:</h1>
                    <p class=" text-[#00394F] text-sm md:text-24 font-secondary">
                        I-bell is a bell system that provides visual and sound alerts to capture attention of both hearing and Deaf students and staff within schools for the Deaf.
    
                        The system capializes on the existing Deaf culture of using flickering of lights as a way to call attention.   
                    </p>
    
                </div>
            </div>
            <!-- i-bell system -->
            <div class="flex justify-center my-4 md:my-10">
                <!--flex div  -->
                <div>
                    <div class="flex justify-center">
                        <h3 class="font-primary text-2xl font-bold text-[#EF6C00]">The i-bell system</h3>
                    </div>
                    <div>
                        <img src={IBell} alt="">
                    </div>
                </div>
            </div>
            <!-- our strategy -->
            <div class="flex justify-center bg-[#D9D9D9] w-full p-4 md:p-10 my-4 md:my-10">
                <div>
                    <!-- title -->
                    <div class="flex items-center justify-center" >
                        <h1 class="font-primary text-2xl font-bold text-[#EF6C00]">Our Strategy</h1>
                    </div>
                    <!-- context -->
                    <div class="p-4 text-[#00394F] text-sm md:text-24 font-secondary  text-center   mb-4 ">
                    <p>Our intention is to implement i-bell to all schools for the Deaf and integrated schools in Kenya as we move to those across Africa. How we can partner :  </p> 
                    </div>
                    <div class="flex justify-end item">
                        <div class="p-2 md:p-10 space-y-10">
    
                            <div class="flex  flex-col md:flex-row gap-4">
                                <p class="font-secondary font-bold  text-24 text-[#00394F] md:w-2/6">
                                    ✓ Implementation partners: 
                                </p>
                                <p class="text-[#00394F] text-sm md:text-24 font-secondary w-5/6">  
                                    we work with organizations and institutions who support us in installing i-bell to one or several schools for the Deaf in kenya
                                </p> 
                            </div>
                            <div class="flex  flex-col md:flex-row gap-4">
                                <p class="font-secondary font-bold  text-24 text-[#00394F] md:w-2/6">
                                    ✓ Operational partner:  
                                </p>
                                <p class="text-[#00394F] text-sm md:text-24 font-secondary w-5/6">  
                                    we work with organizations to subsidize production and operation costs
                                    by exploring existing networks. Such includes support in manufacturing, production, and support by providing us with working space to expand and scale the project.
                                </p> 
                            </div>
        
                            <div class="flex  flex-col md:flex-row gap-4">
                                <p class="font-secondary font-bold  text-24 text-[#00394F]  md:w-2/6  ">
                                    ✓ Strategic partner: 
                                </p>
                                <p class=" text-[#00394F] text-sm md:text-24 font-secondary w-5/6 ">  
                                    We work on dynamic partnerships with organizatiosn that share the saeme vision of helping students with learning loss. The partnership is dynamic 
                                    depending on what support the organization can provide.
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    
 </style>
    