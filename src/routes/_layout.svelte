<script>
  import Nav from "../components/Nav.svelte";
  import Foot from "../components/Foot.svelte";

  export let segment;
</script>

<!-- <style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

<Nav {segment} />

<main class="min-h-screen text-indigo-200 p-3">
  <slot />
</main>
<Foot />
