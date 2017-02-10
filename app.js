'use strict';
//jQuery for slide down
$('.slide-out').click(function(){
  $(this).next('*').slideToggle();
});

var pointsTotal = 0;
var confirmQuiz = confirm('Hello, would you like to play a game?');
var quizConfirmed = false;

//Quiz Questions:
var quizQuestionOne = 'Please answer with Y or N. Does Caleb have a dog?';
var quizQuestionTwo = 'You know the drill. Does Caleb have any tattoos?';
var quizQuestionThree = 'Does Caleb have a cat? Y or N.';
var quizQuestionFour = 'Is Caleb\'s PC better than yours?';
var quizQuestionFive = 'Would Caleb ever use an iPhone?';
var quizQuestionSix = 'What\'s Caleb\'s favorite number? Between 1-10.';
var quizQuestionSeven = 'How long does it take to saw through a leg?';

// Checks user input given to ensure there's a valid response.
function answerCheck(userInput){
  if(userInput === 'Y' || userInput === 'YES'){
    return 0;
  }else if(userInput === 'N' || userInput === 'NO'){
    return 1;
  }else{
    // Invalid answer.
    return 2;
  }
}

// function answerValidCheck(userInput){
//   if(userInput !== '' && userInput !== 'null'){
//     return true;
//   }else{
//     return false;
//   }
// }

//Quiz Answers
// var quizQuestion = prompt(
//   ['&quot;Please answer with Y or N. Does Caleb have a dog?<&quot;/h4>'],
//   ['']
do {
  if(confirmQuiz === true){
  // can't figure out how to get the document.print() to float to the right on the page in ccs.
    var name = prompt('Good... Welcome to the Monkey House.. What would you like to be called?');
    console.log('<h3>&quot;Good... Welcome to the Monkey House.. What would you like to be called?&quot;</h3>');
    console.log('<h5>&quot;My name is ' + name + '.&quot; You reply.</h5> ');
    console.log('quizConfirmed = true, breaking loop');
    document.write('<h3>&quot;Good... Welcome to the Monkey House.. What would you like to be called?&quot;</h3>');
    document.write('<h5>&quot;My name is ' + name + '.&quot; You reply.</h5> ');
    quizConfirmed = true;
  } else{
    var name = prompt('Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?');

    // Name checked for English letters only ( no numbers ).
    if(name !== '' && name !== 'null'){
      quizConfirmed = true;
      console.log('Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?');
      console.log('My name is ' + name + '.');
      document.write('<h3>&quot;Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?&quot;</h3>');
      document.write('<h5>My name is </h5>' + name + '<h5>.</h5>');
    }
  }
} while (!quizConfirmed);

// var quizQuestionOne = prompt('Please answer with Y or N. Does Caleb have a dog?').toUpperCase();
// Kevin did some research online and found that by adding .toUpperCase to the variable, we could avoid typing it a ton of times during the coding process

//var quizQuestionOne = prompt('question here').toUpperCase();

// Checks for valid input using the created function.
var quizAnswerOne = prompt(quizQuestionOne).toUpperCase();
while(answerCheck(quizAnswerOne) === 2){
  quizAnswerOne = prompt(quizQuestionOne).toUpperCase();
  console.log('Invalid answer.');
}

console.log(quizQuestionOne);
if(quizAnswerOne === 'N' || quizAnswerOne === 'NO' ){
  console.log('You\'re correct!');
  document.write('<h5>&quot;Please answer with Y or N. Does Caleb have a dog?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerOne + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizAnswerOne === 'Y' || quizAnswerOne === 'YES'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Please answer with Y or N. Does Caleb have a dog?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerOne + '. <strong>&quot;You\'re incorrect, ' + name + '!&quot; </strong><em>The clown steps out of the shadows to your right, a chainsaw in hand.</em></h5>');
}

