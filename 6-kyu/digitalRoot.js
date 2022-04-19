const digitalRoot = (number) => {
  while (number > 9) {
    number = number.toString().split("").map(n => parseInt(n)).reduce((total, curr) => total + curr , 0)
  }
  return number;
}
console.log(digitalRoot(12345)) // 12345  => 6

/* 
  Given n, take the sum of the digits of n.
  If that value has more than one digit,
  continue reducing in this way until a single-digit number is produced. 
  The input will be a non-negative integer.
*/