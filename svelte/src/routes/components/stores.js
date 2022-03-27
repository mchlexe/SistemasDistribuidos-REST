
import { writable } from 'svelte/store';

export const token = writable(0);    
export const logged = writable(false);
export const username = writable('username');
export const input = writable(0);