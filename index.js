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
  return tutorials.map(source => {
    let individualWords = source.split(' ');
    //console.log('this is console.log of individualWord', individualWord)
    let capitalizedWord = individualWords.map(individualWord =>   individualWord.charAt(0).toUpperCase()+individualWord.slice(1));
    //console.log('my console.log: ', capitalizedWord)
    let titleCasedArray = capitalizedWord.join(' ');
    return titleCasedArray
    
  }
  )
}

titleCased(tutorials)