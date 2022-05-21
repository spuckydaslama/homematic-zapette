import { localStoreWritable } from '$lib/stores/localStoreWritable';

const initialToken = import.meta.env.VITE_AUTH_TOKEN || '';
export const authToken = localStoreWritable('authToken', initialToken);

const initialCcu3Url = import.meta.env.VITE_CCU3_URL || '';
export const ccu3Url = localStoreWritable('ccu3url', initialCcu3Url);
