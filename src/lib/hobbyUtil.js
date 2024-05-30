import { hobbies } from '../store';
import { convertToShortDate } from './util';
import { addActivity } from './activityUtil';

export const tick = (name, checked) => {
	addActivity(`${checked ? '' : 'Un'}Ticked hobby ${name}`);
	hobbies.update((value) => {
		const hobby = value.find((hobby) => hobby.name === name);
		if (checked) {
			hobby.previousCheck = hobby.lastCheck;
			hobby.lastCheck = convertToShortDate(new Date());
			hobby.map[hobby.map.length - 1] = 1;
			hobby.progress = hobby.progress + 1;
		} else {
			hobby.lastCheck = hobby.previousCheck;
			hobby.map[hobby.map.length - 1] = 0;
			if (hobby.progress > 0) hobby.progress = hobby.progress - 1;
		}

		return value;
	});
};

export const tickBox = (name, i) => {
	//TODO: save it to the store only on clicking save. maybe.
	hobbies.update((value) => {
		const hobby = value.find((hobby) => hobby.name === name);
		if (hobby.map[i] === 0) {
			hobby.map[i] = 1;
			hobby.progress = hobby.progress + 1;
		} else {
			hobby.map[i] = 0;
			hobby.progress = hobby.progress + -1;
		}
		if (i == hobby.map.length - 1) {
			if (hobby.map[i] == 0) {
				hobby.lastCheck = hobby.previousCheck || null;
				hobby.previousCheck = null;
			} else {
				hobby.previousCheck = hobby.lastCheck;
				hobby.lastCheck = convertToShortDate(new Date());
			}
		}

		return value;
	});
};
