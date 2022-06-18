<script>
  import Event from '../lib/Event.svelte'
  export let events = [{name: "hah"}];
  export let zoomScale = 0.1;
</script>

{#each events as event}
<Event {event} {zoomScale}></Event>
{/each}