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

document.querySelector('#fizzbuzz').onclick = () => currentFunction = fizzbuzz;
document.querySelector('#roman').onclick = () => currentFunction = roman;
document.querySelector('#calculator').onclick = () => currentFunction = evaluate;