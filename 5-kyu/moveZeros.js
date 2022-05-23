// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
const moveZeros = arr => 
{
const zeroArr = arr.filter(value => value === 0);
const nonZeroArr = arr.filter(value => value !== 0)
return nonZeroArr.concat(zeroArr);
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
/* 
Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/ 