// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
const formatDuration = seconds => 
{
    if (seconds === 0) return "now";
    let str = "";
    let years = "";
    let yNum = Math.floor(seconds/ 60 / 60 /24 /365);
    if (yNum > 0) {
        years += `${yNum} ${yNum > 1 ? "years, ": "year, "}`;
        seconds -= yNum * 365 * 24 * 60 * 60
        str += years;
    }

    let days = "";
    let dNum = Math.floor(seconds/ 60 / 60 / 24);
    if (dNum > 0) {
        days += `${dNum} ${dNum > 1 ? "days, ": "day, "}`;
        seconds -= dNum * 24 * 60 * 60;
        str += days;
    }

    let hours = "";
    let hNum = Math.floor(seconds/ 60 / 60);
    if (hNum > 0) {
        
        seconds -= hNum * 60 * 60;
      if (seconds === 0) {
        hours += `${hNum} hour`
      } else {
        hours += `${hNum} ${hNum > 1 ? "hours, ": "hour, "}`;
      }
        str += hours;
    }

    let mins = "";
    let mNum = Math.floor(seconds / 60);
    if (mNum > 0) {
        
        seconds -= mNum * 60;
      if (seconds === 0 ) {
        if (yNum === 0 && dNum === 0 && hNum === 0) return `${mNum} minute${mNum === 1 ? "" : "s"}`
        mins += `and ${mNum} ${mNum === 1 ? "minute" : "minutes"}`
      } else if (seconds === 0 && hNum !== "") {
        
      } else {
        mins += `${mNum} ${mNum > 1 ? "minutes": "minute"}`;
      }
        str += mins;
    }
    let secs = "";
    if (seconds > 0) {
      if (yNum === 0 && dNum === 0 && hNum === 0 && mNum === 0 && seconds === 1) return "1 second"
        secs += seconds === 1 ? ` and ${seconds} second` : ` and ${seconds} seconds`;
        str += secs;
    }
    if (yNum === 0 && dNum !== 0 && hNum !== 0 && mNum === 0 && secs !== ""){
        return `${dNum} day${dNum === 1 ? "" : 's'}, ${hNum} hour${hNum === 1 ? "" : 's'} and ${mNum} minute${mNum === 1 ? "" : 's'}`
      }
    if (yNum != "" && dNum != "" && hNum != "" && mNum != "" && secs == "") {
      return `${yNum} year${ yNum > 1 ? "s" : ""}, ${dNum} day${ dNum > 1 ? "s" : ""}, ${hNum} hour${ hNum > 1 ? "s" : ""} and ${mNum} minute${ mNum > 1 ? "s" : ""}`
    }
    if (secs === "" && yNum === 0){
      if (dNum === 0 && mNum === 0) {
        return `${hNum} hour${hNum === 1 ? "" : "s"}`
      }
        return `${dNum} days, ${hNum} hours and ${mNum} minutes`
      }
  if (yNum === 0 && secs === ""){
    return `${dNum} day${dNum === 1 ? "" : "s"}, ${hNum} hour${hNum === 1 ? "" : "s"} and ${mNum} minute${mNum === 1 ? "" : "s"}`
  }
    return str;
}
console.log(formatDuration(3662))
/* 
Your task in order to complete this Kata is to write a function which formats a 
duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns 
"now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general,
 a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, 
which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, 
but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/