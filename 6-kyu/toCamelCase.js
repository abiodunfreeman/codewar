// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
const toCamelCase = str => 
{
let splitBy;
const under = /_/;
under.test(str) ? splitBy = "_" : splitBy = "-";

const strArr = str.split(splitBy).map((word, pos) => {
   if (pos === 0) return word;
   const wordArr = word.split("");
   wordArr[0] = wordArr[0].toUpperCase();
    return wordArr.join("");
});

return strArr.join("");
}
console.log(toCamelCase("the_stealth_warrior"))

/* 
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/