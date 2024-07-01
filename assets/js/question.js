const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

const timer = document.getElementById('timer');
const countQuestions = document.getElementById('countQuestions');

const btnAvanti = document.getElementById('btnAvanti');
const question = document.getElementById('question');
const answers = document.getElementById('answers');


window.addEventListener('load', init())

function init() {
    questionDisplay();
}

function questionDisplay() {
    const questionsArray = []
    const answersArray = [];

    for (let i = 0; i < questions.length; i++) {
        answersArray.push([]);
        answersArray[i].push(questions[i].correct_answer);
        for (let e = 0; e < questions[i].incorrect_answers.length; e++) {
            answersArray[i].push(questions[i].incorrect_answers[e]);
        }
    }

    for (let i = 0; i < questions.length; i++) {
        questionsArray.push(questions[i].question);
    }



    let i = 0;
    const questionDiv = document.createElement('h1');

    quest();

    btnAvanti.addEventListener('click', function () {
        i++;
        questionDiv.innerHTML = '';
        answers.innerHTML = '';
        quest();
    })

    function quest() {
        questionDiv.innerHTML = questionsArray[i];
        question.appendChild(questionDiv);

        for (let j = 0; j < answersArray[i].length; j++) {
            const answersDiv = document.createElement('p');
            const risposte = answersArray[i][j];
            answersDiv.innerHTML = risposte;
            const risposteTrim = risposte.split(' ').join('');
            answersDiv.setAttribute('id', risposteTrim);
            answersDiv.classList.add('answersDiv');
            answersDiv.addEventListener('click', function () {
                unselect();
                answersDiv.classList.add('click');
                
            })
            answers.appendChild(answersDiv);


        }
    }
}


function unselect () {
  const selected = document.querySelector('.click');
  if (selected) {
  selected.classList.remove('click');
} 
}
