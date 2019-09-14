const STORE = [
  {
    prompt: "Who played Cruella De Ville in 101 Dalmations?",
    answers: ['Meryl Streep', 'Diane Keaton', 'Glenn Close', 'Helen Mirren'],
    answer: 2,
    icon: 'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/31107/article_full%402x.jpg'
  },
  {
    prompt: "Who played the main 3 characters in all of the Harry Potter movies?",
    answers: ['Emma Watson, Daniel Radcliffe and Rupert Grint', 'Emma Watson, Danny Wood and Ed Sheeran', 'Emma Watson, Daniel Radcliffe and Brian Jones', 'Emma Watson, Elijah Wood and Rupert Grint'],
    answer: 0,
    icon: 'https://data.whicdn.com/images/230154821/original.gif'
  },
  {
    prompt: "Which main actors from the Fast and Furious series were left out of Hobbs and Shaw?",answers: ['Vin Diesel, Sung Kang, Paul Walker, Lucas Black and Tyrese Gibson', 'Jason Statham, Dwayne Johnson and Vin Diesel', 'Dwayne Johnson, Paul Walker and Tyrese Gibson', 'Vin Diesel, Lucas Black and Deckard Shaw'],
    answer: 0,
    icon: 'https://ca-times.brightspotcdn.com/dims4/default/ec7499c/2147483647/strip/true/crop/1000x562+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Fa9%2Fc4%2Fcd2514b881e9eb2258e150cfd685%2Fla-1492460960-gh2s28b3h2-snap-image'
  },
  {
    prompt: "Which actor from the Descendents series passed away in 2019?",
    answers: ['Sofia Carson', 'Cameron Boyce', ' Cameron Bryce', 'China McClain'],
    answer: 1,
    icon: 'https://nerdist.com/wp-content/uploads/2019/07/cameron-boyce-descendants-1200x676.jpg'
  },
  {
    prompt: "Who played Dora in the movie Dora and the Lost City of Gold?",
    answers: ['Camila Mendes', 'Maia Mitchell', 'Bea Miller', 'Isabela Moner'],
    answer: 3,
    icon: 'https://www.tvovermind.com/wp-content/uploads/2019/05/Isabela-Moner-as-Dora-the-Explorer.jpg'
  },
  {
    prompt: "Who were Tommy Lee Jones and Will Smith replaced by as the main agenets in MIB International?",
    answers: ['Emma Thompson and Liam Neeson', ' Tessa Thompson and Chris Hemsworth', ' Emma Thompson and Chris Hemsworth', 'Jake Thompson and Luke Hemsworth'],
    answer: 1,
    icon: 'https://img1.looper.com/img/gallery/what-the-critics-are-saying-about-men-in-black-international/intro-1560354345.jpg'
  },
  {
    prompt: "What movies has Will Smith been in?", 
    answers: ['MIB, Pursuit of Happyness and Aladdin', 'MIB, Pursuit of Happyness and Focus', 'Pursuit of Happyness, Bright and Inception', 'Collateral Beauty, iRobot and Hitch'],
    answer: 0,
    icon: 'https://media2.giphy.com/media/u4ox7Kdatf1aU/giphy.gif',
  },
  {
    prompt: "What are the names of the actors who played SpiderMan?",
    answers: ['Jake Gyllenhaal, Josh Hertch and Zac Effron', 'Tobey Maguire, Andrew Garfield and Tom Holland', 'Topher Grace, Tobey Mcguire and Harry Styles', 'Zac Effron, Tom Holland and Jerry McQuire'],
    answer: 1,
    icon: 'https://i.imgur.com/5fTUiMN.jpg'
  },
  {
    prompt: "What is true about Mena Massoud who played Aladdin?",
    answers: ['He is Canadian and worked as a janitor before he was an actor', 'He is Egyptian America and he dropped out of college before appearing in Aladdin', 'He is Egyptian Canadian and moved back to Egypt when he was 3 years old', 'He is Canadian,starred in 7 movies before Aladdin and lived in a closet for 2 years when he moved to Las Vegas'],
    answer: 3,
    icon: 'https://media0.giphy.com/media/ehTz6rAnyLJGs6As3A/giphy.gif'
  },
  {
    prompt: "What movies has Naomi Scott starred in?",answers: ['Lemonade Mouth, Hitch and Aladdin', 'Aladdin, Power Rangers and the Martian', 'Aladdin, Lemonade Mouth and Power Rangers', 'Descendants, Charlies Angels and Aladdin'],
    answer: 2,
    icon: 'https://media0.giphy.com/media/XgYzbfMsIOXV1F3nrZ/giphy.gif'
  },
];

// variable to keep track of what question you're on
let questionNumber = 0;

// variable to keep track of the score
let score = 0;

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz () {
  $('.quizStart').on('click', '.submitButton', function (event) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.progress-bar').css('display', 'block');
    $('.questionNumber').text(questionNumber+1);
      $('.score').text(score+1);
});
}

//increment question number
function changeQuestionNumber () {
  if (questionNumber < STORE.length) {
    questionNumber ++;
  }
  $('.questionNumber').text(questionNumber+1);
}

//increment score
function changeScore () {
  score ++;
  $('.score').text(score);
}

// function to handle start button click
function handleStartButton() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    // target the container - and replace the HTML inside of it with a question HTML which is above
    $('.questionAnswerForm').html(generateQuestion())
  })
}

// render question in DOM
function renderQuestion () {
  $('.questionAnswerForm').html(generateQuestion());
}
// function to generate a question HTML 
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].prompt}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
  } else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}

// function to submit an answer choice - handle the submit answer event,
function submitAnswer() {
  $("input[type='button']").click(userSelectAnswer());
} 

//user selects answer on submit run user feedback
function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].answers[STORE[questionNumber].answer]}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
  let correctAnswer = `${STORE[questionNumber].answers[STORE[questionNumber].answer]}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
  let correctAnswer = `${STORE[questionNumber].answers[STORE[questionNumber].answer]}`;
  // let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}

//update score text
function updateScore () {
  changeScore();
  $('.score').text(score);
}

//when quiz is over this is the html for the page
function renderResults () {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://i.pinimg.com/originals/95/7c/64/957c64fb031009852f568227d9b92fd7.gif" alt="movie master"/><p>You got ${score} / 10</p><p>You are a movie master!! </p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><img src="https://media1.tenor.com/images/2771512659fac529573b6c75608b865b/tenor.gif?itemid=5145689" alt="movie night icon"/><p>You got ${score} / 10</p><p>Almost there!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Better luck next time. Time to have another MOVIE NIGHT!</h3><img src="https://media3.giphy.com/media/TgOYjtgKpS9jAytUlh/giphy.gif"/><p>You got ${score} /10 Time to get busy and watch more movies!</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//run quiz functions
function createQuiz () {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
  // handleStartButton();
}

$(createQuiz);
