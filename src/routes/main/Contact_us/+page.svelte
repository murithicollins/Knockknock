<script>
    export let data;
    import {Ruler} from '$lib/components';
    import MessageIcon from '$lib/assets/contact/message.png';
    import phoneIcon from '$lib/assets/contact/phone.png';


</script>
<Ruler>
    <main>
        <!-- main div -->
        <div class="hero">
            <!-- map -->
            <div class="relative">
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe title='' class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"marginwidth="0"
                        src="https://maps.google.com/maps?width=771&amp;height=876&amp;hl=en&amp;q= Kalimoni Highway View Plaza (Uchumi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                        <a href="https://capcuttemplate.org/">Capcut Templates</a>
                    </div>
                </div>
            </div>
            <!-- MAIN CONTAINER -->
            <form method="POST"  class="flex justify-centers md:justify-end">
                    <!-- container -->
                <div class="w-full md:w-4/12  bg-[#FFFFFF] rounded-lg shadow-md flex  flex-col  m-8 md:m-20" >
                    <!-- context -->
                    <div class="p-4'">
                            <!-- mail and phone -->
                        <div class="ml-10 md:ml-20 my-4 md:my-10 space-y-4">
                            <div class="flex flex-col md:flex-row justify-center md:justify-start ">
                                <img src={MessageIcon} alt="" class="h-6 w-6 ">
                                <p class="pl-4">admin.knockknock.co.ke</p>
                            </div>
                            <div class="flex">
                                <img src={phoneIcon} class="h-6"alt="">
                                <p class="pl-4">+254 113 873 715</p>
                            </div>
                
                        </div>
    
                        <div>
                            {#if data.message}
                            <p>{data.message}</p>
                            {/if}
                        </div>
    
    
                        <!-- name message -->
                        <div class="pl-4">
                            <!-- name -->
                            <div>
                                <p>Name</p>
                                <input type="text" name="Name" id="">
                            </div>
                            <!-- email -->
                            <div>
                                <p>Email address</p>
                                <input type="email" name="Email" id="" class="">
                                <!-- <div class="border-2 border-[#EF6C00]"></div> -->
                            </div>
                            <!-- message -->
                            <div>
                                <p>message</p>
                                <textarea name="message" id="" cols="25" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <!-- lets talk -->
                    <div class=" ">
                        <button class="bg-[#EF6C00] rounded-lg  w-full h-14 p-2" type="submit">
                            <h1>Let's talk ! </h1>
                            <img src="" alt="">
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</Ruler>
<style>
    .mapouter {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 700px;
    }
    .gmap_iframe {
        height: 876px !important;
    }
</style>
