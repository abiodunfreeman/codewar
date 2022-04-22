// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
const wave = str => {
  let count = 0
return str.split("").map((val, pos) => {
  const arr = str.split("")
  if (arr[count] != " "){
    arr[count] = arr[count].toUpperCase();
    count++;
    return arr.join("")
  } else {
    count++;
    console.log('skldfjl')
  }
  
  
}).filter(string => string !== undefined)

}
console.log(wave("odun free"))

/*
The wave (known as the Mexican wave in the English-speaking world outside North America) is 
an example of metachronal rhythm achieved in a packed stadium when successive groups of 
spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full 
height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though 
individual spectators never move away from their seats. In many large arenas the crowd 
is seated in a contiguous circuit all the way around the sport field, and so the wave 
is able to travel continuously around the arena; in discontiguous seating arrangements, 
the wave can instead reflect back and forth through the crowd. When the gap in seating 
is narrow, the wave can sometimes pass through it. Usually only one wave crest will be 
present at any given time in an arena, although simultaneous, counter-rotating waves 
have been produced. (Source Wikipedia)
*/