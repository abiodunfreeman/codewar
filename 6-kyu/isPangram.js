// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

const  isPangram = s => {
  const lookingFor = "abcdefghijklmnopqrstuvwxyz".split(""); // alphabet in an array
  return lookingFor.every(letter => s.toLowerCase().includes(letter)) // returns true if every letter in 'lookingFor' is found in 's'
 
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
/* 
A pangram is a sentence that contains every single 
letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over 
the lazy dog" is a pangram, because 
it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. 
Ignore numbers and punctuation.

*/