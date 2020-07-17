<script>
  import { url, isActive } from "@sveltech/routify";

  const sitios = [
    ["/index", "Inicio", "fas fa-home"],
    ["./tallas", "tallas", "fas fa-user-tie"],
    ["./raul", "Raul", "fas fa-tshirt"]
  ];
</script>

<nav class="nav nav-pills nav-justified shadow p-1 rounded">

  {#each sitios as [path, name, icon]}
    <a
      class="nav-item nav-link"
      class:active={$isActive(path)}
      href={$url(path)}>
      <i class={icon} />
      &nbsp; {name}
    </a>
  {/each}

</nav>
