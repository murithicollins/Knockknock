<script>

    import TawaLogo  from '$lib/assets/tawa.png';
    import TinyLogo from '$lib/assets/tiny.png';
    import Startinev from '$lib/assets/startinev.png';
    import Galium from '$lib/assets/galium.jpeg';


    let partners = [
        {
            name: "Tawa",
            logo: TawaLogo,
            link: "https://tawa.com.br/"
        },
        {
            name: "Tiny",
            logo: TinyLogo,
            link: "https://tiny.com.br/"
        },

        {
            name: "Startinev",
            logo: Startinev,
            link: "https://tiny.com.br/"
        },

        {
            name: "Galium",
            logo: Galium,
            link: "https://tiny.com.br/"
        }
    ]
    
</script>

<div class="flex justify-center gap-32">
    <div class="flex flex-wrap md:gap-8 gap-4">
        {#each partners as partner}
        <a href={partner.link} target="_blank">
            <img src={partner.logo} alt={partner.name} class="w-32 object-contain h-32">
        </a>
        {/each}
    </div>
   
</div>