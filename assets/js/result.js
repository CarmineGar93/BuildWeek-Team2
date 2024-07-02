let peppino1 = localStorage.getItem('peppino');
console.log(peppino1);


const ctx = document.getElementById('myDoughnutChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [100 - (peppino1 * 10), (peppino1 * 10)],
            backgroundColor: [
                '#C2128D',
                '#00FFFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += Math.round(context.raw * 100) / 100;
                        return label;
                    }
                }
            }
        }
    },
});