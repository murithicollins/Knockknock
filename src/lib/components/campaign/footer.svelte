<script>

    import Insta from '$lib/assets/icons/insta.svg';
    import Twitter from '$lib/assets/icons/twitter.png';
    import Facebook from '$lib/assets/icons/facebook.svg';
    import Email from '$lib/assets/icons/email.svg';
    import Call from '$lib/assets/icons/call.svg';


</script>
<!-- main div -->
<div class="grid grid-cols-1 md:grid-cols-3 bg-green-500 py-4 md:py-8">
    <!-- call us -->
    <div class="flex justify-center">
        <div class="flex items-center text-white">
            <img src="{Call}" class="w-8 h-8 m-2 md:m-4"  alt="">
            <div>
                <p class="font-bold">Call Us: </p>
                <p>+254 113 873 715</p>
            </div>
        </div>
    </div>
    <!-- Email us -->
    <div class="flex justify-center">
        <div class="flex items-center text-white">
            <img src="{Email}" class="w-8 h-8 m-2 md:m-4"  alt="">
            <div>
                <p class="font-bold">Email Us: </p>
                <p>knockknock.ke@gmail.com</p>
            </div>
        </div>
    </div>
    <!-- follow us -->
    <div class="flex justify-center">
        <div class="flex flex-col text-white">
            <p class="font-bold">Follow Us: </p>
            <div class="flex items-center">
                <img src="{Insta}" class="w-8 h-8 m-2 md:m-4"  alt="">
                <img src="{Facebook}" class="w-8 h-8 mr-2 md:mr-4"  alt="">
                <img src="{Twitter}" class="w-8 h-8 m-2 md:m-4"  alt="">
            </div>
        </div>
    </div>
</div>