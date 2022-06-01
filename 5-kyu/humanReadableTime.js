// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
const humanReadable = seconds => {
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  // Adds a 0 to the time unit if it's only one digit
  if (String(hours).split('').length === 1) hours = `0${hours}`;
  if (String(minutes).split('').length === 1) minutes = `0${minutes}`;
  if (String(seconds).split('').length === 1) seconds = `0${seconds}`;

  return `${hours}:${minutes}:${seconds}`;
};
console.log(humanReadable(45296)); // => '12:34:56'
/* 
  Write a function, which takes a non-negative integer (seconds) 
  as input and returns the time in a human-readable format (HH:MM:SS)
  
  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)
  */