var quizAnswerTwo = prompt(quizQuestionTwo).toUpperCase();
while(answerCheck(quizAnswerTwo) === 2){
  quizAnswerTwo = prompt(quizQuestionTwo).toUpperCase();
  console.log('Invalid answer.');
}
if(quizAnswerTwo === 'Y' || quizAnswerTwo === 'YES'){
  console.log('You\'re correct!');
  document.write('<h5>&quot;You know the drill. Does Caleb have tattoos?&quot;&quot;</h5>');
  document.write('<h5>&quot;You said: ' + quizAnswerTwo + '. <strong>&quot;You\'re INcorrect, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizAnswerTwo === 'N' || quizAnswerTwo === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;You know the drill. Does Caleb have tattoos?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerTwo + '. <strong>&quot;Incorrect again, ' + name + '!&quot; </strong><em> The clown starts the chainsaw, giggling quietly to himself.</em></h5>');
}

var quizAnswerThree = prompt(quizQuestionThree).toUpperCase();
while(answerCheck(quizAnswerThree) === 2){
  quizAnswerThree = prompt(quizQuestionThree).toUpperCase();
  console.log('Invalid answer.');
}
if(quizAnswerThree === 'Y' || quizAnswerThree === 'YES'){
  console.log('You\'re correct!');
  document.write('<h5>&quot;Does Caleb have a cat? Y or N.&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerThree + '. <strong>&quot;You\'re correct, ' + name + '!</strong>&quot;</h5>');
  pointsTotal ++;
} else if(quizAnswerThree === 'N' || quizAnswerThree === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Does Caleb have cat? Y or N.&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerThree + '. <strong><em>The speaker laughs.</em> &quot;' + 'Wrong again, ' + name + '!' + '&quot; he says gleefully. ' + '</strong> You feel strong hands snatch you from behind and pin you to a wooden table behind you. You can\'t break the cuffs they shackle around your ankles.</em></h5>');
}

