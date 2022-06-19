import { DateTime, Interval } from 'luxon';
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
	constructor({ startTime, endTime, duration, name, type }) {
		if (startTime) {
			this.inputStartTime = startTime;
		}
		if (endTime || duration) {
			if (endTime) {
				this.inputEndTime = endTime;
			}
			if (duration) {
				this.inputDuration = duration;
			}
		} else {
			throw 'requires either an endTime or a duration';
		}
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
		if (this.inputEndTime) {
			return parseTime(this.inputEndTime);
		} else {
			return this.startTime.plus({ minutes: this.duration });
		}
	}
	set endTime(time) {
		this.inputEndTime = parseTime(time);
	}
	get duration() {
		if (this.inputDuration) {
			return this.inputDuration;
		} else {
			return Interval.fromDateTimes(this.startTime, this.endTime).length('minutes');
		}
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
