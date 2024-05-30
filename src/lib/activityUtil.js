import { activities } from '../store';
import { convertToShortDate } from './util';

export const addActivity = (activity) => {
	activities.update((items) => {
		const activityData = {
			activity: activity,
			date: convertToShortDate(new Date()),
			id: items.length,
			note: ''
		};
		items.unshift(activityData);
		return items;
	});
};

export const deleteActivity = (id) => {
	activities.update((activities) => {
		const activityIndex = activities.findIndex((activity) => activity.id === id);
		activities.splice(activityIndex, 1);
		return activities;
	});
};

export const saveActivity = (id, note) => {
	activities.update((activities) => {
		const activityIndex = activities.findIndex((activity) => activity.id === id);
		activities[activityIndex].note = note;
		return activities;
	});
};
