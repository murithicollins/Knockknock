<script>

    let carousel_images = [
        {
            src: 'img/hero/award.jpg',
            alt: 'Knockknock award',
            description: 'Innovate now award in the category of health and wellness year 2022'
        },
        {
            src: 'img/hero/knock team.png',
            alt: 'Knockknock award',
            description: 'Innovate now award in the category of health and wellness year 2022'
        },
        {
            src: 'img/hero/knock.png',
            alt: 'Knockknock award',
            description: 'Innovate now award in the category of health and wellness year 2022'
        }
    ]


    let current_image = carousel_images[0]

    let goToNext = () => {
        let index = carousel_images.indexOf(current_image)
        if (index === carousel_images.length - 1) {
            current_image = carousel_images[0]
        } else {
            current_image = carousel_images[index + 1]
        }
    }

    let goToPrevious = () => {
        let index = carousel_images.indexOf(current_image)
        if (index === 0) {
            current_image = carousel_images[carousel_images.length - 1]
        } else {
            current_image = carousel_images[index - 1]
        }
    }


</script>

<div class="">

    <div class="relative my-4 rounded-lg border-2 border-gray-500">
        <img class="h-64 md:h-72 w-full object-cover rounded" alt={current_image.alt} src="{current_image.src}">
        <div class="absolute bottom-0 left-0 right-0 text-white p-4" style="background:rgba(0,0,0, 0.7)">
            <h1 class="font-bold underline">{current_image.alt}</h1>
            <p class="text-sm">{current_image.description}</p>
        </div>
    </div>

    <div class="flex justify-between">
        <!--image preview in cards-->
        <div class="flex flex-grow justify-start">
            {#each carousel_images as image}
            <div class="p-2">
                <img class="h-12 w-12 border-2 border-gray-300 object-cover rounded" alt={image.alt} src="{image.src}" on:click={() => {
                    current_image = image
                }}>
            </div>
            {/each}
        </div>


        <!--Next and previous buttons-->
        <div class="flex flex-shrink-0 justify-center items-center">
            <button class="p-2 m-2 bg-[#EF6C00] rounded-full" on:click={goToPrevious}>
                <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <button class="p-2 m-2 bg-[#EF6C00] rounded-full" on:click={goToNext}>
                <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>

    </div>


    

    

    
</div>