import { loadMovieList } from './make-ghibli-template.js';

const URL = 'https://ghibliapi.herokuapp.com/films/';
fetch(URL).then(response => response.json()).then(result => loadMovieList(result));


