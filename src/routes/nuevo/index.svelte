<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`nuevo.json`)
      .then((r) => r.json())
      .then((medidas) => {
        return { medidas };
      });
  }
</script>

<script>
  export let medidas;
  let mds = null;

  // estado inicial de las medidas
  let estadoTalla = "M";

  // cargando datos iniciales de la API
  const cargando = () => {
    mds = null;
    mds = medidas;
  };

  let aumentar = [
    {
      nombre: "Contorno de Pecho",
      sumar: 6,
    },
    {
      nombre: "Hombro",
      sumar: 1,
    },
    {
      nombre: "Largo",
      sumar: 2,
    },
    {
      nombre: "Largo de Manga",
      sumar: 2,
    },
    {
      nombre: "Contorno de Cintura",
      sumar: 6,
    },
    {
      nombre: "Hombro Tamaño",
      sumar: 1,
    },
    {
      nombre: "Contorno de Cadera",
      sumar: 6,
    },
    {
      nombre: "Contorno de Puño",
      sumar: 1,
    },
    {
      nombre: "Contorno de Manga",
      sumar: 2,
    },
    {
      nombre: "Cierre",
      sumar: 2,
    },
    {
      nombre: "Costado",
      sumar: 2,
    },
  ];

  cargando();

  const tallas = [
    {
      talla: "S",
      active: false,
    },
    {
      talla: "M",
      active: true,
    },
    {
      talla: "L",
      active: false,
    },
    {
      talla: "XL",
      active: false,
    },
  ];

  function ver(index) {
    return aumentar[index].sumar;
  }

  const cambiar = (t) => {
    estadoTalla = t.talla;
    console.log(estadoTalla);

    // re-mostrando los nuevos valores de las medidas
    calcular2();

    let mod = {
      talla: t.talla,
      active: true,
    };
    // buscando el indice de la talla seleccionada
    const indice = tallas.findIndex((i) => i.talla === t.talla);
    tallas[indice] = mod;

    // cambiando a todos a false el valor de las tallas a mostrar
    tallas.forEach(function (valor, index, array) {
      if (index === indice) {
      } else {
        tallas[index] = {
          talla: valor.talla,
          active: false,
        };
      }
    });
  };
  function calcular() {
    let tallaL = [
      {
        nombre: "Contorno de Pecho",
        sumar: 6,
      },
      {
        nombre: "Hombro",
        sumar: 1,
      },
      {
        nombre: "Largo",
        sumar: 2,
      },
      {
        nombre: "Largo de Manga",
        sumar: 2,
      },
    ];

    let indice = 0;
    this.pageEstaticas = [];
    for (let i = 1; i <= medidas.length; i++) {
      const indiceT = tallaL.findIndex(
        (i) => i.nombre === medidas[indice].nombre
      );
      mds = [];
      mds.push({
        nombre: medidas[indice].nombre,
        medida: medidas[indice].medida + tallaL[indiceT].sumar,
      });
      indice++;
    }
  }

  const calcular2 = () => {
    // datos para calcular el nuevo valor
    cargando();

    // estado para sumar
    let por = 1;
    switch (estadoTalla) {
      case "S":
        por = 1;
        break;
      case "M":
        por = 1;
        break;
      case "L":
        por = 1;
        break;
      case "XL":
        por = 2;
        break;
      default:
        por = 1;
    }

    if (estadoTalla !== "M") {
      // basae apra iniciar el indice
      let indice = 0;
      mds = [];
      for (let i = 1; i <= medidas.length; i++) {
        const indiceT = aumentar.findIndex(
          (i) => i.nombre === medidas[indice].nombre
        );
        mds.push({
          nombre: medidas[indice].nombre,
          medida:
            estadoTalla === "S"
              ? medidas[indice].medida - aumentar[indiceT].sumar * por
              : medidas[indice].medida + aumentar[indiceT].sumar * por,
        });
        indice++;
      }
    } else {
      cargando();
    }
  };
</script>

<svelte:head>
  <title>Raul</title>
</svelte:head>

<div class="w-full">
  <div class="text-2xl text-white">Tallas de chamarra Nuevo</div>
  <div class=" py-2">Selecciona una talla para ver sus medidas</div>
  <div
    class="w-full h-10 flex justify-between border-t border-r border-l
    border-gray-800 items-center">
    <div class="pl-4 uppercase">Tallas &nbsp;&nbsp;&nbsp; ===</div>
    <div class="h-10 flex items-center">

      {#each tallas as talla}
        <div
          on:click={() => cambiar(talla)}
          class="border border-gray-800 h-full w-10 flex items-center
          justify-center font-semibold cursor-pointer {talla.active ? 'bg-green-700' : ''}">
          {talla.talla}
        </div>
      {/each}
    </div>
  </div>
  <table class="table-fixed bg-gray-800 rounded w-full">
    <thead class="bg-blue-800">
      <tr class="border-l border-r border-gray-700">
        <th class="w-1/2 px-4 py-2">Medidas</th>
        <th class="w-1/4 px-4 py-2">cm.</th>
        {#if estadoTalla !== 'M'}
          {#if estadoTalla === 'S'}
            <th class="w-10">-</th>
          {:else}
            <th class="w-10">+</th>
          {/if}
        {/if}
      </tr>
    </thead>
    <tbody>
      {#each mds as med, index}
        <tr class={index % 2 ? 'bg-indigo-800' : 'bg-indigo-900'}>
          <td class="border border-gray-700 px-4 py-2 text-xs sm:text-base">
            {med.nombre}
          </td>

          <td
            class="border border-gray-700 px-4 py-2 text-center text-xs
            sm:text-base">
            {med.medida} cm.
          </td>
          {#if estadoTalla !== 'M'}
            <th class="border border-gray-700 px-4 py-2 text-center text-xs">
              {ver(index)}
            </th>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
