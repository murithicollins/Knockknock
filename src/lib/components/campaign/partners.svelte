<script>

    import TawaLogo  from '$lib/assets/tawa.png';
    import TinyLogo from '$lib/assets/tiny.png';
    import Startinev from '$lib/assets/startinev.png';
    import Galium from '$lib/assets/galium.jpeg';
    import crystal from '$lib/assets/crystal.png';

    

    


    let partners = [
        {
            name: "Tawa",
            logo: TawaLogo,
            link: "https://pnpradius.com/"
        },
        {
            name: "Tiny",
            logo: TinyLogo,
            link: "https://v2.tinypesa.com/"
        },

        {
            name: "Startinev",
            logo: Startinev,
            link: "https://startinev.com/"
        },

        {
            name: "Galium",
            logo: Galium,
            link: "https://642be671313fb.site123.me/"
        },
        {
            name: "Crystal Hearts Foundation Ke",
            logo: crystal,
            link: "https://twitter.com/CrystalHeartsKe"
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