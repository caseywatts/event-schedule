<script>
  export let events = [{name: "hah"}];
  export let zoomScale = 0.1;
</script>

{#each events as event}
  <div class="p-2" style="height:{zoomScale * event.duration}em">
    <div class="mx-auto h-full w-full sm:w-1/2 md:w-1/3 bg-slate-200 p-2 rounded-md border border-slate-400 {event.type}">
      <div class="flex">
        <span class="grow text-lg font-medium"><input type="text" class="w-full" bind:value={event.name}/></span>
        <span>{event.startTime}–{event.endTime}</span>
      </div>
    </div>
  </div>
{/each}