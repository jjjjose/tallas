<script>
  import Index from "./nuevo/index.svelte";
</script>

<svelte:head>
  <title>TALLAS</title>
</svelte:head>

<div class="mt-2 w-full flex flex-col justify-center items-center">
  <div class="text-xl text-white py-5 text-center">
    Si deseas ver las medidas has clic en el menu superior
  </div>
  El grafico muestra alguna de las medidas que se toman para el realizado de
  prendas.
  <div class="w-11/12 h-48 sm:h-64 mt-6">
    <div
      class="bg-no-repeat bg-contain bg-center w-full h-full"
      style="background-image: url(assets/img/medidas.png)" />
  </div>

  <ul class="mt-8 list-disc px-12">
    <li>A.- Hombro</li>
    <li>B.- Contorno de pecho</li>
    <li>C.- Contorno de cadera</li>
    <li>D.- Cierre</li>
    <li>E.- Largo de Manga</li>

  </ul>

</div>
