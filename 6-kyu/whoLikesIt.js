// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
const likes = names => {
  const l = names.length;
  if (l === 0 ){
    return "no one likes this";
  } else if (l === 1) {
    return `${names[0]} likes this`;
  } else if ( l === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if ( l === 3 ){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (l > 3 ) {
    return `${names[0]}, ${names[1]} and ${l - 2} others like this`
  }
}
console.log(likes(["Odun", "James", "Paul","Paris", "Bruce"]))
/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to create 
the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of 
people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/