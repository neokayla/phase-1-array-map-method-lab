const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((tutorial) => { //iterating through each array
  let words = tutorial.split(' ');//spliting each sentence into singular words
  let titleCaseWords = words.map((word) => {//defining capitalized words
    return word.charAt(0).toUpperCase() + word.slice(1) ;//capitalizing the first letter while reconnecting the word by slicing out the lowercase
  });

  // Join the words back into a string
  let titleCaseTutorial = titleCaseWords.join(' ');

  return titleCaseTutorial;
}
)
}