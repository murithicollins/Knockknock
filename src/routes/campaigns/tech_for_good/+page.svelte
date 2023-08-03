<script>
    import PlayBtn from '$lib/assets/play.png';
    import HeaderImg from '$lib/assets/header.png';
    import SchoolImg from '$lib/assets/school.png';
    import KnockImg from '$lib/assets/why.png';
    import TawaLogo  from '$lib/assets/tawa.png';
    import TinyLogo from '$lib/assets/tiny.png';
    import {Donatebutton, Aligner,CampaignFooter,Modal,TriggerDonateButton,VideoModal} from '$lib/components';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  
    let showModal=false;
    let video_modal=false;
    const openModal = () => {
        showModal=!showModal;
    }
    import SchoolImg from '$lib/assets/school.png';
    import KnockImg from '$lib/assets/why.png';
    import TawaLogo  from '$lib/assets/tawa.png';
    import TinyLogo from '$lib/assets/tiny.png';
    import {CampaignFooter} from '$lib/components';


    // let showModal=false;
    // const openModal = () => {
    export let active_donation;
    let donate_form = {
        amount:"",
        name: "",
        email: "",
        phone: "",
        message: "",
    }


    let donate_loading = false;
    let donate_mode = "default";

    let donate = () =>{

        console.log(donate_form)

        donate_loading=true
        donate_mode = "pending"
        // trigger /api/campaings with post method and donate_form
        fetch('/api/campaigns',{
            method: 'POST',
            body: JSON.stringify(donate_form)
        }).then(res=>{
            if(res.ok){
                // show success message
                return res.json()
            }else{
                // throw error
                throw new Error('Something went wrong')
                
            }
            donate_loading=false
        }).then(data=>{
            // show success message
            // alert('Thank you for donating')

            let trans = data[0]

            Pusher.logToConsole = true;

            var pusher = new Pusher('50240557a4bfd5073fb1', {
            cluster: 'ap2'
            });

            var channel = pusher.subscribe(`transactions-${trans.id}`);
            channel.bind('transaction_completed', function(data) {
                console.log(`Transaction completed: ${data.id}`);
                donate_loading=false
                donate_mode = "default"
                openModal()
            });

            channel.bind('transaction_failed', function(data) {
                console.log(`Transaction failed: ${data.id}`);
                donate_loading=false
                donate_mode = "error"
            });

        })
        .catch(err=>{
            // show error message
            alert('Something went wrong')

        })
    }


    let campaign_data={
        campaign:{}
    }

    let days_remaining=0;
    let fomated_target = 0;
    let campaign_progress = 0;
    $:{
        if(campaign_data.campaign.expiry_date){
            let expiry = new Date(campaign_data.campaign.expiry_date)
            let today = new Date()
            let diff = expiry.getTime() - today.getTime()
            days_remaining = Math.ceil(diff / (1000 * 3600 * 24))
        }
        if(campaign_data.campaign.target){
            fomated_target = campaign_data.campaign.target.toLocaleString()
        }
        if(campaign_data.campaign.target && campaign_data.total_donated){
            campaign_progress = Math.ceil((campaign_data.total_donated/campaign_data.campaign.target)*100)
        }
    }

    let getCampaignInformation = () =>{
        fetch('/api/campaigns')
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error('Something went wrong')
            }
        })
        .then(data=>{
            console.log(data)
            campaign_data = data
        })
        .catch(err=>{
            alert('Something went wrong')
        })
    }

    onMount(()=>{
        getCampaignInformation()
    })

</script>


