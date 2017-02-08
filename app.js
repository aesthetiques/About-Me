'use strict';

var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz = true){
  console.log('Good... Welcome to the Monkey House.');
} else {
  console.log('Ohohoho, it\'s much to late to be shy.. Come in to the Monkey House.');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Adam have a dog?');
//This is strange
console.log(quizResponseOne);
if(quizResponseOne.toUpperCase() === 'Y' ){
  console.log('You\'re correct!');
} else{
  console.log('You\'re incorrect.');
}
