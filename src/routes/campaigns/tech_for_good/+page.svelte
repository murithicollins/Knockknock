<script>
    import PlayBtn from '$lib/assets/play.png';
    import HeaderImg from '$lib/assets/header.png';
    import {Donatebutton, Aligner, Modal} from '$lib/components';
    let showModal=false;
    const openModal = () => {
        showModal=!showModal;
    }

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
            <h1 class="text-5xl text-lg text-center">
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
                        Ksh <input type="number" name="" id="" placeholder="Customer Amount" class="text-green-500 text-2xl outline-none border-none">
                    </p>
                </div>
            </Aligner>
        </div>
    </div>
    <div>
        <form novalidate="" class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div class="flex flex-col justify-between">
                <div>
                    <label for="name" class="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="Enter Full Name" class="w-full p-3 rounded dark:bg-gray-800">
                </div>
                <div>
                    <label for="email" class="text-sm">Phone Number</label>
                    <input id="email" type="email" placeholder="Enter Phone No" class="w-full p-3 rounded dark:bg-gray-800">
                </div>
            </div>
            <div class="">
                <div>
                    <label for="message" class="text-sm">Good Will Message</label>
                    <textarea id="message" placeholder="Good Will Message" rows="3" class="w-full h-40 p-3 rounded dark:bg-gray-800"></textarea>
                </div> 
                <div class="flex justify-end">
                    <button class="bg-[#1D976C] text-white font-bold py-2 px-10 rounded-full" on:click={openModal}>
                        Button
                    </button>
                </div>
            </div> 
        </form>

         
    </div>
</section>