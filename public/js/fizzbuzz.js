export function fizzbuzz(number) {
  if(number[0] === '-') {
    return 'please provide a number between 1-100';
  }

  const num = parseInt(number);
  if(isNaN(num) || /\D/.test(number)) {
    return 'Please provide a number'
  }

  if(num <= 1 || num > 100) {
      return 'please provide a number between 1-100';
  }
  
  return num % 15 === 0 ? 'fizzbuzz'
  : num % 3 === 0 ? 'fizz'
  : num % 5 === 0 ? 'buzz'
  : num;
};