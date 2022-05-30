// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
const duplicateEncode = word => 
{
    word = word.toLowerCase();
    const arr = word.split("").map(letter => {
        const letterArr = word.split("").filter(value => value === letter);
        if (letterArr.length > 1) return ")"
        return "(";
    })
    return arr.join("");
}
console.log(duplicateEncode("Success"))
/* 
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string,
 or ")" if that character appears more than once in the original string.
  Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/