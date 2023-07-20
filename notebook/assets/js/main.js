const toggleModal = (modal) => {
  const target = document.getElementById(modal);
  target.classList.contains("hide")
    ? target.classList.replace("hide", "show")
    : target.classList.replace("show", "hide");
  return;
};

const modalToggleBtns = document.querySelectorAll(
  'button[data-toggle="modal"]'
);

modalToggleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    const modalId = clickedBtn.dataset.target;
    toggleModal(modalId);
    return;
  });
});
