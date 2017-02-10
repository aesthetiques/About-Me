'use strict';
//jQuery for
$('.slide-out').click(function(){
  $(this).next('*').slideToggle();
});

var pointsTotal = 0;
var confirmQuiz = confirm('Hello, would you like to play a game?');
var quizConfirmed = false;
// var quizResponse = prompt(
//   ['&quot;Please answer with Y or N. Does Caleb have a dog?<&quot;/h4>'],
//   ['']
do {
  if(confirmQuiz){
    console.log('Good... Welcome to the Monkey House.. What would you like to be called?');
  // can't figure out how to get the document.print() to float to the right on the page in ccs.
    var name = prompt('Good... Welcome to the Monkey House.. What would you like to be called?');
    document.write('<h3>&quot;Good... Welcome to the Monkey House.. What would you like to be called?&quot;</h3>');
    document.write('<h5>&quot;My name is ' + name + '.&quot; You reply.</h5> ');
    quizConfirmed = true;
  } else {
    var name = prompt('Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?');
    console.log('Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?');
    document.write('<h3>&quot;Ohohoho, its much too late to be shy.. Come into the Monkey House... What do we call you?&quot;</h3>');
    document.write('<h5>My name is </h5>' + name + '<h5>.</h5>');
  }
} while (!quizConfirmed);

