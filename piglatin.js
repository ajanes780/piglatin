// recieve user input

// check to see what kind of data we have

//move first letter of word to front - loop or splice might be easier

// add ay to end . probally use join for this

const userInput = process.argv.slice(2);

const pigLatinTranslator = function (data) {
  let start = [];
  start.push(data[0]);
  start = start.toString();
  let arrayLetters = [];
  for (let i = 0; i < start.length; i++) {
    arrayLetters.push(start[i]);
  }
  // get the first letter
  let firstLetterArray = [];
  firstLetterArray.push(arrayLetters[0]);
  // remove the first letter

  arrayLetters = arrayLetters.slice(1);
  arrayLetters.push(firstLetterArray[0]);
  arrayLetters = arrayLetters.toString();
  arrayLetters = arrayLetters.replace(/,/g, "");
  arrayLetters = arrayLetters + "ay";
  console.log(arrayLetters);
};

pigLatinTranslator(userInput);
