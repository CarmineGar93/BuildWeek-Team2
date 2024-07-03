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
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
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
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
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
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
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
const circle = document.getElementsByClassName('circle')[0];
const pTimer = document.createElement('p');
pTimer.innerText = 10;
timer.appendChild(pTimer);

const questionsArray = [];              /* VARIABILE CON ARRAY DI TUTTE LE DOMANDE PRESENTE NELL'ARRAY PRINCIPALE (questions) */
const answersArray = [];                /* VARIABILE CON TUTTE LE RISPOSTE PRESENTE NELL'ARRAY PRINCIPALE (questions) */
let random = [];                        /* VARIABILE PER RANDOMIZZARE LE RISPOSTE, SIA CORRETTE CHE INCORRETTE */

let interval;
let count;
let countdownBegin = 9;
let i = 0;
const questionDiv = document.createElement('h1');

let answersCorrect = 0;
let peppino = 0;
let giannino = 0;

window.addEventListener('load', init())

function init() {
    arrayQuestions();
    quest();
    displayCount();
    disable();
    intervalSet();
    timerCircle();
}



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
}

function intervalSet() {                                                               /* QUESTA FUNZIONE SERVE A CAMBIARE LE DOMANDE ALLO SCADERE DEL TEMPO IMPOSTATO, (esempio, 10s) */
    interval = setInterval(function () {
        if (i < questionsArray.length - 1) {
            i++;
            questionDiv.innerHTML = '';
            answers.innerHTML = '';
            disable();
            quest();
            countQuestions.innerHTML = '';
            displayCount();
        } else {
            peppino = answersCorrect;
            let peppino1 = localStorage.setItem('peppino', peppino);                      /* N.B. TENERE IN CONSIDERAZIONE PEPPINO */
            giannino = questionsArray.length;
            let giannino1 = localStorage.setItem('giannino', giannino);                    /* N.B. TENERE IN CONSIDERAZIONE GIANNINO */
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



btnAvanti.addEventListener('click', function () {                                    /* FUNZIONE AL CLICK SUL BUTTON 'AVANTI', SERVE A CAMBIARE DOMANDA UNA VOLTA SELEZIONATA LA RISPOSTA */
    circle.style.animation = 'none';                                                 /* IL BUTTON è DISABILITATO DI DEFAULT. SI ATTIVA AL MOMENTO DEL CLICK SU UNA DELLE RISPOSTE */

    checkAnswer();
    if (i < questionsArray.length - 1) {
        i++;
        questionDiv.innerHTML = '';
        answers.innerHTML = '';
        disable();
        quest();
        countQuestions.innerHTML = '';
        displayCount();
        circle.style.animation = '10s circletimer linear infinite';

    } else {
        peppino = answersCorrect;
        let peppino1 = localStorage.setItem('peppino', peppino);
        giannino = questionsArray.length;
        let giannino1 = localStorage.setItem('giannino', giannino);
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

function quest() {                                                                  /* QUESTA FUNZIONE FA VISUALIZZARE A VIDEO SIA LE DOMANDE CHE LE RISPETTIVE RISPOSTE */
    questionDiv.innerHTML = questionsArray[i];
    question.appendChild(questionDiv);

    for (let j = 0; j < random[i].length; j++) {
        const answersDiv = document.createElement('p');
        const risposte = random[i][j];
        answersDiv.innerHTML = risposte;
        answersDiv.classList.add('answersDiv');
        answersDiv.addEventListener('click', function () {                            /* QUESTO EVENTO CLICK SERVE A INSERIRE UNA CLASSE ALLA RISPOSTA SELEZIONATA */
            unselect();                                                              
            answersDiv.classList.add('click');
            btnAvanti.removeAttribute('disabled')

        })
        answers.appendChild(answersDiv);
    }
}


function checkAnswer() {                                                                /* LA FUNZIONE VERIFICA SE LA RISPOSTA SELEZIONATA E CONFERMATA è QUELLA CORRETTA */
    const click = document.querySelector('.click').textContent
    if (click === questions[i].correct_answer) {
        answersCorrect++;
    }
}

function displayCount() {                                                                /* LA FUNZIONE MANDA A VIDEO IL NUNERO DELLA DOMANDA CORRENTE E IL TOTALE DELLE DOMANDE */   
    const pFoot = document.createElement('p');
    pFoot.innerHTML = 'QUESTION ' + (i + 1) + '<span> / ' + questions.length + '</span>';
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
}


