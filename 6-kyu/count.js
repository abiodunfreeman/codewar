// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
const count = string =>
{
  const arr = string.split("");
  const letters = new Set(arr);
  const obj = {};
  letters.forEach(ele => {
    const count = arr.filter( val => val === ele).length; 
    obj[ele] = count;
  })
  return obj;
}
console.log(count("aba"));
/*The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/