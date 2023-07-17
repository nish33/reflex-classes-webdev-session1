const state = {
  status: false,
};
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
const display = document.getElementById("display");
const displayContent = document.getElementById("displayContent");

console.log(powerBtn);
powerBtn.addEventListener("click", () => {
  displayContent.innerText = "";
  state.status = !state.status;
  if (!state.status) {
    powerBtn.dataset.status = "off";
    display.dataset.status = powerBtn.dataset.status;
    return;
  }
  powerBtn.dataset.status = "on";
  display.dataset.status = powerBtn.dataset.status;
  return;
});

const digitBtns = document.getElementsByClassName("digit");

for (btn of digitBtns) {
  btn.addEventListener("click", (e) => {
    if (state.status) {
      const target = e.target;
      displayContent.innerText += target.dataset.value;
    }
  });
}

const opBtns = document.getElementsByClassName("operator");

for (btn of opBtns) {
  btn.addEventListener("click", (e) => {
    if (state.status) {
      const target = e.target;
      displayContent.innerText += target.dataset.value;
    }
  });
}
