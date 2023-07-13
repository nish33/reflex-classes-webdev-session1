let calcStatus = false;

/**
 * How to fetch HTML Elements in js
 */
// const body = document.getElementsByTagName('body');
// console.log(body);
// const buttons = document.getElementsByClassName('calc-btn');
// console.log(buttons);
// const displayContent = document.getElementById('display');
// console.log(displayContent);

// const element = document.querySelectorAll("#buttons .calc-btn");
// console.log(element);

const powerBtn = document.querySelector('.calc-btn[data-action="power"]');
const display = document.getElementById('display');
console.log(powerBtn);
powerBtn.addEventListener('click', () => {
    if(powerBtn.dataset.status === "on") {
        powerBtn.dataset.status = "off";
    } else {
        powerBtn.dataset.status = "on";
    }
    display.dataset.status = powerBtn.dataset.status;
});