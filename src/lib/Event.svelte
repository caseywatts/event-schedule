<script>
	import { DateTime, Interval } from "luxon";
	import TimeInput from "../lib/TimeInput.svelte"
	import DurationInput from "../lib/DurationInput.svelte"
	export let eventInput = {};
	export let zoomScale = 0.1;
	const timeFormat = "h:mm a";
	import Event from "./event.js";
	// const timeFormat = "DD h:mm a";

	$: event = new Event({
		startTime: eventInput.startTime,
		duration: eventInput.duration,
		endTime: eventInput.endTime,
		name: eventInput.name,
		type: eventInput.type
	});

	$: computedStartTimeFormatted = event.startTimeFormatted;
	$: computedEndTimeFormatted = event.endTimeFormatted;
	$: computedDuration = event.duration;
</script>

<div class="p-2" style="height:{zoomScale * event.duration}em">
	<div class="mx-auto h-full w-full sm:w-1/2 md:w-1/3 bg-slate-200 p-2 rounded-md border border-slate-400 {event.type}">
		<div class="flex">
			<span class="grow text-lg font-medium">
				<input type="text" class="w-full" bind:value={eventInput.name}/>
			</span>
			<span>
				<TimeInput bind:time={eventInput.startTime}></TimeInput>–<TimeInput bind:time={eventInput.endTime}></TimeInput>
			</span>
		</div>
		<div>
			Duration: <DurationInput bind:duration={eventInput.duration}/>
		</div>
		<div class="lowercase">
			{computedStartTimeFormatted}<br>{computedEndTimeFormatted}
		</div>
		<div>
			{computedDuration} min
		</div>
	</div>
</div>