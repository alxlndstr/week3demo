import { evaluate } from './calculator.js';
import { fizzbuzz } from './fizzbuzz.js';
import { roman } from './romans.js';

let currentFunction;

function printKata(element, id) {
  const result = document.querySelector('#result');
  const textInput = document.querySelector('#textInput');

  textInput.addEventListener('keyup', e => {
    result.innerHTML = currentFunction(textInput.value);
  });
}

const main = document.querySelector('#app');
currentFunction = fizzbuzz;
printKata(fizzbuzz);

const fizzbuzzElement = document.querySelector('#fizzbuzz');
const romanElement = document.querySelector('#roman');
const calculatorElement = document.querySelector('#calculator');
const clicked = 'color: var(--lighter-grey);  text-shadow: 5px 5px var(--cool-grey)';
const nonClicked = 'color: var(--liberty); text-shadow: none';

fizzbuzzElement.onclick = () => {
  fizzbuzzElement.style = clicked;
  romanElement.style = nonClicked;
  calculatorElement.style = nonClicked;
  currentFunction = fizzbuzz;
}

romanElement.onclick = () => {
  fizzbuzzElement.style = nonClicked;
  romanElement.style = clicked;
  calculatorElement.style = nonClicked;
  currentFunction = roman;
}
calculatorElement.onclick = () => {
  fizzbuzzElement.style = nonClicked;
  romanElement.style = nonClicked;
  calculatorElement.style = clicked;
  currentFunction = evaluate;
}