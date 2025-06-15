'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=18;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const guess = document.querySelector('.guess');

let highScore = 0;

let score = 20;

const displatMessage = function(message){
  document.querySelector('.message').textContent = message;
}



let secretNumber = Math.trunc(Math.random()*20)+1;

const again = document.querySelector('.again');

const check =document.querySelector('.check');

document.querySelector('.check').addEventListener('click',function(){
  const guess= Number( document.querySelector('.guess').value);
  console.log(guess ,typeof guess);
  
// when there is no input
  if(!guess){
    // document.querySelector('.message').textContent ='⛔ Select A Number';
    displatMessage('⛔ Select A Number')
  }

// When input is correct
  else if(guess === secretNumber){
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displatMessage('🎉Correct Number!');

    document.querySelector('.number').textContent=secretNumber;

    document.querySelector('body').style.backgroundColor='#60b347';

    document.querySelector('.number').style.width='30rem'

    document.querySelector('.score').textContent=score;

    if(highScore<score){
      document.querySelector('.highscore').textContent=score;
    }

  }

  // when unput is not correct
  else if (guess !== secretNumber){
    if(score>1){
    // document.querySelector('.message').textContent = guess>secretNumber?'📈 Too High!':'📉 Too Low!';
    displatMessage(guess>secretNumber?'📈 Too High!':'📉 Too Low!')
    score--;
    document.querySelector('.score').textContent=score;
    }
    else {
      displatMessage('💥 You Loss the Game!');
      document.querySelector('.score').textContent=0;
    }
  }
  
});
  

// // When input is Greater
//   else if(guess>secretNumber){
//     if(score>1){
//       document.querySelector('.message').textContent = '📈 Too High!';
//       score--;
//       document.querySelector('.score').textContent=score;
//     }

//     else {
//       document.querySelector('.message').textContent = '💥 You Loss the Game!';
//       document.querySelector('.score').textContent=0;
//     }
    
//   }
//   else if(guess<secretNumber){
//     if(score>1){
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent=score;
//     }   
//     else {
//       document.querySelector('.message').textContent = '💥 You Loss the Game!';
//       document.querySelector('.score').textContent=0;
//     } 
//   }
// })


// Again button fun
again.addEventListener('click', function(){

  score=20;

  secretNumber = Math.trunc(Math.random()*20)+1;

  document.querySelector('.score').textContent=score;

  document.querySelector('body').style.backgroundColor='#222';

  // document.querySelector('.message').textContent = 'Start guessing...';
  displatMessage('Start guessing...');

  document.querySelector('.number').textContent='?';

  document.querySelector('.guess').value='null'

  document.querySelector('.number').style.width='15rem';

  document.querySelector('.number').textContent='?';
})

