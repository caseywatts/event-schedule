import { expect, test } from '@playwright/test';
import Event from '../src/lib/event.js';

test('start time and end time with minutes', async ({ page }) => {
	const event = new Event({
		startTime: '1:30pm',
		endTime: '2:45pm'
	});

	expect(event.startTimeFormatted).toBe('1:30 PM');
	expect(event.endTimeFormatted).toBe('2:45 PM');
	expect(event.duration).toBe(75);
});

test('start time and end time without minutes', async ({ page }) => {
	const event = new Event({
		startTime: '1pm',
		endTime: '3pm'
	});

	expect(event.startTimeFormatted).toBe('1:00 PM');
	expect(event.endTimeFormatted).toBe('3:00 PM');
	expect(event.duration).toBe(120);
});

test('start time and duration', async ({ page }) => {
	const event = new Event({
		startTime: '1pm',
		duration: 65
	});

	expect(event.startTimeFormatted).toBe('1:00 PM');
	expect(event.endTimeFormatted).toBe('2:05 PM');
	expect(event.duration).toBe(65);
});
