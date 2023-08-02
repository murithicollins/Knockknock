<script>

// import the ruler component
import Ruler from './Ruler.svelte';

// import the images
import LinkedIn from '$lib/assets/footer/in.png';
import Twitter from '$lib/assets/footer/tweet.png';
import  YouTube from '$lib/assets/footer/tube.png';
import InstaGram from '$lib/assets/footer/insta.png';
import MessageIcon from '$lib/assets/footer/message.png';
import PhoneIcon from '$lib/assets/footer/phone.png';



function handleSubscribeClick() {
    // Make an API call to send the subscription email
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'admin.knockknock.co.ke' }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  }

  let socials = [
    {img: LinkedIn, alt: 'linkedin'},
    {img: Twitter, alt: 'twitter'},
    {img: YouTube, alt: 'youtube'},
    {img: InstaGram, alt: 'instagram'},
  ]


</script>

<footer class="bg-[#D9D9D9] w-full">
    <!-- main div -->
            <!-- main div -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
                <!-- img div-->
                <div>
                    <img src="img/long logo.png" alt="" class="h-14 my-4" >
                    <div>
                        <p class="xl:text-sm my-4">
                            A global innovation hub for assistive and inclusive tech for persons with hearing loss. 
                        </p>
                    </div>
                    <div class="flex items-center gap-4 my-2">
                        <img src={PhoneIcon} alt="" class="h-6 w-6 p-1 rounded-full border-2 border-[#EF6C00]" >
                        <a href="tel:+254-113873715" class="font-regular text-sm">Phone: &nbsp +254-113-873-715</a>
                    </div>

                    <div class="flex items-center gap-4 my-2">
                        <img src={MessageIcon} alt="" class="h-6 w-6 p-1 rounded-full border-2 border-[#EF6C00]" >
                        <a href="mailto:info@knockknock.co.ke" class="font-regular text-sm">Email: &nbsp info@knockknock.co.ke</a>
                    </div>

                </div>

                <div class="py-4 ">
                    <h1 class="text-[#EF6C00] text-lg font-semibold">Quick Links.</h1>

                    <div class="h-1 w-48 bg-[#EF6C00] my-1 rounded-full"/>

                    <div class="text-[#00394f] text-xl my-4 underline">
                        <ul class="flex gap-4 text-sm md:gap-12 p-2 font-primary">
                            <li><a href="/" class="">Home</a></li>
                            <li><a href="/Product"class="">Product</a></li>
                            <li><a href="/Team" class="" >Team</a></li>
                            <li><a href="/Contactus" class="">Contact</a></li>
                        </ul>
                    </div>
                    <!-- social img -->
                    <div class="flex gap-4 md:gap-8">

                        {#each socials as social}
                            <img src={social.img} alt={social.alt} class="h-8 md:h-8">
                        {/each}
                        
                    </div>
                </div>


                <!-- context div -->
                <div class=" flex flex-col justify-center space-y-2 md:space-y-4 p-4 ">
                    <!-- input -->
                    <div class="flex flex-col md:gap-4">

                        <div>
                            <h1 class="flex text-[#EF6C00] text-lg font-semibold">Subscribe to our newsletters.</h1>

                            <div class="h-1 w-48 bg-[#EF6C00] my-1 rounded-full"/>

                            <p class="text-sm my-4">
                                Stay upto date with our latest news and products and awesome technology updates.
                            </p>
                        </div>

                        <div class="rounded-lg flex">
                            <input class="relative rounded-l-lg"  type="email" name="" id="" placeholder="Your Email"/>
                            <button class="bg-[#EF6C00] text-white rounded-r-lg px-4 py-2" on:click={handleSubscribeClick}>Subscribe</button>
                        </div>
                        
                    </div>
                    <!-- dd -->
                    <div class="flex flex-col justify-center ">
                        <!-- links -->
                        
                    </div>
                </div>
                
            </div>
        <Ruler/>
        
        <div class="w-full h-8">
            <!-- line -->
            <div>
                <p class="border-2  border-[#000000]"></p>
            </div>
            <!-- powered by galium -->
            <div class="flex justify-center text-xs">
                <p>©2023 Powered By <a href="galliumtech.co.ke" class="text-[#EF6C00]">Gallium Tech</a>.All Rights Reserved.</p>
            </div>

        </div>
        
        
    </footer>

<style>
.font-primary {
    }
.font-secondary {
      font-family: sans-serif;
    }
    
.font-tertiary {
      font-family: "Museo Slab", serif;
    }

</style>