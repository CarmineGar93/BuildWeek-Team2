let peppino1 = localStorage.getItem('peppino');
console.log(peppino1);

let giannino1 = localStorage.getItem('giannino');
console.log(giannino1);


const ctx = document.getElementById('myDoughnutChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [((100 / giannino1) * (giannino1 - peppino1)).toFixed(1), ((100 / giannino1) * peppino1).toFixed(1)],
            backgroundColor: [
                '#C2128D',
                '#00FFFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
    },
});



const correctAswers = document.getElementById('correctAswers');
const percentualeCorrect = document.createElement('h2');
const pCounterQuestions = document.createElement('p');

percentualeCorrect.innerHTML = `${((100 / giannino1) * peppino1).toFixed(1)}%`;
pCounterQuestions.innerHTML = `${peppino1} / ${giannino1} questions`;

correctAswers.appendChild(percentualeCorrect);
correctAswers.appendChild(pCounterQuestions);


const wrongAnswers = document.getElementById('wrongAnswers');
const percentualeWrong = document.createElement('h2');
const pCounterQuestionsWrong = document.createElement('p');

percentualeWrong.innerHTML = `${((100 / giannino1) * (giannino1 - peppino1)).toFixed(1)}%`;;
pCounterQuestionsWrong.innerHTML = `${giannino1 - peppino1} / ${giannino1} questions`;

wrongAnswers.appendChild(percentualeWrong);
wrongAnswers.appendChild(pCounterQuestionsWrong);




const textResults = document.getElementById('textResults');
const textResultsTitle = document.createElement('h4');
const textResultsSubTitle = document.createElement('h4');
const textResultsP = document.createElement('p');

textResults.appendChild(textResultsTitle);
textResults.appendChild(textResultsSubTitle);
textResults.appendChild(textResultsP);

if (((100 / giannino1) * peppino1) >= 60) {
    textResultsTitle.innerHTML = 'Congratulations!';
    textResultsSubTitle.innerHTML = 'You passed the exam';
    textResultsSubTitle.style.color = '#00FFFF';
    textResultsP.innerHTML = `We'll send you the certificate in few minutes.
Check your email (including promotions / spam folder)`;
} else {
    textResultsTitle.innerHTML = 'CAPRA!';
    textResultsSubTitle.innerHTML = 'CAPRA';
    textResultsSubTitle.style.color = '#C2128D';
    textResultsP.innerHTML = `Non aspettarti nulla nella email.`;
}