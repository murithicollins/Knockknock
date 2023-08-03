<script>
  import Ruler from "./Ruler.svelte";
</script>
<Ruler>
  <main class="py-4 md:py-8">
    <div class="flex justify-center my-4 md:mx-10">
      <h1 class="mb-4 text-2xl font-primary font-bold text-[#EF6C00]   dark:text-white">Join Our Vision</h1>
    </div>
    <div id="cards">
      <div class="flex justify-center my-4">
        <p class="text-sm md:text-24 font-secondary text-[#00394F]">Partner with us in our initiative of helping the Deaf navigate the sound environment. 
          What we are looking for: </p>
      </div>
      <div class="flex justify-center my-8 flex-col md:flex-row  ">
        <figure class="card card--normal">
          <figcaption class="card__caption">
            <h1 class="card__name font-primary text-4xl">✓  Strategic Partner </h1>
            <p class="border-4 rounded-full border-[#00394F] "></p>
            <div class="card__stats">
              <p class="p-2 text-sm md:text-24 font-secondary">
                We are looking to partner with organizations that share the same 
                vision of helping persons with hearing loss to implement the project. 
                The partnership is dynamic, depending on what the organization can 
              </p>
            </div>
          </figcaption>
        </figure>
      
        <figure class="card card--water">
          <figcaption class="card__caption">
            <h1 class="card__name font-primary text-4xl">✓ Financial support</h1>
            <p class="border-4 rounded-full border-[#00394F] "></p>
            <table class="card__stats">
              <div>
                <p class="p-2 text-sm md:text-24 font-secondary">We are seeking financial support to help scale knock knock. 
                  Our goal is to expand knock knock to reach a larger population particularly those of low income 
                  who cannot afford the gadget at the current price.
                </p>
              </div>
            </table>
          </figcaption>
        </figure>
      
        <figure class="card card--electric">
          <figcaption class="card__caption">
            <h1 class="card__name font-primary text-4xl">✓ Operation support</h1>
            <p class="border-4 rounded-full border-[#00394F] "></p>
            <table class="card__stats">
              <div>
                <p class="p-2 text-sm md:text-24 font-secondary">We are looking for organizations that could help us subsidize production and operation costs
                  by exploring existing networks. Such includes support in manufacturing, production, and
                  support by providing us with working space to expand and scale the project.
              </p>
              </div>
            </table>
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</Ruler>
<style>
.card {
  /* display: flex; */
  width: 300px;
  /* padding: 1em; */
  border-radius: 15px;
  margin: 2px;
  background: #ddd;
  box-shadow: 0px 5px 20px -10px #111111;
  transition: 0.4s;
}
.card__caption {
  /* background-color: rgba(255, 255, 255, 0.65); */
  padding: 1em;
  position: relative;
  border-radius: 0 0 3px 3px;
}


.card__name {
  font-family: "Open Sans Condensed", "Open Sans", helvetica, sans-serif;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.card__stats {
  margin: 1em 0;
  width: 100%;
}

.card--normal {
 
  box-shadow: 0px 5px 20px -10px #3A1C71;
}

.card--water {
  box-shadow: 0px 5px 20px -10px #000851;
}



.card:nth-child(1) {
  transform: translateY(0px) rotate(-4deg);
}
.card:nth-child(2) {
  transform: translateY(0px) rotate(0deg);
}
.card:nth-child(3) {
  transform: translateY(0px) rotate(4deg);
}
.card:hover {
  z-index: 5;
  box-shadow: 0px 13px 30px -15px #000000;
  transform: translateY(-10px);
}
@media (max-width: 768px) {
  .card:nth-child(1),
  .card:nth-child(2),
  .card:nth-child(3) {
    transform: translateY(0px) rotate(0deg);
  }
}
@media (min-width: 992px) {
  .card {
    margin: 20px;
  }
}

</style>