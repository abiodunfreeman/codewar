const numbers = [19, 5, 42, 2, 77]
function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((a , b ) => a - b);
  return numbers[0] + numbers [1]
} 
sumTwoSmallestNumbers(numbers);
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript