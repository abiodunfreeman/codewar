// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
const solution: boolean = (str: string, ending: string) => {
  let find = ending.split('');
  const strArr = str.split('');
  const diff: number = strArr.length - find.length;

  strArr.splice(0, diff);
  console.log(strArr);

  for (let i: number = 0; i < find.length; i++) {
    if (find[i] !== strArr[i]) return false;
  }
  return true;
};
console.log(solution('abc', 'bc')); // => true
/* 
    Complete the solution so that it returns true
     if the first argument(string) passed in ends with the 2nd argument (also a string).
    
    Examples:
    
    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
    */
