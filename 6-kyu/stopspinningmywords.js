// https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript
/*
Write a function that takes in a string of one or more words, and returns the same 
string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more 
than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 spinWords ( "This is a test") => returns 
"This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

const spinWords = string => {
  const stringArr = string.split(" ")
  stringArr.forEach((word, pos) => {
   if (word.length >= 5) {
     console.log("word with more than 5");
     stringArr[pos] = word.split("").reverse().join("")
     word.split("")
   } else {
     console.log("less than 5")
   }
  })
  return stringArr.join(" ")
  } // "Hey fellow warriors" => "Hey wollef sroirraw"
  console.log(spinWords("Hey fellow warriors"))