'use strict';
var confirmQuiz = confirm('Hello, would you like to play a game?');

if(confirmQuiz === true){
  console.log('Good... Welcome to the Monkey House.. What would you like to be called?');
  var name = prompt('Good... Welcome to the Monkey House.. What would you like to be called?');
} else {
  console.log('Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?');
  var name = prompt('Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Caleb have a dog?').toUpperCase();
//Kevin did some research online and found that by adding .toUpperCase to the variable, we could avoid typing it a ton of times during the coding process

console.log(quizResponseOne);

if(quizResponseOne === 'N' || quizResponseOne === 'NO' ){
  console.log('You\'re correct!');
  document.write('<h4>Please answer with Y or N. Does Caleb have a dog?</h4>');
  document.write('<h5>You said: ' + quizResponseOne + '. <strong>You\'re correct, ' + name + '!</strong></h5>');
} else if(quizResponseOne === 'Y' || quizResponseOne === 'YES'){
  console.log('You\'re incorrect, try again');
  document.write('<h4>Please answer with Y or N. Does Caleb have a dog?</h4>');
  document.write('<h5>You said: ' + quizResponseOne + '. <strong>You\'re incorrect, ' + name + '! </strong><em>The clown steps out of the shadows to your right, a chainsaw in hand.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseTwo = prompt('You know the drill. Does Caleb have any tattoos?').toUpperCase();

if(quizResponseTwo === 'Y' || quizResponseTwo === 'YES'){
  console.log('You\'re correct!');
  document.write('<h4>You know the drill. Does Caleb have tattoos?</h4>');
  document.write('<h5>You said: ' + quizResponseTwo + '. <strong>You\'re INcorrect, ' + name + '!</strong></h5>');
} else if(quizResponseTwo === 'N' || quizResponseTwo === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h4>You know the drill. Does Caleb have tattoos?</h4>');
  document.write('<h5>You said: ' + quizResponseTwo + '. <strong>Incorrect again, ' + name + '! </strong><em> The clown starts the chainsaw, giggling quietly to himself.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseThree = prompt('Does Caleb have a cat? Y or N.').toUpperCase();

if(quizResponseThree === 'Y' || quizResponseThree === 'YES'){
  console.log('You\'re correct!');
  document.write('<h4>Does Caleb have a cat? Y or N.</h4>');
  document.write('<h5>You said: ' + quizResponseThree + '. <strong>You\'re correct, ' + name + '!</strong></h5>');
} else if(quizResponseThree === 'N' || quizResponseThree === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h4>Does Caleb have cat? Y or N.</h4>');
  document.write('<h5>You said: ' + quizResponseThree + '. <strong><em>The speaker laughs.</em> &quot;' + 'Wrong again, ' + name + '!' + '&quot; he says gleefully. ' + '</strong><em>You feel strong hands snatch you from behind and pin you to a wooden table behind you. You can\'t break the cuffs they shackle around your ankles.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseFour = prompt('Is Caleb\'s PC better than yours?').toUpperCase();

if(quizResponseFour === 'Y' || quizResponseFour === 'YES'){
  console.log('You\'re correct!');
  document.write('<h4>Is Caleb\'s PC better than yours?</h4>');
  document.write('<h5>You said: ' + quizResponseFour + '. <strong>You\'re correct, ' + name + '!</strong></h5>');
} else if(quizResponseFour === 'N' || quizResponseFour === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h4>Is Caleb\'s PC better than yours?</h4>');
  document.write('<h5>You said: ' + quizResponseFour + '. <strong>&quot;Wrong again...&quot; <em>Another of your hands is locked to the table. The other clown pull-starts his saw</em></strong></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseFive = prompt('Would Caleb ever use an iPhone?').toUpperCase();

if(quizResponseFive === 'N' || quizResponseFive === 'No'){
  console.log('You\'re correct!');
  document.write('<h4>Would Caleb ever use an iPhone?</h4>');
  document.write('<h5>You said: ' + quizResponseFive + '. <strong>You\'re correct, ' + name + '!</strong></h5>');
} else if(quizResponseFive === 'Y' || quizResponseFive === 'YES'){
  console.log('You\'re incorrect, try again');
  document.write('<h4>Would Caleb ever use an iPhone?</h4>');
  document.write('<h5>You said: ' + quizResponseFive + '. <strong>Not once not <em>never</em>, ' + name + '!</strong></h5>');
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
