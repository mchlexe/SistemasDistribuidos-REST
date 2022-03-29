
import { writable } from 'svelte/store';

export const logged = writable(false);
export const username = writable('username');
export const titulo = writable('Título');
export const autor = writable('Autor');
export const capa = writable('img');
export const sinopse = writable('Sinopse');
export const bookId = writable('id');
export const books = writable([]);