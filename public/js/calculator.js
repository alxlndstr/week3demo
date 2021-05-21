function evaluate(a, o, b) {
  const _a = +a;
  const _b = +b;

  // console.log(`in eval: ${_a} ${o} ${_b}`);
  switch (o) {
    case '+':
      return _a + _b;
    case '-':
      return _a - _b;
    case '*':
      return _a * _b;
    case '/':
      return _a / _b;
    case '^':
      return _a ** _b;
    default:
      // console.log(`InvOP(${o}), returning ${a}`);
      return _a;
  }
}

function extractInner(string) {
  let level = 0;
  let start = 0, end = 0;
  const str = string.split('');
  str.forEach((char, i) => {
    if (level === 0 && char === '(') {
      start = i;
      level++;
    } else if (char === '(') {
      level++;
    }
    if (char === ')' && level === 1) {
      end = i;
      level--;
    } else if (char === ')') {
      level--;
    }
  });
  if (level!==0) {
    throw new Error('Uneven number of parentheses')
  }
  // console.log('\n' + str.join(''));
  // console.log(' '.repeat(start) + '(' + ' '.repeat(end-start-1) + ')');
  return { start, end };
}

export function calculate(str) {
  let cleanstr = str.replace(/[^\+\*\^\/\d\.\-\(\)]/,'');
  // resolve parentheses
  while (/[\(\)]/g.test(cleanstr)) {
    const clause = extractInner(cleanstr);

    const before = cleanstr.substring(0,clause.start);
    const inner = cleanstr.substring(clause.start+1,clause.end);
    const innerResult = calculate(inner);
    const after = cleanstr.substring(clause.end+1);

    cleanstr = before + innerResult + after;
  }
  let number = cleanstr.match(/((^-?)|[\+\-\^\*\/]-\d+?)?\d+(\.\d+)?/g);
  number = number.map(n => n
    .replace(/[\+\-\^\*\/]-/g, '-')
    .replace(/[\^\+\*\/]/, ''));

  let operators = cleanstr.match(/\d+[\+\-\^\*\/]/g);

  if (Array.isArray(operators)) operators = operators.map(o => o.replace(/\d+/g, ''));
  
  let total = number[0];

  for (let i = 0; i < number.length - 1; i++) {
    total = evaluate(total, operators[i], number[i+1]);
  }
  //console.log('= ' + total);
  return total;
}
