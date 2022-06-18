<script>
	import TimeInput from "../lib/TimeInput.svelte"
	import DurationInput from "../lib/DurationInput.svelte"
	export let event = {};
	export let zoomScale = 0.1;
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
	</div>
</div>