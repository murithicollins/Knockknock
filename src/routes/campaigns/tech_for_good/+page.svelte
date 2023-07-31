<script>
    import PlayBtn from '$lib/assets/play.png';
    import HeaderImg from '$lib/assets/header.png';
    import {Donatebutton, Aligner} from '$lib/components';


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
    <form>
        <!--Name input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput7"
            placeholder="Name" />
          <label
            for="exampleInput7"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Name
          </label>
        </div>
    
        <!--Email input-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput8"
            placeholder="Email address" />
          <label
            for="exampleInput8"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Email address
          </label>
        </div>
    
        <!--Message textarea-->
        <div class="relative mb-6" data-te-input-wrapper-init>
          <textarea
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Message"></textarea>
          <label
            for="exampleFormControlTextarea13"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Message
          </label>
        </div>
    
        <!--Checkbox-->
        <div
          class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
          <input
            class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="checkbox"
            value=""
            id="exampleCheck10" />
          <label
            class="inline-block pl-[0.15rem] hover:cursor-pointer"
            for="exampleCheck10">
            Send me a copy of this message
          </label>
        </div>
    
        <!--Submit button-->
        <button
          type="submit"
          class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Send
        </button>
    </form>   

</section>