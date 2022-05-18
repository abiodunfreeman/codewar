// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
const rowSumOddNumbers = n => 
{
let startVal = 1;
let returnVal = 0;
for (let i  = 1; i < n; i++)
                startVal += i * 2;

for (let i = 0; i < n ; i++ )
{
    returnVal += startVal;
    startVal += 2;
}

return returnVal;
};
console.log(rowSumOddNumbers(42)) // 3 => 27


/*
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/