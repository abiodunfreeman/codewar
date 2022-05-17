// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
const breakCamelCase = string =>
{
    const word = string.split("").map(letter => 
        {
            const upperCaseLetter = letter.toUpperCase();
            if (letter === upperCaseLetter) return " " + letter;
            else return letter;
        }).join("");

    return word;
}
console.log(breakCamelCase(""))
/*
Complete the solution so that the function will break up camel casing, 
using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/