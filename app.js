'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz === true){
  console.log('Good... Welcome to the Monkey House.');
} else {
  console.log('Ohohoho, its much too late to be shy.. Come into the Monkey House.');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Caleb have a dog?');

console.log(quizResponseOne);

if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES' ){
  console.log('You\'re correct!');
  document.write('Please answer with Y or N. Does Caleb have a dog?');
  document.write('You\'re correct!');
} else if(quizResponseOne.toUpperCase() === 'N' || quizResponseOne.toUpperCase() === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write(quizResponseOne);
  document.write('You\'re incorrect, try again');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseTwo = prompt('You know the drill. How many tattoos does Caleb have? 1-2 or 5+?');

if(quizResponseTwo.toUpperCase() === '1-2'){
  console.log('You\'re correct!');
  document.write('You know the drill. How many tattoos does Caleb have? 1-2 or 5+?');
  document.write('You\'re correct!');
} else if(quizResponseTwo.toUpperCase() === '5+'){
  console.log('You\'re incorrect, try again');
  document.write(quizResponseTwo);
  document.write('You\'re incorrect, try again');
} else{
  alert('That\'s not an answer, reload and try again.');
}

  /*var elseResponse = prompt('Do you speak English? I said to answer with Y or N.');
  console.log(elseResponse);
}*/

/*
switch(quizResponseOne.toUpperCase() === 'Y' || 'YES'){
case 'Y' || 'YES':
  console.log('You\'re correct!');
  break;
case 'N' || 'NO':
  console.log('You\'re incorrect, try again.');
}*/

/*if(quizResponseOne.toUpperCase() != 'Y' ||
   quizResponseOne.toUpperCase() != 'YES' ||
   quizResponseOne.toUpperCase() != 'N' ||
   quizResponseOne.toUpperCase() != 'NO'){
  prompt('Do you speak English? I said to answer with Y or N.');
}*/

/*if(quizResponseOne.toUpperCase() === 'Y' ||
  quizResponseOne.toUpperCase() === 'YES'){
  console.log('Ah, so you can give a proper answer. Correct.');
} else if(quizResponseOne.toUpperCase() === 'N' ||
  quizResponseOne.toUpperCase() === 'NO'){
  console.log('Ah, so you can give a proper answer. Incorrect as it was.');
} else {
  alert('Try again later, smart alec.');
}*/