var quizAnswerFour = prompt(quizQuestionFour).toUpperCase();
while(answerCheck(quizAnswerFour) === 2){
  quizAnswerFour = prompt(quizQuestionFour).toUpperCase();
  console.log('Invalid answer.');
}
if(quizAnswerFour === 'Y' || quizAnswerFour === 'YES'){
  console.log('You\'re correct!');
  document.write('<h5>Is Caleb\'s PC better than yours?</h5>');
  document.write('<h5>You said: ' + quizAnswerFour + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizAnswerFour === 'N' || quizAnswerFour === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Is Caleb\'s PC better than yours?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerFour + '. <strong>&quot;Wrong again...&quot; <em>Another of your hands is locked to the table. The other clown pull-starts his saw.</em></strong></h5>');
}

var quizAnswerFive = prompt(quizQuestionFive).toUpperCase();
while(answerCheck(quizAnswerFive) === 2){
  quizAnswerFive = prompt(quizQuestionFive).toUpperCase();
  console.log('Invalid answer.');
}
if(quizAnswerFive === 'N' || quizAnswerFive === 'No'){
  console.log('You\'re correct!');
  document.write('<h5>&quot;Would Caleb ever use an iPhone?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerFive + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  document.write('<h5>&quot;Would Caleb ever use an iPhone?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerFive + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizAnswerFive === 'Y' || quizAnswerFive === 'YES'){
  console.log('You\'re incorrect, try again');
  console.log('<h5>&quot;Would Caleb ever use an iPhone?&quot;</h5>');
  console.log('<h5>You said: ' + quizAnswerFive + '. <strong>&quot;It\'s just not your night, is it, ' + name + '?&quot;</strong> <em>The final wrist is bound to the table, and all you can do is watch while the snickering clown saws though the table towards you.</em></h5>');
  document.write('<h5>&quot;Would Caleb ever use an iPhone?&quot;</h5>');
  document.write('<h5>You said: ' + quizAnswerFive + '. <strong>&quot;It\'s just not your night, is it, ' + name + '?&quot;</strong> <em>The final wrist is bound to the table, and all you can do is watch while the snickering clown saws though the table towards you.</em></h5>');
}

for(var k = 0; k < 4; k++){
  parseInt(prompt(quizQuestionSix));
  var quizQuestionSixAnswer = Math.round(Math.random() * 10);
  // for(var l = 0; l <= 10; l++){ originally was making an unecessary for loop
  if(quizQuestionSix === quizQuestionSixAnswer){
    k = 4;
    console.log(quizQuestionSix);
    console.log('<h5>You said: ' + quizQuestionSix + '. That was correct..<em>this time.</em></h5>');
    document.write(quizQuestionSix);
    document.write('<h5>You said: ' + quizQuestionSix + '. That was correct..<em>this time.</em></h5>');
    pointsTotal ++;
  }else{
    console.log(quizQuestionSix);
    console.log('<h5>You said: ' + quizQuestionSix + '. Nope! ' + 'It was ' + quizQuestionSixAnswer + '.. another digit we\'ll saw from your hand.</h5>');
    document.write(quizQuestionSix);
    document.write('<h5>You said: ' + quizQuestionSix + '. Nope! ' + 'It was ' + quizQuestionSixAnswer + '.. another digit we\'ll saw from your hand.</h5>');
  }
}

for(var i = 0; i < 6; i++){
  var quizResponseSeven = prompt('How long does it take to saw through a leg?').toUpperCase();
  var quizResponseSevenAnswer = ['30 SECONDS', '2 MINUTES', 'HOW SHARP IS THE SAW?'];
  for(var j = 0; j < quizResponseSevenAnswer.length; j++){
    if(quizResponseSeven === quizResponseSevenAnswer[j]){
      console.log('That\'s correct');
      console.log('i = 6 here to break original for loop');
      i = 6;
      console.log('<h5>How long does it take to saw through a leg?</h5>');
      console.log('<h5>You said: ' + quizResponseSeven + '. That was correct..<em>Next question</em></h5>');
      document.write('<h5>How long does it take to saw through a leg?</h5>');
      document.write('<h5>You said: ' + quizResponseSeven + '. That was correct..<em>Next question</em></h5>');
      pointsTotal ++;
      break;
    }
    if(quizResponseSeven !== quizResponseSevenAnswer[0] ||
      quizResponseSeven !== quizResponseSevenAnswer[1] ||
      quizResponseSeven !== quizResponseSevenAnswer[2]){
      console.log('<h5>You said: ' + quizResponseSeven + '. <strong>&quot;That was incorrect,&quot; he giggles. &quot;You could have answered: 30 seconds, 2 Minutes, or..&quot; the clown doubles over in laughter, &quot;How sharp is the saw?&quot; <em>He slowly lowers the saw to your inner thigh</em></h5>');
      document.write('<h5>You said: ' + quizResponseSeven + '. <strong>&quot;That was incorrect,&quot; he giggles. &quot;You could have answered: 30 seconds, 2 Minutes, or..&quot; the clown doubles over in laughter, &quot;How sharp is the saw?&quot; <em>He slowly lowers the saw to your inner thigh</em></h5>');
    }
  }
}
console.log('<h5>You scored a total of ' + pointsTotal + ' out of 7.</h5>');
document.write('<h5>You scored a total of ' + pointsTotal + ' out of 7.</h5>');
  // if(quizQuestionSix === 'N' || quizQuestionSix === 'No'){
  //   console.log('You\'re correct!');
  //   document.write('&quot;Would Caleb ever use an iPhone?&quot;');
  //   document.write('You said: ' + quizQuestionSix + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong>');
  // } else if(quizQuestionSix === 'Y' || quizQuestionSix === 'YES'){
  //   console.log('You\'re incorrect, try again');
  //   document.write('&quot;Would Caleb ever use an iPhone?&quot;');
  //   document.write('You said: ' + quizQuestionSix + '. <strong>&quot;It\'s just not your night, is it, ' + name + '?&quot;</strong> <em>The final wrist is bound to the table, and all you can do is watch while the snickering clown saws though the table towards you.</em>');
  // } else if(quizQuestionSix === 'Y' || quizQuestionSix === 'YES'){
  //   break;
  // }
// }
  //   console.log('That\'s not an answer');
  //   document.write('A leg goes, then.');
  //   alert('A leg goes, then.');
  // } else{}
  /*var elseQuestion = prompt('Do you speak English? I said to answer with Y or N.');
  console.log(elseQuestion);
}*/

/*
switch(quizQuestionOne.toUpperCase() === 'Y' || 'YES'){
case 'Y' || 'YES':
  console.log('You\'re correct!');
  break;
case 'N' || 'NO':
  console.log('You\'re incorrect, try again.');
}*/

/*if(quizQuestionOne.toUpperCase() != 'Y' ||
   quizQuestionOne.toUpperCase() != 'YES' ||
   quizQuestionOne.toUpperCase() != 'N' ||
   quizQuestionOne.toUpperCase() != 'NO'){
  prompt('Do you speak English? I said to answer with Y or N.');
}*/

/*if(quizQuestionOne.toUpperCase() === 'Y' ||
  quizQuestionOne.toUpperCase() === 'YES'){
  console.log('Ah, so you can give a proper answer. Correct.');
} else if(quizQuestionOne.toUpperCase() === 'N' ||
  quizQuestionOne.toUpperCase() === 'NO'){
  console.log('Ah, so you can give a proper answer. Incorrect as it was.');
} else {
  alert('Try again later, smart alec.');
}*/
