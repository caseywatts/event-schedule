<script>
  import schedule from "../schedule.json"
  // import { schedule } from "../stores.js"
  const scheduleJSONString = JSON.stringify(schedule);
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
</script>

<!-- {scheduleJSONString} -->
<div class="w-full m-8">

  <h2>Schedule</h2>

  <div class="absolute w-full -z-10">
    {#each hours as hour}
      <div class="border-slate-600 border-t w-11/12" style="height:{zoomScale * 60}em">{hour}</div>
    {/each}
  </div>
  <div class="">
    {#each schedule.events as event}
      <div class="p-2" style="height:{zoomScale * event.duration}em">
        <div class="mx-auto h-full w-full sm:w-1/2 md:w-1/3 bg-slate-200 p-2 rounded-md border border-slate-400 {event.type}">
          <div class="flex">
            <span class="grow text-lg font-medium"><input type="text" class="w-full" value={event.name}/></span>
            <span>{event.startTime}–{event.endTime}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>