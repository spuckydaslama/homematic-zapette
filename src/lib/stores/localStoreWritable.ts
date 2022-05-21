import type { Writable } from 'svelte/store';
import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const localStoreWritable: <T>(key: string, defaultInitialValue: T) => Writable<T> = (
	key,
	defaultInitialValue
) => {
	const localStorageItem: string | null = browser ? localStorage.getItem(key) : null;
	const initialValue = (localStorageItem && JSON.parse(localStorageItem)) || defaultInitialValue;
	const store = writable(initialValue);
	store.subscribe((value) => {
		if (browser) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	});
	return store;
};
