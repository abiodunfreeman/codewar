// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
const incrementString = strng => {
  const strArr = strng.split('');

  const letters = strArr
    .filter(value => Object.is(parseInt(value), NaN))
    .join('');

  let numbers = strArr
    .filter(value => !Object.is(parseInt(value), NaN))
    .map(v => parseInt(v))
    .join('');

  const oldLength = String(numbers).split('').length;

  numbers = parseInt(numbers) + 1;
  if (Object.is(numbers, NaN)) numbers = 1;

  const newLength = String(numbers).split('').length;

  if (newLength < oldLength) numbers = String(numbers).padStart(oldLength, '0');

  const res = letters + numbers;
  return res;
};
console.log(incrementString('foo094'));
/*
  Your job is to write a function which increments a string, to create a new string.
  
  If the string already ends with a number, the number should be incremented by 1.
  If the string does not end with a number. the number 1 should be appended to the new string.
  Examples:
  
  foo -> foo1
  
  foobar23 -> foobar24
  
  foo0042 -> foo0043
  
  foo9 -> foo10
  
  foo099 -> foo100
  
  Attention: If the number has leading zeros the amount of digits should be considered.
  
  
  */