var quizResponseOne = prompt('Please answer with Y or N. Does Caleb have a dog?').toUpperCase();
// Kevin did some research online and found that by adding .toUpperCase to the variable, we could avoid typing it a ton of times during the coding process
console.log(quizResponseOne);
if(quizResponseOne === 'N' || quizResponseOne === 'NO' ){
  console.log('You\'re correct!');
  document.write('<h5>&quot;Please answer with Y or N. Does Caleb have a dog?&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseOne + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizResponseOne === 'Y' || quizResponseOne === 'YES'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Please answer with Y or N. Does Caleb have a dog?&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseOne + '. <strong>&quot;You\'re incorrect, ' + name + '!&quot; </strong><em>The clown steps out of the shadows to your right, a chainsaw in hand.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseTwo = prompt('You know the drill. Does Caleb have any tattoos?').toUpperCase();

if(quizResponseTwo === 'Y' || quizResponseTwo === 'YES'){
  console.log('You\'re correct!');
  document.write('<h5>&quot;You know the drill. Does Caleb have tattoos?&quot;&quot;</h5>');
  document.write('<h5>&quot;You said: ' + quizResponseTwo + '. <strong>&quot;You\'re INcorrect, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizResponseTwo === 'N' || quizResponseTwo === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;You know the drill. Does Caleb have tattoos?&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseTwo + '. <strong>&quot;Incorrect again, ' + name + '!&quot; </strong><em> The clown starts the chainsaw, giggling quietly to himself.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseThree = prompt('Does Caleb have a cat? Y or N.').toUpperCase();

if(quizResponseThree === 'Y' || quizResponseThree === 'YES'){
  console.log('You\'re correct!');
  document.write('<h5>&quot;Does Caleb have a cat? Y or N.&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseThree + '. <strong>&quot;You\'re correct, ' + name + '!</strong>&quot;</h5>');
  pointsTotal ++;
} else if(quizResponseThree === 'N' || quizResponseThree === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Does Caleb have cat? Y or N.&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseThree + '. <strong><em>The speaker laughs.</em> &quot;' + 'Wrong again, ' + name + '!' + '&quot; he says gleefully. ' + '</strong> You feel strong hands snatch you from behind and pin you to a wooden table behind you. You can\'t break the cuffs they shackle around your ankles.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseFour = prompt('Is Caleb\'s PC better than yours?').toUpperCase();

if(quizResponseFour === 'Y' || quizResponseFour === 'YES'){
  console.log('You\'re correct!');
  document.write('<h5>Is Caleb\'s PC better than yours?</h5>');
  document.write('<h5>You said: ' + quizResponseFour + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizResponseFour === 'N' || quizResponseFour === 'NO'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Is Caleb\'s PC better than yours?&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseFour + '. <strong>&quot;Wrong again...&quot; <em>Another of your hands is locked to the table. The other clown pull-starts his saw.</em></strong></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

var quizResponseFive = prompt('Would Caleb ever use an iPhone?').toUpperCase();

if(quizResponseFive === 'N' || quizResponseFive === 'No'){
  console.log('You\'re correct!');
  document.write('<h5>&quot;Would Caleb ever use an iPhone?&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseFive + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong></h5>');
  pointsTotal ++;
} else if(quizResponseFive === 'Y' || quizResponseFive === 'YES'){
  console.log('You\'re incorrect, try again');
  document.write('<h5>&quot;Would Caleb ever use an iPhone?&quot;</h5>');
  document.write('<h5>You said: ' + quizResponseFive + '. <strong>&quot;It\'s just not your night, is it, ' + name + '?&quot;</strong> <em>The final wrist is bound to the table, and all you can do is watch while the snickering clown saws though the table towards you.</em></h5>');
} else{
  alert('That\'s not an answer, reload and try again.');
}

for(var k = 0; k < 4; k++){
  var quizResponseSix = parseInt(prompt('What\'s my favorite number? Between 1-10.'));
  var quizResponseSixAnswer = Math.floor(Math.random() * 10);
  // for(var l = 0; l <= 10; l++){ originally was making an unecessary for loop
  if(quizResponseSix === quizResponseSixAnswer){
    k = 4;
    document.write('<h5>What\'s my favorite number?</h5>');
    document.write('<h5>You said: ' + quizResponseSix + '. That was correct..<em>this time.</em></h5>');
    pointsTotal ++;
  }else{
    document.write('<h5>What\'s my favorite number?</h5>');
    document.write('<h5>You said: ' + quizResponseSix + '. Nope! ' + 'It was ' + quizResponseSixAnswer + '.. another digit we\'ll saw from your hand.</h5>');
  }
}

for(var i = 0; i < 6; i++){
  var quizResponseSeven = prompt('How long does it take to saw through a leg?').toUpperCase();
  var quizResponseSevenAnswer = ['30 SECONDS', '2 MINUTES', 'HOW SHARP IS THE SAW?'];
  for(var j = 0; j < quizResponseSevenAnswer.length; j++){
    if(quizResponseSeven === quizResponseSevenAnswer[j]){
      console.log('That\'s correct');
      i = 6;
      document.write('<h5>How long does it take to saw through a leg?</h5>');
      document.write('<h5>You said: ' + quizResponseSeven + '. That was correct..<em>Next question</em></h5>');
      pointsTotal ++;
      break;
    }
    if(quizResponseSeven !== quizResponseSevenAnswer[0] ||
      quizResponseSeven !== quizResponseSevenAnswer[1] ||
      quizResponseSeven !== quizResponseSevenAnswer[2]){
      document.write('<h5>You said: ' + quizResponseSeven + '. <strong>&quot;That was incorrect,&quot; he giggles. &quot;You could have answered: 30 seconds, 2 Minutes, or..&quot; the clown doubles over in laughter, &quot;How sharp is the saw?&quot; <em>He slowly lowers the saw to your inner thigh</em></h5>');
    }
  }
}
document.write('<h5>You scored a total of ' + pointsTotal + ' out of 7.</h5>');
  // if(quizResponseSix === 'N' || quizResponseSix === 'No'){
  //   console.log('You\'re correct!');
  //   document.write('&quot;Would Caleb ever use an iPhone?&quot;');
  //   document.write('You said: ' + quizResponseSix + '. <strong>&quot;You\'re correct, ' + name + '!&quot;</strong>');
  // } else if(quizResponseSix === 'Y' || quizResponseSix === 'YES'){
  //   console.log('You\'re incorrect, try again');
  //   document.write('&quot;Would Caleb ever use an iPhone?&quot;');
  //   document.write('You said: ' + quizResponseSix + '. <strong>&quot;It\'s just not your night, is it, ' + name + '?&quot;</strong> <em>The final wrist is bound to the table, and all you can do is watch while the snickering clown saws though the table towards you.</em>');
  // } else if(quizResponseSix === 'Y' || quizResponseSix === 'YES'){
  //   break;
  // }
// }
  //   console.log('That\'s not an answer');
  //   document.write('A leg goes, then.');
  //   alert('A leg goes, then.');
  // } else{}
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
