<script>
	import { DateTime } from "luxon";
	import TimeInput from "../lib/TimeInput.svelte"
	import DurationInput from "../lib/DurationInput.svelte"
	export let event = {};
	export let zoomScale = 0.1;

	let computedStartTime;
  let startTry1;
  let startTry2;
  $: startTry1 = DateTime.fromFormat(event.startTime, "ha")
  $: startTry2 = DateTime.fromFormat(event.startTime, "h:mma")
  $: if (startTry1.isValid) {
    computedStartTime = startTry1.toLocaleString(DateTime.DATETIME_FULL) 
  }  else if (startTry2.isValid) {
    computedStartTime = startTry2.toLocaleString(DateTime.DATETIME_FULL) 
  }

	let computedEndTime;
  let endTry1;
  let endTry2;
  $: endTry1 = DateTime.fromFormat(event.endTime, "ha")
  $: endTry2 = DateTime.fromFormat(event.endTime, "h:mma")
  $: if (endTry1.isValid) {
    computedEndTime = endTry1.toLocaleString(DateTime.DATETIME_FULL) 
  }  else if (endTry2.isValid) {
    computedEndTime = endTry2.toLocaleString(DateTime.DATETIME_FULL) 
  }

</script>

<div class="p-2" style="height:{zoomScale * event.duration}em">
	<div class="mx-auto h-full w-full sm:w-1/2 md:w-1/3 bg-slate-200 p-2 rounded-md border border-slate-400 {event.type}">
		<div class="flex">
			<span class="grow text-lg font-medium">
				<input type="text" class="w-full" bind:value={event.name}/>
			</span>
			<span>
				<TimeInput bind:time={event.startTime}></TimeInput>–<TimeInput bind:time={event.endTime}></TimeInput>
			</span>
		</div>
		<div>
			Duration: <DurationInput bind:duration={event.duration}/>
		</div>
		<div>
			{computedStartTime}<br>{computedEndTime}
		</div>
	</div>
</div>