<style>

    .header-col{
    }

    .header-col-2{
        min-height: 20vh;
    }

    .gradient-bg{
        background: linear-gradient(90deg, #1D976C 0%, #4cc779 91.76%);
    }
    
    .faded{
        background: rgb(147, 249, 185, 0.4)
    }

</style>

<section>

    <Modal {showModal} donation={donate_form} on:closed={()=>{showModal=true}}/>

    <VideoModal show={video_modal} on:closed={()=>{video_modal=false}}/>
    <div class="md:relative">
        <div class="grid grid-cols-1 md:grid-cols-2 md:pb-20">

            <div class="gradient-bg header-col flex items-center justify-center">
                
                <div class="w-4/5">
                    <h1 class="text-2xl md:text-5xl text-white font-bold">
                        #tech4good Inclusive bell (i-bell) <br> 30-day campaign
                    </h1>
                    <p class="text-white leading-loose my-5">

                        Let's join hands and push forward tech innovations for the Deaf! In view of September, Deaf awareness month, i-bell intends to bring an inclusive bell system to Treeside Kasarani School for the Deaf!! We can all be pioneers of inclusive learning by supporting this initiative. 
                    </p>
                    <p class="text-xl mb-5 md:text-2xl text-white font-bold">
                        Amount we are raising: Ksh. 425, 531.60
                    </p>    
                </div>
            </div>
    
            <div class="relative header-col-2" style="background-image:url('{HeaderImg}')">
                <div class="absolute top-0 bottom-0 left-0 right-0 faded flex items-center justify-center">
                    <img class="w-12 h-12" src={PlayBtn} on:click={()=>{video_modal=true}}>
                </div>
            </div>
    
        </div>
    
        <div class=" w-full pb-4 md:pb-12 md:absolute bottom-1">
            <Aligner>
                <div class=" py-5 bg-white  z-10 shadow-lg rounded-lg p-4">

                    <!---progress bar-->
                    <div class="w-full bg-gray-200 rounded-full mt-4 md:mt-8">
                        <div class="bg-green-500 rounded-full py-1" style="width:{campaign_progress}%"></div>
                    </div>
    
                    <div class="grid grid-cols-1 md:grid-cols-4 text-green-500">
                        <div class="py-1">
                            <h1 class="text-lg font-bold">Ksh {campaign_data.total_donated} Raised</h1>
                        </div>
                        <div class="py-1">
                            <h1 class="text-lg font-bold">{campaign_data.total_transactions} Donations</h1>
                        </div>
                        <div class="py-1">
                            <h1 class="text-lg font-bold">{days_remaining} Days left</h1>
                        </div>
                        <div class="py-1">
                            <h1 class="text-lg font-bold">Goal Ksh {fomated_target}</h1>
                        </div>
                    </div>
    
    
                </div>
            </Aligner>
        </div>
    </div> 
    <div class="">
        <Aligner>
            <div class="">
                <h1 class="text-2xl my-4 md:my-12 md:text-5xl font-bold text-[#393D5C] text-center">
                    Your Support is Highly appreciated.
                </h1>
                <p class="text-center my-4 md:my-12">
                     Together, we can make a difference. Please support the campaign and <br> spread the word. Choose an option below on how to donate.
                </p>
            </div>
        </Aligner>
        
        <div class="my-6 md:my-12">
            <Aligner>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-24 ">
                    <div>
                        <Donatebutton on:clicked={()=>{active_donation=1;donate_form.amount=500}}  text="Donate Luminous tubes: Ksh 500" active="{active_donation==1}"/>
                    </div>
                    <div>
                        <Donatebutton on:clicked={()=>{active_donation=2;donate_form.amount=1000;}} text="Donate controller board: Ksh 1000" active="{active_donation==2}"/>
                    </div>
                    
                    <div class="flex items-center rounded-lg border-2 border-green-500 w-full text-lg md:text-2xl px-2 md:px-4 font-bold">
                        <p class="">Ksh</p>
                        <div class="flex-grow">
                            <input type="number" name="" bind:value={donate_form.amount} id="" placeholder="Custom Amount eg:300" class="w-full text-green-500 focus:outline-none focus:border-none  text-lg  outline-none border-none">
                        </div>
                    </div>
                </div>
            </Aligner>
        </div>


        <div>
        
            <Aligner>
                <form novalidate="" class="grid grid-cols-1 gap-8 mx-auto rounded-lg md:grid-cols-2 dark:bg-gray-800 dark:text-gray-100">
                    <div class="flex flex-col">
                        <div>
                            <label for="name" class="text-sm font-bold">Full name</label>
                            <input bind:value={donate_form.name} id="name" type="text" placeholder="Enter Full Name" class="w-full p-3 rounded dark:bg-gray-800">
                        </div>
                        <div class="mt-8">
                            <label for="phone" class="text-sm font-bold">Phone Number</label>
                            <input bind:value={donate_form.phone} id="phone" type="text" placeholder="Enter Phone No" class="w-full p-3 rounded dark:bg-gray-800">
                        </div>
                    </div>
                    <div class="">
                        <div>
                            <label for="message" class="text-sm font-bold">Good Will Message <span class="text-gray-500">(Optional)</span></label>
                            <textarea bind:value={donate_form.message} id="message" placeholder="Good Will Message" rows="3" class="w-full h-40 p-3 rounded dark:bg-gray-800"></textarea>
                        </div> 
                        <div class="flex justify-end">
                            <TriggerDonateButton mode={donate_mode} loading={donate_loading} on:clicked={()=>{donate()}}/>
                        </div>
                    </div> 
                </form>
        
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

                    <div class="absolute inset-0 flex items-center justify-center">
                        <img class="w-12 h-12" src={PlayBtn} on:click={()=>{video_modal=true}}>

                    </div>

                </div>
            </div>
        </Aligner> 
    </div>
    <div class="text-center m-4 md:m-8 lg:m-16">
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

    <CampaignFooter/>
            
    

         

</section>