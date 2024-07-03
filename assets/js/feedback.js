const star = document.querySelectorAll('.star');


for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function () {
        unselect();
        for (let j = 0; j < i + 1; j++) {
            star[j].classList.add('clickStar');

        }
        let starValue = document.querySelectorAll('.clickStar').length;
        console.log(starValue)
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