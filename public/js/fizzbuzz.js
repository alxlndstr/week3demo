export function fizzbuzz(number) {
  const num = parseInt(number);
  if(isNaN(num) || /\D/.test(number)) {
    return 'Please provide a number'
  }

  if(num < 1) {
      return 'please provide a positive number';
  }
  if (num > 100) {
      return 'number is too high! please type a number below 101';
  }
  
  return num % 15 === 0 ? 'fizzbuzz'
  : num % 3 === 0 ? 'fizz'
  : num % 5 === 0 ? 'buzz'
  : num;
};