import { writable } from 'svelte-local-storage-store';

// console.log('lol');
import defaultSchedule from './schedule.json';

// // const defaultSchedule = {};
// // First param `preferences` is the local storage key.
// // Second param is the initial value.
export const schedule = writable('schedule', defaultSchedule);
// // export const preferences = writable('preferences', {
// // 	theme: 'dark',
// // 	pane: '50%'
// // });
// // console.log(localStorage);

// export const scheduleComputed =
