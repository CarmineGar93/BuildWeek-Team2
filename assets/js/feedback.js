const star = document.querySelectorAll('.star');


let starValue;

for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function () {
        unselect();
        for (let j = 0; j < i + 1; j++) {
            star[j].classList.add('clickStar');

        }
        starValue = document.querySelectorAll('.clickStar').length;
        moreInfoDisable();
        console.log(starValue);

    })

}


function unselect() {
    const selected = document.querySelectorAll('.clickStar');
    for (let i = 0; i < selected.length; i++) {
        if (selected[i]) {
            selected[i].classList.remove('clickStar');
        }
    }
}

const formMoreInfo = document.getElementById('formMoreInfo')
const moreInfo = document.getElementById('moreInfo');
const feedback = document.getElementById('feedback');


moreInfo.setAttribute('disabled', true);

function moreInfoDisable(){
    if(starValue !== 0) {
        moreInfo.removeAttribute('disabled');
    } else {
        moreInfo.setAttribute('disabled', true);
    }
}

moreInfo.addEventListener('click', function (e) {
    e.preventDefault();
    window.alert(`${starValue} ${feedback.value}`)
    unselect();
    formMoreInfo.reset();
})


function overMouse() {
    for (let i = 0; i < star.length; i++) {
        star[i].addEventListener('mouseover', function () {
            unselect();
            starValue = 0;
            moreInfoDisable()
        })
    }
}

overMouse();