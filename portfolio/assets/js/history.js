const reloadBtn = document.getElementById("reload");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const twoStepsBackBtn = document.getElementById("twoStepsBack");
const twoStepsForwardBtn = document.getElementById("twoStepsForward");

backBtn.addEventListener("click", () => {
  window.history.back();
});
forwardBtn.addEventListener("click", () => {
  window.history.forward();
});
twoStepsBackBtn.addEventListener("click", () => {
  window.history.go(-2);
});
twoStepsForwardBtn.addEventListener("click", () => {
  window.history.go(2);
});

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});
