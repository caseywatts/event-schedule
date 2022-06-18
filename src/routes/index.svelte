<script>
  import schedule from "../schedule.json"
  const scheduleJSONString = JSON.stringify(schedule);
</script>
<div>
  {scheduleJSONString}
  {#each schedule.events as event}
    <textarea bind:value={event.name}></textarea>
  {/each}
</div>

