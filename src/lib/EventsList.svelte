<script>
  import Event from '../lib/Event.svelte'
  export let events = [{name: "hah"}];
  export let zoomScale = 0.1;
</script>

{#each events as event}
  <Event bind:event={event} {zoomScale}></Event>
{/each}