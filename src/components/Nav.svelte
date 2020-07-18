<script>
  function cli() {
    window.location.href = "/";
  }

  export let segment;
</script>

<nav
  class="bg-blue-900 h-12 px-3 flex justify-between items-center fixed w-full">
  <div
    on:click={cli}
    class="text-white text-2xl uppercase cursor-pointer font-bold">
    <i class="fas fa-tshirt"></i> Tallas
  </div>
  <div
    class="text-lg text-gray-500 flex justify-evenly w-6/12 font-light
    items-center">
    <a
      href="estandar"
      class="{segment === 'estandar' ? 'border-b  border-indigo-200 text-indigo-200' : undefined}
      ">
      Estandar
    </a>
    <a
      href="raul"
      class="{segment === 'raul' ? 'border-b  border-indigo-200 text-indigo-200' : undefined}
      ">
      Raul
    </a>
  </div>
</nav>
<div class="h-12" />
