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

const titleCased = tutorials.map(() => {
  tutorials.split(' ');
  for (let i = 0; i < tutorials.length; i++) {
    const firstLetter = tutorials[i].charAt(0).toUpperCase();
    const capitalizedWord = firstLetter + tutorials[i].slice(1);
    words[i] = capitalizedWord;
}
const capitalizedSentence = words.join(' ');
console.log(capitalizedSentence)
return tutorials
}
)
