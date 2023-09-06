<script>

    import Insta from '$lib/assets/icons/insta.svg';
    import Twitter from '$lib/assets/icons/twitter.png';
    import Facebook from '$lib/assets/icons/facebook.svg';
    import linkedin from '$lib/assets/icons/linkedin.svg';
    import Email from '$lib/assets/icons/email.svg';
    import Call from '$lib/assets/icons/call.svg';


</script>
<!-- main div -->
<div class="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3 bg-green-500 py-4 md:py-8">
    <!-- call us -->
    <div class="flex md:justify-center">
        <div class="flex items-center text-white">
            <img src="{Call}" class="w-8 h-8 m-2 md:m-4"  alt="">
            <div>
                <p class="font-bold">Call Us: </p>
                <a href="tel:+254 113 873 715">+254 113 873 715</a>
            </div>
        </div>
    </div>
    <!-- Email us -->
    <div class="flex md:justify-center">
        <div class="flex items-center text-white">
            <img src="{Email}" class="w-8 h-8 m-2 md:m-4"  alt="">
            <div>
                <p class="font-bold">Email Us: </p>
                <a href="mailto:knockknock.ke@gmail.com">knockknock.ke@gmail.com</a>
            </div>
        </div>
    </div>
    <!-- follow us -->
    <div class="flex md:justify-center">
        <div class="flex flex-col text-white">
            <p class="font-bold ml-2 md:ml-4">Follow Us: </p>
            <div class="flex items-center">
                <a href="https://www.linkedin.com/company/knocknockke/"><img src="{linkedin}" class="w-8 h-8 m-2 md:m-4"  alt=""></a>
                <a href="https://twitter.com/Knockknockke"><img src="{Twitter}" class="w-8 h-8 m-2 md:m-4"  alt=""></a>
            </div>
        </div>
    </div>
</div>