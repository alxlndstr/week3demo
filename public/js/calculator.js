export function evaluate(str){
    if (!/^\d+[\+\-\/\*]\d+$/.test(str) /*checkSomething.length !== 2 */) {
      return 'please provide a mathematical expression with only one operator';
    }
    const operator = str.match(/(\+|\-|\/|\*)/g);
    const checkSomething = str.split(/(\+|\-|\/|\*)/g);
    
    const numbers = str.split(operator[0]);
    let total;
    const num1 = parseInt(numbers[0]);
    const num2 = parseInt(numbers[1]);

    switch(operator[0]) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '/':
            total = num1 / num2
            break;
        case '*':
            total = num1 * num2;
            break;
        default:
          return 'invalid input!';
    }
    return total.toString();
};
