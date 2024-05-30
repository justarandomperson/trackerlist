import { activities, courses, books, hobbies } from '../store';

export const stores = {
	activities: { name: 'Activity', store: activities },
	courses: { name: 'Course', store: courses },
	books: { name: 'Book', store: books },
	hobbies: { name: 'Hobby', store: hobbies }
};

export const selects = {
	hobbies: ['Doing', 'Paused', 'Planning', 'Dropped'],
	courses: ['Watching', 'Completed', 'Paused', 'Planning', 'Dropped'],
	books: ['Reading', 'Completed', 'Paused', 'Planning', 'Dropped']
};

export const convertToShortDate = (date) => {
	return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
};
