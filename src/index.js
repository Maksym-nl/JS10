import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';



const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('country-list');
const countryInfoEl = document.querySelector('country-info');

const DEBOUNCE_DELAY = 300;

const r = fetch('https://restcountries.com/#endpoints-name/2')
.then(Response =>{
  return Response.json();
})
.then(flag => {
  console.log(glag);
});
.catch(error => {
  console.log(error);
})
