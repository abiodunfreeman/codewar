// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
function cleanString(s) {
  //filters through the string and if the letter === "#" delete the character one position before it and get rid of the hash
  const stringArray = s.split('');
  const stringLength = stringArray.length;

  console.log(stringArray.includes('#'));

  console.log(stringArray);
  return s;
}
console.log(cleanString('abc#d##c'));
/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/
