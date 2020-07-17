<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`raul.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Raul</title>
</svelte:head>
<div>
hola amigos
</div>