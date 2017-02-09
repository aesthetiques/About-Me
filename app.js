'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz === true){
  console.log('Good... Welcome to the Monkey House.');
} else {
  console.log('Ohohoho, its much too late to be shy.. Come into the Monkey House.');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Caleb have a dog?').toUpperCase();

console.log(quizResponseOne);

if(quizResponseOne === 'Y' || quizResponseOne === 'YES' ){
  console.log('You\'re correct!');
  document.write('<h2>Please answer with Y or N. Does Caleb have a dog?</h2>');
  document.write('<h4> You said:</h4> ' + quizResponseOne + '<h4> You\'re correct!</h4>');
} else if(quizResponseOne === 'N' || quizResponseOne === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h2>Please answer with Y or N. Does Caleb have a dog?</h2>');
  document.write('<h4> You said:</h4> ' + quizResponseTwo + '<h4> You\'re INcorrect!</h4>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseTwo = prompt('You know the drill. Does Caleb have any tattoos?').toUpperCase();

if(quizResponseTwo === 'Y' || quizResponseTwo === 'YES'){
  console.log('You\'re correct!');
  document.write('<h2>You know the drill. Does Caleb have tattoos?</h2>');
  document.write('<h4>You\'re correct!</h4>');
} else if(quizResponseTwo === 'N' || quizResponseTwo === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h2>You know the drill. Does Caleb have tattoos?</h2>');
  document.write('<h4> You said:</h4> ' + quizResponseTwo + '<h4> You\'re INcorrect!</h4>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseThree = prompt('Does Caleb have cats? Y or N.').toUpperCase();

if(quizResponseThree === 'Y' || quizResponseThree === 'YES'){
  console.log('You\'re correct!');
  document.write('<h2>Does Caleb have cats? Y or N.</h2>');
  document.write('<h4>You\'re correct!</h4>');
} else if(quizResponseThree === 'N' || quizResponseThree === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h2>Does Caleb have cats? Y or N.</h2>');
  document.write('<h4> You said:</h4> ' + quizResponseThree + '<h4> You\'re INcorrect!</h4>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseFour = prompt('Question 4').toUpperCase();

if(quizResponseFour === 'Y' || quizResponseFour === 'YES'){
  console.log('You\'re correct!');
  document.write('<h2>You know the drill. Does Caleb have tattoos?</h2>');
  document.write('<h4>You\'re correct!</h4>');
} else if(quizResponseFour === 'N' || quizResponseFour === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h2>You know the drill. Does Caleb have tattoos?</h2>');
  document.write('<h4> You said:</h4> ' + quizResponseFour + '<h4> You\'re INcorrect!</h4>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseTwo = prompt('Question 5').toUpperCase();

if(quizResponseTwo === 'Y' || quizResponseTwo === 'YES'){
  console.log('You\'re correct!');
  document.write('<h2>You know the drill. Does Caleb have tattoos?</h2>');
  document.write('<h4>You\'re correct!</h4>');
} else if(quizResponseTwo === 'N' || quizResponseTwo === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h2>You know the drill. Does Caleb have tattoos?</h2>');
  document.write('<h4> You said:</h4> ' + quizResponseTwo + '<h4> You\'re INcorrect!</h4>');
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
