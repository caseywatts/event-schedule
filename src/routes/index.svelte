<script>
  import defaultSchedule from "../schedule.json"
  import { schedule } from "../stores.js"
  import EventsList from "../lib/EventsList.svelte"
  import { DateTime } from "luxon";
  let lol = "12pm"
  $: lol2 = DateTime.fromFormat(lol, "ha").toLocaleString(DateTime.DATETIME_FULL);
  const hours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
  ]
  const zoomScale = 0.2;
  const resetSchedule = () => {
    $schedule = defaultSchedule;
  }
</script>

<!-- {scheduleJSONString} -->
<div class="w-full m-8">

  <h2>Schedule</h2>
  <button class="button" on:click={resetSchedule}>reset to template schedule</button>
  <div>
    <input type="text" bind:value={lol}/>
    <input type="text" value={lol2}/>
  </div>

  <div class="absolute w-full -z-10">
    {#each hours as hour}
      <div class="border-slate-600 border-t w-11/12" style="height:{zoomScale * 60}em">{hour}</div>
    {/each}
  </div>
  <div class="">
    <EventsList bind:events={$schedule.events} {zoomScale}></EventsList>
  </div>
</div>