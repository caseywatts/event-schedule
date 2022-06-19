import { DateTime } from 'luxon';
const timeFormat = 'h:mm a';

function parseTime(dt) {
	let startTry1 = DateTime.fromFormat(dt, 'ha');
	let startTry2 = DateTime.fromFormat(dt, 'h:mma');
	if (startTry1.isValid) {
		return startTry1;
	} else if (startTry2.isValid) {
		return startTry2;
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
