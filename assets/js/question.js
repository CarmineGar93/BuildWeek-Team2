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
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does GPU stand for?",
        correct_answer: "Graphics Processing Unit",
        incorrect_answers: [
            "Graphical Performance Unit",
            "Graphics Performance Unit",
            "Graphical Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which company developed the JavaScript programming language?",
        correct_answer: "Netscape",
        incorrect_answers: ["Microsoft", "Sun Microsystems", "IBM"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The Python programming language is named after a snake.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "HTML stands for HyperText Markup Language.",
        correct_answer: "True",
        incorrect_answers: ["False"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In which year was the Python 3.0 version released?",
        correct_answer: "2008",
        incorrect_answers: ["2000", "2010", "2015"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does HTTP stand for?",
        correct_answer: "HyperText Transfer Protocol",
        incorrect_answers: [
            "HyperText Transmission Protocol",
            "HighText Transfer Protocol",
            "HyperText Transfer Process",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which programming language is known as the language of the web?",
        correct_answer: "JavaScript",
        incorrect_answers: ["Python", "Java", "C++"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does RAM stand for?",
        correct_answer: "Random Access Memory",
        incorrect_answers: [
            "Read Access Memory",
            "Run Access Memory",
            "Readily Available Memory",
        ],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The Linux operating system was created by Linus Torvalds.",
        correct_answer: "True",
        incorrect_answers: ["False"],
    }
];

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        if (index === questions.length - 1) {
            localStorage.setItem('peppino', answersCorrect);
            totalQuestions = questionsArray.length;
            localStorage.setItem('totalQuestions', totalQuestions);
            rispSelectedString = JSON.stringify(answersSelected);
            localStorage.setItem('rispSelectedString', rispSelectedString);
            window.location.href = '/results.html';
        } else {
            answersCorrect = 0;
            localStorage.setItem('peppino', answersCorrect);
            totalQuestions = questionsArray.length;
            localStorage.setItem('totalQuestions', totalQuestions);
            answersSelected = [];
            for (let i = 0; i < questions.length; i++) {
                answersSelected.push('incorrect_answer');
            }
            rispSelectedString = JSON.stringify(answersSelected);
            localStorage.setItem('rispSelectedString', rispSelectedString);
            window.location.href = '/results.html';
        }

    }
});


const timer = document.getElementById('timer');
const countQuestions = document.getElementById('countQuestions');
const btnAvanti = document.getElementById('btnAvanti');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const circle = document.getElementsByClassName('circle')[0];
const questionDiv = document.createElement('h1');
const pTimer = document.createElement('p');
pTimer.innerText = 10;
timer.appendChild(pTimer);

const questionsArray = [];              /* VARIABILE CON ARRAY DI TUTTE LE DOMANDE PRESENTE NELL'ARRAY PRINCIPALE (questions) */
const answersArray = [];
let answersSelected = [];                /* VARIABILE CON TUTTE LE RISPOSTE PRESENTE NELL'ARRAY PRINCIPALE (questions) */
let random = [];                        /* VARIABILE PER RANDOMIZZARE LE RISPOSTE, SIA CORRETTE CHE INCORRETTE */


let domandaString = '';
let risposteString = '';
let questionsObject = '';
let rispSelectedString = '';

questionsObject = JSON.stringify(questions);
localStorage.setItem('questions', questionsObject);



let interval;
let count;
let countdownBegin = 9;
let index = 0;


let answersCorrect = 0;
let totalQuestions = 0;

window.addEventListener('load', init())

function init() {
    arrayQuestions();
    quest();
    displayCount();
    disable();
    intervalSet();
    timerCircle();
}

btnAvanti.addEventListener('click', function () {                                    /* FUNZIONE AL CLICK SUL BUTTON 'AVANTI', SERVE A CAMBIARE DOMANDA UNA VOLTA SELEZIONATA LA RISPOSTA */
    circle.style.animation = 'none';                                                 /* IL BUTTON è DISABILITATO DI DEFAULT. SI ATTIVA AL MOMENTO DEL CLICK SU UNA DELLE RISPOSTE */
    checkAnswer();
    const selection = document.querySelector('.click');
    answersSelected.push(selection.textContent);
    console.log(answersSelected);
    if (index < questionsArray.length - 1) {
        index++;
        questionDiv.innerHTML = '';
        answers.innerHTML = '';
        disable();
        quest();
        countQuestions.innerHTML = '';
        displayCount();
        circle.style.animation = '10s circletimer linear infinite';
    } else {
        localStorage.setItem('peppino', answersCorrect);
        totalQuestions = questionsArray.length;
        localStorage.setItem('totalQuestions', totalQuestions);
        rispSelectedString = JSON.stringify(answersSelected);
        localStorage.setItem('rispSelectedString', rispSelectedString);
        window.location.href = 'results.html';
    }

    clearInterval(count);
    timerCircle();
    clearInterval(interval);
    pTimer.innerText = 10;
    timer.appendChild(pTimer);
    countdownBegin = 9;
    intervalSet();
})

function arrayQuestions() {                                                        /* QUESTA FUNZIONE SERVE A POPOLARE I DUE ARRAY CON LE RISPETTIVE DOMANDE E RISPOSTE */
    for (let i = 0; i < questions.length; i++) {
        answersArray.push([]);
        answersArray[i].push(questions[i].correct_answer);
        for (let e = 0; e < questions[i].incorrect_answers.length; e++) {
            answersArray[i].push(questions[i].incorrect_answers[e]);
        }
    }

    for (let i = 0; i < answersArray.length; i++) {                                  /* QUESTO CICLO RANDOMIZZA LE RISPOSTE ALL'INTERNO DEL SUO ARRAY */
        let random2 = [];
        for (let j = 0; j < answersArray[i].length; j++) {
            let random3 = Math.floor(Math.random() * answersArray[i].length);
            if (!random2.includes(answersArray[i][random3])) {
                random2.push(answersArray[i][random3]);
            } else {
                j--;
            }
        }
        random.push(random2);
    }

    for (let i = 0; i < questions.length; i++) {
        questionsArray.push(questions[i].question);
    }

    domandaString = JSON.stringify(questionsArray);
    risposteString = JSON.stringify(answersArray);


    localStorage.setItem('domande', domandaString);
    localStorage.setItem('risposte', risposteString);

}

function intervalSet() {                                                               /* QUESTA FUNZIONE SERVE A CAMBIARE LE DOMANDE ALLO SCADERE DEL TEMPO IMPOSTATO, (esempio, 10s) */
    interval = setInterval(function () {
        answersSelected.push('incorrect_answer');
        console.log(answersSelected);
        if (index < questionsArray.length - 1) {
            index++;
            questionDiv.innerHTML = '';
            answers.innerHTML = '';
            disable();
            quest();
            countQuestions.innerHTML = '';
            displayCount();
        } else {
            localStorage.setItem('peppino', answersCorrect);                      /* N.B. TENERE IN CONSIDERAZIONE PEPPINO */
            totalQuestions = questionsArray.length;
            localStorage.setItem('totalQuestions', totalQuestions);
            rispSelectedString = JSON.stringify(answersSelected);
            localStorage.setItem('rispSelectedString', rispSelectedString);                    /* N.B. TENERE IN CONSIDERAZIONE GIANNINO */
            window.location.href = 'results.html';

        }
    }, 10000);
}


function timerCircle() {                                                        /* QUESTA FUNZIONE SERVE A VISUALIZZARE IL COUNTDOWN A VIDEO (esempio, 10s) */
    count = setInterval(function () {

        if (countdownBegin <= 0) {
            countdownBegin = 10;
            pTimer.innerHTML = countdownBegin;
            --countdownBegin;
        } else {
            pTimer.innerText = '';
            pTimer.innerHTML = countdownBegin;
            timer.appendChild(pTimer);
            --countdownBegin;
        }
    }, 1000);
}


function quest() {                                                                  /* QUESTA FUNZIONE FA VISUALIZZARE A VIDEO SIA LE DOMANDE CHE LE RISPETTIVE RISPOSTE */
    questionDiv.innerHTML = questionsArray[index];
    question.appendChild(questionDiv);
    for (let j = 0; j < random[index].length; j++) {
        const answersDiv = document.createElement('p');
        const risposte = random[index][j];
        answersDiv.innerHTML = risposte;
        answersDiv.classList.add('answersDiv');
        answersDiv.addEventListener('click', function () {
            btnAvanti.style.opacity = '1'                                                /* QUESTO EVENTO CLICK SERVE A INSERIRE UNA CLASSE ALLA RISPOSTA SELEZIONATA */
            unselect();
            answersDiv.classList.add('click');
            btnAvanti.removeAttribute('disabled')
        })
        answers.appendChild(answersDiv);
    }
}


function checkAnswer() {                                                                /* LA FUNZIONE VERIFICA SE LA RISPOSTA SELEZIONATA E CONFERMATA è QUELLA CORRETTA */
    const click = document.querySelector('.click').textContent
    if (click === questions[index].correct_answer) {
        answersCorrect++;
    }
}

function displayCount() {                                                                /* LA FUNZIONE MANDA A VIDEO IL NUNERO DELLA DOMANDA CORRENTE E IL TOTALE DELLE DOMANDE */
    const pFoot = document.createElement('p');
    pFoot.innerHTML = 'QUESTION ' + (index + 1) + '<span> / ' + questions.length + '</span>';
    countQuestions.appendChild(pFoot);
}


function unselect() {                                                                     /* QUESTA FUNZIONE RIMUOVE LA CLASSE AD UNA RISPOSTA PRECEDENTEMENTE SELEZIONATA */
    const selected = document.querySelector('.click');
    if (selected) {
        selected.classList.remove('click');
    }
}

function disable() {                                                                       /* LA FUNZIONE DISABILITA IL BUTTON */
    btnAvanti.setAttribute('disabled', true)
    btnAvanti.style.opacity = '0.5'
}




