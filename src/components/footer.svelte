<script>
//     const emailInput = document.getElementById('emailInput');
//     const sendButton = document.getElementById('sendButton');
    
    
//     sendButton.addEventListener('click', () => {

//      const email = emailInput.value;
  
//      emailInput.value = '';
//  });
function handleSubscribeClick() {
    // Make an API call to send the subscription email
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'example@example.com' }),
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

</script>



<footer class="bg-[#D9D9D9] w-full">
    <!-- main div -->
    <div class="flex flex-col md:flex-row  justify-center gap-10">
        <!-- img div-->
        <div>
            <img src="img/long logo.png" alt="" class="h-40 m-10" >

        </div>
        <!-- context div -->
        <div class=" flex flex-col justify-center space-y-2 md:space-y-4 p-4 ">
            <!-- input -->
            <div class="flex flex-col items-center md:flex-row gap-2 md:gap-4">
                <div class="grid justify-between items-center">
                    <input class="rounded-full relative inline-block"  type="email" name="" id="emailInput" placeholder="Your Email"/>
                    <img src="img/send.png" alt="send"  class="h-6 mr-8 md:mr-2 absolute justify-self-end hover:cursor-pointer"  on:click={handleSubscribeClick}/>
                </div>
                <div>
                    <p class="flex justify-center text-[#EF6C00] p-2 text-xl ml-4">subscribe newsletters</p>
                </div>
            </div>
            <!-- dd -->
            <div class="flex flex-col justify-center ">
                <!-- links -->
                <div class="text-[#00394f] text-xl ">
                    <ul class="flex gap-4 md:gap-16 p-2">
                        <li><a href="/" class="font-primary font-bold">Home</a></li>
                        <li><a href="/Product"class="font-primary font-bold">Product</a></li>
                        <li><a href="/Team" class="font-primary font-bold" >Team</a></li>
                        <li><a href="/Contactus" class="font-primary font-bold ">Contact</a></li>
                    </ul>
                </div>
                <!-- social img -->
                <div>
                    <ul class="flex gap-4 md:gap-16 p-2">
                        <li><img src="img/in.png" alt="" class="h-16"></li>
                        <li><img src="img/tweet.png" alt="" class="h-16"></li>
                        <li><img src="img/tube.png" alt=""class="h-16"></li>
                        <li><img src="img/insta.png" alt=""class="h-16"></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    <!-- copy info -->
    <div class="w-full h-8">
        <!-- line -->
        <div>
            <p class="border-2  border-[#000000]"></p>
        </div>
        <!-- powered by galium -->
        <div class="flex justify-center text-xs">
            <p>©2023 Powered By Gallium Tech.All Rights Reserved.</p>
        </div>

    </div>
    
</footer>
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