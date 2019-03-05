import { loadDetail } from '../src/load-detail-page.js';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const URL = `https://ghibliapi.herokuapp.com/films/${id}`; 

fetch(URL).then(response => response.json()).then(result => loadDetail(result));


console.log('hi', URL);