import { get } from 'svelte/store';
import { addActivity } from './activityUtil';

export const deleteItem = (store, name) => {
	addActivity(`Deleted ${name}`);
	store.update((items) => {
		const itemIndex = items.findIndex((item) => item.name === name);
		items.splice(itemIndex, 1);
		return items;
	});
};

export const saveItem = (store, name, newData) => {
	store.update((items) => {
		const itemIndex = items.findIndex((item) => item.name === name);
		const item = {
			...items[itemIndex],
			name: newData.name,
			score: newData.score || 0,
			notes: newData.notes || '',
			progress: newData.progress || 0,
			startDate: newData.startDate,
			endDate: newData.endDate,
			img: newData.img
		};
		if (newData.hasOwnProperty('length')) item.length = newData.length || 1;
		items[itemIndex] = item;
		return items;
	});
};

export const newItem = (store, data) => {
	addActivity(`Created new ${data.name}`);
	if (!data.hasOwnProperty('length')) {
		data.map = new Array(365).fill(0);
		data.lastCheck = null;
	}
	store.update((items) => {
		items.push({
			...data,
			score: 0,
			notes: '',
			startDate: new Date().toISOString().split('T')[0],
			endDate: null
		});
		return items;
	});
};

export const hasItem = (store, name) => {
	return get(store).find((item) => item.name === name);
};
