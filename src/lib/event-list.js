import { DateTime } from 'luxon';
const timeFormat = 'h:mm a';
import Event from './event.js';

export default class EventList {
	constructor(eventsInput) {
		let events = [];
		eventsInput.forEach((eventInput) => {
			if (events.length > 0) {
				const { name, startTime, duration } = eventInput;
				const lastEvent = events.slice(-1)[0];

				events.push(
					new Event({
						name,
						startTime: lastEvent.endTimeFormatted,
						duration
					})
				);
			} else {
				const { name, startTime, duration } = eventInput;
				events.push(
					new Event({
						name,
						startTime,
						duration
					})
				);
			}
			this.events = events;
		});
	}
	get totalDuration() {
		return this.events[0].duration + this.events[1].duration;
	}
}
