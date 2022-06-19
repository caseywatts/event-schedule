import { expect, test } from '@playwright/test';
import EventList from '../src/lib/event-list.js';

test('two events, subsequent only have durations', async ({ page }) => {
	const eventList = new EventList([
		{
			name: 'Event A',
			startTime: '1:30pm',
			duration: 55
		},
		{
			name: 'Event B',
			duration: 25
		},
		{
			name: 'Event C',
			duration: 25
		}
	]);

	expect(eventList.totalDuration).toBe(80);
	expect(eventList.events[1].startTimeFormatted).toBe('2:25 PM');
	expect(eventList.events[2].startTimeFormatted).toBe('2:50 PM');
});
