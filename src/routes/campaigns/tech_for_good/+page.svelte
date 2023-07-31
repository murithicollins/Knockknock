<script>
    import PlayBtn from '$lib/assets/play.png';
    import HeaderImg from '$lib/assets/header.png';
    import {Donatebutton, Aligner, Modal} from '$lib/components';
    let showModal=false;
    const openModal = () => {
        showModal=!showModal;
    }
    import SchoolImg from '$lib/assets/school.png';
    import KnockImg from '$lib/assets/why.png';
    import TawaLogo  from '$lib/assets/tawa.png';
    import TinyLogo from '$lib/assets/tiny.png';
    import {CampaignFooter} from '$lib/components';


</script>


<style>

    .header-col{
        min-height: 60vh;
    }

    .header-col-2{
        min-height: 20vh;
    }

    .gradient-bg{
        background: linear-gradient(90deg, #1D976C 0%, #93F9B9 91.76%);
    }
    
    .faded{
        background: rgb(147, 249, 185, 0.4)
    }

</style>

<section>

    <Modal {showModal} on:click={openModal}/>
    <div class="md:relative">
        <div class="grid grid-cols-1 md:grid-cols-2 md:pb-20">

            <div class="gradient-bg header-col flex items-center justify-center">
                
                <div class="w-4/5">
                    <h1 class="text-lg md:text-5xl text-white font-bold">
                        #tech4good i-bell <br> 30-day campaign
                    </h1>
                    <p class="text-white leading-loose my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus voluptatibus exercitationem quia doloribus quidem odio adipisci doloremque soluta, est architecto id, vero placeat odit unde fugit eos eligendi non!
                    </p>
                </div>
            </div>
    
            <div class="relative header-col-2" style="background-image:url('{HeaderImg}')">
                <div class="absolute top-0 bottom-0 left-0 right-0 faded flex items-center justify-center">
                    <img class="w-12 h-12" src={PlayBtn}>
                </div>
            </div>
    
        </div>
    
        <div class=" w-full pb-4 md:pb-12 md:absolute bottom-1">
            <Aligner>
                <div class=" py-5 bg-white  z-10 shadow-lg rounded-lg p-4">

                    <!---progress bar-->
                    <div class="w-full bg-gray-200 rounded-full">
                        <div class="w-1/2 bg-green-500 rounded-full py-1"></div>
                    </div>
    
                    <div class="grid grid-cols-1 md:grid-cols-4 text-green-500">
                        <div class="py-1">
                            <h1 class="text-lg font-bold">Ksh 100 Raised</h1>
                        </div>
                        <div class="py-1">
                            <h1 class="text-lg font-bold">10 Donations</h1>
                        </div>
                        <div class="py-1">
                            <h1 class="text-lg font-bold">30 Days left</h1>
                        </div>
                        <div class="py-1">
                            <h1 class="text-lg font-bold">Goal Ksh 435,345</h1>
                        </div>
                    </div>
    
    
                </div>
            </Aligner>
        </div>
    </div> 
    <div class="space-y-4">
        <div class="space-y-4">
            <h1 class="text-5xl font-bold text-[#393D5C] text-center">
                Your Support is Highly appreciated.
            </h1>
            <p class="text-center space-y-4">
                 Together, we can make a difference. Please support the campaign and <br> spread the word. Choose an option below on how to donate.
            </p>
        </div>
        <div>
            <Aligner>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Donatebutton text="Buy Luminous tubes: Ksh 500" active="{true}"/>
                    <Donatebutton text="Buy controller board: Ksh 1000" active="{false}"/>
                    
                    <p class="p-6 rounded-lg border-2 border-green-500 w-full text-2xl font-bold">
                        Ksh <input type="number" name="" id="" placeholder="Customer Amount" class="w-3/4 md:w-full text-green-500  text-lg md:text-2xl outline-none border-none">
                    </p>
                </div>
            </Aligner>
        </div>
    </div>   
    <div>
        <Aligner>
            <div class="md:flex  justify-between md:py-20  ">
                <div class="space-y-8 w-full md:w-3/4" >
                    <div>
                        <h1 class="text-5xl font-bold text-[#393D5C]">
                            Why are we Doing This ? 
                        </h1>
                    </div>
                    <div class="space-y-8 text-xl text-[#434343] font-medium  leading-loose">
                        <p>
                            Treeside Kasarani School for the Deaf uses the ‘conventional’ sound based 
                            bell system which is not inclusive for the Deaf students in school. The goal of 
                            the i-bell campaign is to install an inclusive bell to the school to enhance the 
                            education of these Deaf students and promote their inclusion.  
                        </p>
                        <p>
                            We are also pushing the agenda for using tech4good! 
                            You can learn more about the campaign <a href="https://drive.google.com/file/d/1BhzAVPRdoXJyLlO80fGgqDbb7rW0OSHc/view?usp=sharing" class="text-[#1D976C] underline underline-offset-1 ">here.</a>
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <div>
                        <img src={KnockImg} alt="">
                    </div>
                    <div class="absolute  top-60 -ml-10 md:-ml-20">
                        <img src={SchoolImg} alt="">
                    </div>
                </div>
            </div>
        </Aligner> 
    </div>
    <div class="text-center ">
        <div class="space-y-8">
            <h1 class="text-5xl font-bold text-[#393D5C] mt-28 md:mt-0">
                Our Partners
            </h1>
            <p class="text-lg text-[#434343] font-medium">
                This are among the groups and friends that have supported us through the <br> journey. 
            </p>

        </div>
        <div class="flex justify-center gap-32">
            <div>
                <img src={TawaLogo} alt="">
            </div>
            <div>
                <img src={TinyLogo} alt="">
            </div>
        </div>
    </div>

    <CampaignFooter>
        
    </CampaignFooter>
    

         

</section>