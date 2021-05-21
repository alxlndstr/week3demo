const Numerals = [
  ['1000', 'M'],
  ['900', 'CM'],
  ['500', 'D'],
  ['400', 'CD'],
  ['100', 'C'],
  ['90', 'XC'],
  ['50', 'L'],
  ['40', 'XL'],
  ['10', 'X'],
  ['9', 'IX'],
  ['5', 'V'],
  ['4', 'IV'],
  ['1', 'I'],
];

export function roman(number) {
  let num = number;
  if (num < 1 || num > 3000 || /\D/.test(num)) {
    return 'Only accepts numbers between 1-3000';
  }

  let str = '';
  while (num > 0) {
    for (let i = 0; i < Numerals.length; i++) {
      if (num >= +Numerals[i][0]) {
        num -= +Numerals[i][0];
        str += Numerals[i][1];
        break;
      }
    }
  }
  return str;
};
