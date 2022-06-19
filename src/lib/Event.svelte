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
		name: eventInput.name,
		type: eventInput.type
	});

</script>

<div class="p-2" style="height:{zoomScale * event.duration}em">
	<div class="mx-auto h-full w-full sm:w-1/2 md:w-1/3 bg-slate-200 p-2 rounded-md border border-slate-400 {event.type}">
		<div class="flex">
			<span class="grow text-lg font-medium">
				<input type="text" class="w-full" bind:value={eventInput.name}/>
			</span>
			<span>
				<TimeInput bind:time={eventInput.startTime}></TimeInput> for <DurationInput bind:duration={eventInput.duration}/> minutes
			</span>
		</div>
		<div class="lowercase">
			{event.startTimeFormatted} to {event.endTimeFormatted} ({event.duration} min)
		</div>
	</div>
</div>