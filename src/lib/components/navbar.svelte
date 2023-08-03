
<script>
  import KnockIcon from '$lib/assets/navbar/long logo.png';
   

  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<div>
  <nav class="w-full px-44 py-8 mx-auto md:flex md:justify-between md:items-center shadow-xl bg-white fixed top-0 z-50">
    <div class="flex items-center justify-between">
      <a href="/" class="flex items-center">
        <img src={KnockIcon} class="h-12 mr-3" alt="KNOCK KNOCK" />
      </a>
      <!-- Mobile menu button -->
      <div on:click={toggleNavbar} class="flex md:hidden">
        <button
          type="button"
          class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu? 'flex': 'hidden'}">
      <ul class="flex flex-col font-medium  md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
        <!-- ... (rest of the code) ... -->
        <li>
          <a href="/main" class="text-[#EF6C00] font-primary font-bold hover:underline" aria-current="page">Home</a>
        </li>
        <li class="relative">
          <input type="checkbox" id="sortbox" class="hidden absolute">
          <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
          <a href="/main/Product" class="text-[#EF6C00] font-primary font-bold hover:underline">Product</a>
          <!-- <span href="/main/Product" class="font-primary font-bold" class="text-lg">Product</span> -->
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
          </label>
              <div id="sortboxmenu" class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
              <ul class="block text-right text-gray-900">
                  <li><a href="/main/bell" class="block px-3 py-2 hover:bg-gray-200">I-bell</a></li>
              </ul>
          </div>
        </li>

        <li>
          <a href="/main/Team" class="text-[#EF6C00] font-primary font-bold  hover:underline">Team</a>
        </li> 
        <li>
          <a href="/main/Contact_us" class="text-[#EF6C00] font-primary font-bold dark:text-white hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
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
      #sortbox:checked ~ #sortboxmenu {
        opacity: 1;
    }
</style>

                
                  