import { writable } from 'svelte/store';

export const hobbies = writable([]);
export const courses = writable([]);
export const books = writable([]);
export const activities = writable([]);

//prettier-ignore
const stores = { "hobbies": hobbies, "courses": courses, "activities": activities, "books": books};

const isBrowser = typeof window !== 'undefined';

const loadData = (store, group) => {
	let data = localStorage.getItem(group);
	if (!data) {
		data = JSON.stringify([]);
	}
	store.set(JSON.parse(data));
};

const saveData = (store, group) => {
	store.subscribe((value) => {
		localStorage.setItem(group, JSON.stringify(value));
	});
};

if (isBrowser) {
	for (const [group, store] of Object.entries(stores)) {
		loadData(store, group);
		saveData(store, group);
	}
}
