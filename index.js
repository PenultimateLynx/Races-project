//  volume 
  const volumeBar = document.getElementById('volumeBar')
  volumeBar.addEventListener('input', function (){player.volume = volumeBar.value;})
  // details about cards click event 👂
  
  var innercards = document.querySelectorAll('.innerCard')

  innercards.forEach(innerCard => {
    innerCard.addEventListener('click', toggleCardDisplay);
  });
  function toggleCardDisplay(event) {
    const divFront = event.currentTarget.querySelector('.front');
    const backDiv = event.currentTarget.querySelector('.back');
    if (backDiv.style.display === 'none') {
      backDiv.style.display = 'flex';
      divFront.style.display = 'none';
    } else {
      backDiv.style.display = 'none';
      divFront.style.display = 'flex';
    }
  }
  // ------------------input validation raceselection.html---------------------------------------------------------------
  const nameInput = document.getElementById('name');
  const submitButton = document.getElementById('submit');
  
  nameInput.addEventListener('input', function() {
      let username = nameInput.value;
      const regExLettersOnly = /^[a-zA-Z]+$/;
  
      if (!regExLettersOnly.test(username) || username.length === 0) {
          document.getElementById('error').style.display = 'initial';
          submitButton.disabled = true;
      } else {
          document.getElementById('error').style.display = 'none';
          submitButton.disabled = false;
      }
  });
// ------------------RACESELECTION cards -------------------------------------------

//Show first question after clicking "next"
var next = document.getElementById('submit');
var first = document.querySelector('.first');
var form = document.querySelector('.content-form');
next.addEventListener('click',() => {
  form.classList.add('vanish');
  setTimeout(() => {
    // 'next' form disappears
    form.style.display = 'none';
    // first question card appears
    first.style.display='flex';
    addOptionListeners(first);
  }, 900);
})

var selectedAnswers = [];

// function to add event listeners to all questions
function addOptionListeners(question) {
  var options = question.querySelectorAll('.option');
  var isLastQuestion = question.classList.contains('fifth');
  
  

  options.forEach(option => {
    option.addEventListener('click', () => {
      // get the id of the selected option
      var answerId = option.id;
      
      // save the ID inside of the array
      selectedAnswers.push(answerId);
      
      // vanish effect of the opts
      option.classList.add('vanish');

      setTimeout(() => {
        showNextQuestion(question);

      }, 900);
      
      // show corresponding race based on options chosen
      if (isLastQuestion) {
        showRace();
      }
    });
  });
}

// show next question funct
function showNextQuestion(currentQuestion) {
  var nextQuestion = currentQuestion.nextElementSibling;
  var thisIsTheOrcClass = document.querySelector('.one');
  
  if (nextQuestion==thisIsTheOrcClass) {
    showRace();
    currentQuestion.style.display='none';
  }
  
  else if (nextQuestion) {
    currentQuestion.style.display='none';
    nextQuestion.style.display='flex';
    addOptionListeners(nextQuestion);
  }
}


function showRace() {
  var race = '';

  if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'nightElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'draconian';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'nightElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'draconian';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('1') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'nightElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'nightElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'draconian';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('3') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'draconian';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'forestElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('5') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'nightElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('9')) {
    race = 'draconian';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('7') && selectedAnswers.includes('10')) {
    race = 'orc';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('9')) {
    race = 'lightElf';
  } else if (selectedAnswers.includes('2') && selectedAnswers.includes('4') && selectedAnswers.includes('6') && selectedAnswers.includes('8') && selectedAnswers.includes('10')) {
    race = 'nightElf';
  }
      // title variation
    var urOrc = "⚔️ Congrats " + nameInput.value + ", " + "you are an Orc ⚔️"
    var urLightElf = "❄️ Congrats " + nameInput.value + ", " + "you are a Light Elf ❄️"
    var urNightElf = "⚫ Congrats " + nameInput.value + ", " + "you are a Nigt Elf ⚫"
    var urForestElf = "🌲 Congrats " + nameInput.value + ", " + "you are a Forest Elf 🌲"
    var urDraconian = "🦎 Congrats " + nameInput.value + ", " + "you are a Draconian 🦎"

  // Reset all classes before showing the selected one

  document.querySelectorAll('.one, .two, .three, .four, .five').forEach(element => {
     element.style.display = 'none'; });

  switch (race) {
    case 'lightElf':
      document.querySelector('h1').innerText = urLightElf;
      document.querySelector('.two').style.display = 'flex';
      break;
    case 'nightElf':
      document.querySelector('h1').innerText = urNightElf;
      document.querySelector('.three').style.display = 'flex';
      break;
    case 'forestElf':
      document.querySelector('h1').innerText = urForestElf;
      document.querySelector('.four').style.display = 'flex';
      break;
    case 'draconian':
      document.querySelector('h1').innerText = urDraconian;
      document.querySelector('.five').style.display = 'flex';
      break;
    case 'orc':
      document.querySelector('h1').innerText = urOrc;
      document.querySelector('.one').style.display = 'flex';
      break;
    default:
      break;
  }
}


