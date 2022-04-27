// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
const findEvenIndex = arr => {
  /*
    loops through the array and slices it in half
    at every indice, compares the sum of the two halves.
    If at n indice the two halves are === to each other,
    returns that indice number, otherwise it returns -1.
  */
  for (let i = 0; i < arr.length; i++)
  {
    const ind = i;
    const l = arr.slice(0,ind);
    const r = arr.slice(ind + 1,arr.length);
    const lSum = l.reduce((total, curr) => total + curr, 0);
    const rSum = r.reduce((total, curr) => total + curr, 0);
    
    if (lSum === rSum){ 
      console.log(`${lSum} : ${rSum}`);
      return ind;
    }
  }
    return -1;
  
  
  

  

} 
console.log(findEvenIndex([20,10,-80,10,10,15,35])) // {1,2,3,4,3,2,1} => 3
/*
You are going to be given an array of integers. 
Your job is to take that array and find an index N 
where the sum of the integers to the left of N is 
equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1.

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position 
of the array, the sum of left side of the index ({1,2,3}) and the 
sum of the right side of the index ({3,2,1}) both equal 6.
*/