const star = document.querySelectorAll(".star");
const bodyDiv = document.querySelectorAll('.opacityDiv')[0];

const divInvisible = document.createElement('div');
document.body.appendChild(divInvisible);

console.log(bodyDiv)

let starValue;
let vis = 1000;
window.alert = function (message) {
  let a = document.createElement("div");
  a.classList.add('divAlert');
  a.style.cssText = 'z-index:' + vis + ';'


  a.innerHTML = message;
  let btn = document.createElement('button');
  btn.classList.add('alertButton');
  btn.innerText = 'OK';
  a.appendChild(btn);
  document.body.appendChild(a);
  vis--;

  btn.addEventListener('click', function () {
    divInvisible.classList.remove('invisible');
    bodyDiv.style.opacity = '1';
    a.remove();
  })
};



for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    unselect();
    for (let j = 0; j < i + 1; j++) {
      star[j].classList.add("clickStar");
    }
    starValue = document.querySelectorAll(".clickStar").length;
    moreInfoDisable();
    console.log(starValue);
  });
}

function unselect() {
  const selected = document.querySelectorAll(".clickStar");
  for (let i = 0; i < selected.length; i++) {
    if (selected[i]) {
      selected[i].classList.remove("clickStar");
    }
  }
}

const formMoreInfo = document.getElementById("formMoreInfo");
const moreInfo = document.getElementById("moreInfo");
const feedback = document.getElementById("feedback");

moreInfo.setAttribute("disabled", true);
moreInfo.style.opacity = "0.5";

function moreInfoDisable() {
  if (starValue !== 0) {
    moreInfo.removeAttribute("disabled");
    moreInfo.style.opacity = "1";
  } else {
    moreInfo.setAttribute("disabled", true);
    moreInfo.style.opacity = "0.5";
  }
}

moreInfo.addEventListener("click", function (e) {
  divInvisible.classList.add('invisible');
  bodyDiv.style.opacity = '0.2';
  e.preventDefault();
  window.alert('Your evaluation is ' + starValue + ' star.<br>Your feedback is: ' + feedback.value);
  unselect();
  formMoreInfo.reset();
  moreInfo.style.opacity = '0.5';
});

function overMouse() {
  for (let i = 0; i < star.length; i++) {
    star[i].addEventListener("mouseover", function () {
      unselect();
      starValue = 0;
      moreInfoDisable();
    });
  }
}

overMouse();


