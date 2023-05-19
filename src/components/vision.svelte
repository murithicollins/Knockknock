
<div id="cards mx-10">
  <figure class="card card--normal">
    <figcaption class="card__caption">
      <h1 class="card__name">✓  Strategic Partner</h1>
      <div class="card__stats">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eaque at nobis doloremque odit labore provident unde officiis odio sit sint? 
          Vitae accusantium praesentium ullam alias aut quod cum perferendis maiores.
        </p>
      </div>
    </figcaption>
  </figure>

  <figure class="card card--water">
    <figcaption class="card__caption">
      <h1 class="card__name">✓ Financial support</h1>
      
      <table class="card__stats">
        <div>
          <p class="p-2">We are seeking financial support to help scale knock knock. 
            Our goal is to expand knock knock to reach a larger population particularly those of low income 
            who cannot afford the gadget at the current price.
          </p>
        </div>
      </table>
    </figcaption>
  </figure>

  <figure class="card card--electric">
    

    <figcaption class="card__caption">
      <h1 class="card__name">✓ Operation support</h1>

      

      <table class="card__stats">
        <div>
          <p class="p-2">We are looking for organizations that could help us subsidize production and operation costs
            by exploring existing networks. Such includes support in manufacturing, production, and
            support by providing us with working space to expand and scale the project.
        </p>
        </div>
      </table>
    </figcaption>
  </figure>
</div>
<style>
.card {
  display: inline-block;
  width: 300px;
  /* padding: 1em; */
  border-radius: 15px;
  margin: 10px;
  background: #ddd;
  box-shadow: 0px 5px 20px -10px #111111;
  transition: 0.4s;
}
.card__caption {
  background-color: rgba(255, 255, 255, 0.65);
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
  transform: translateY(0px) rotate(3deg);
}
.card:nth-child(2) {
  transform: translateY(0px) rotate(-4deg);
}
.card:nth-child(3) {
  transform: translateY(0px) rotate(2deg);
}
.card:hover {
  z-index: 5;
  box-shadow: 0px 13px 30px -15px #000000;
  transform: translateY(-10px);
}
</style>