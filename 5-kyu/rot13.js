// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
const rot13 = message => {
  const alphArr = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, pos) => {
    return { letter, pos: pos + 1 };
  });

  const newWord = message
    .split('')
    .map(letter => {
      // console.log(letter);
      const associatedObject = alphArr.filter(letterObject => {
        if (letterObject.letter === letter.toLowerCase()) {
          return letterObject;
        }
      })[0];
      // console.log(associatedObject);
      if (associatedObject === undefined) return letter;
      let newPos = associatedObject.pos; // inits newPos with old pos value
      // console.log(newPos);
      for (let i = 0; i < 13; i++) {
        if (newPos >= 26) {
          newPos = 1;
        } else {
          newPos++;
        }
      }
      // console.log(newPos);
      const newLetter = alphArr.filter(letterObject => {
        if (letterObject.pos === newPos) {
          letter === letter.toUpperCase()
            ? (letterObject.letter = letterObject.letter.toUpperCase())
            : (letterObject.letter = letterObject.letter.toLowerCase());
          return letterObject.letter;
        }
      })[0].letter;
      // console.log(newLetter);
      return newLetter;
    })
    .join('');

  return newWord;
};
console.log(rot13('DOGWATER IS WHAT YOU DRINK')); // => grfg
/*
  ROT13 is a simple letter substitution cipher that replaces a letter with 
  the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
  
  Create a function that takes a string and returns the string ciphered
  with Rot13. If there are numbers or special characters included in the string,
  they should be returned as they are. Only letters from the latin/english
  alphabet should be shifted, like in the original Rot13 "implementation".
  */
