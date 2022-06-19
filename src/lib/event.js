import { DateTime } from 'luxon';
const timeFormat = 'h:mm a';

function parseTime(dt) {
	let try1 = DateTime.fromFormat(dt, 'ha');
	let try2 = DateTime.fromFormat(dt, 'h:mma');
	let try3 = DateTime.fromFormat(dt, 'h:mm a');
	if (try1.isValid) {
		return try1;
	} else if (try2.isValid) {
		return try2;
	} else if (try3.isValid) {
		return try3;
	}
}

export default class Event {
	constructor({ startTime, duration, name, type }) {
		this.inputStartTime = startTime;
		this.inputDuration = duration || 30;
		this.inputName = name;
		this.inputType = type;
	}
	get name() {
		return this.inputName;
	}
	set name(name) {
		this.inputName = name;
	}

	get type() {
		return this.inputType;
	}
	set type(type) {
		this.inputType = type;
	}

	get startTime() {
		return parseTime(this.inputStartTime);
	}
	set startTime(time) {
		this.inputStartTime = parseTime(time);
	}
	get endTime() {
		return this.startTime.plus({ minutes: this.duration });
	}
	get duration() {
		return this.inputDuration;
	}
	set duration(duration) {
		this.inputDuration = duration;
	}

	get startTimeFormatted() {
		return this.startTime.toFormat(timeFormat);
	}
	get endTimeFormatted() {
		return this.endTime.toFormat(timeFormat);
	}
}
