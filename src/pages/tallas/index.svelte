<script>
  let talles = [
    {
      nombre: "Contorno de Pecho",
      medida: "110"
    },
    {
      nombre: "Hombro",
      medida: "42.6"
    },
    {
      nombre: "Largo",
      medida: "73"
    },
    {
      nombre: "Largo Manga",
      medida: "62"
    },
    {
      nombre: "Contorno Cintura",
      medida: "101.2"
    },
    {
      nombre: "Hombro Tamaño",
      medida: "12.5"
    },
    {
      nombre: "Contorno Cadera",
      medida: "108"
    },
    {
      nombre: "Contorno Puño",
      medida: "28"
    },
    {
      nombre: "Contorno de manga",
      medida: "43"
    },
    {
      nombre: "Costado",
      medida: "45"
    }
  ];
  const talle = [
    { talla: "S", active: false },
    { talla: "M", active: true },
    { talla: "L", active: false },
    { talla: "XL", active: false }
  ];

  function cambiar(medida) {
    console.log(medida);
    // this is equivalent to size.update(n => n + 1)
    // $size += 1;
  }
</script>

<div class="col-12">
  <div class="shadow-sm p-3 mb-1 rounded">Tallas Estandar</div>
  <div class="btn-group" role="group" aria-label="Basic example">
    {#each talle as talle2}
      <button
        type="button"
        on:click="{cambiar(talle2.talla)}"
        class="btn {talle2.active ? 'btn-primary' : 'btn-outline-secondary'}"
      >
        {talle2.talla}
      </button>
    {/each}
  </div>
  <ul class="list-group">
    {#each talles as tallas, index}
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {tallas.nombre}
        <span class="badge badge-primary badge-pill">{tallas.medida} cm.</span>
      </li>
    {/each}

  </ul>
</div>
