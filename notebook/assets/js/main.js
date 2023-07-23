const localStorageNotesId = "notebook_tCHaPLrao4H6xp67YsL5rHEL_notes";
const dateObj = new Date();

const toggleModal = (modal) => {
  const target = document.getElementById(modal);
  target.classList.contains("hide")
    ? target.classList.replace("hide", "show")
    : target.classList.replace("show", "hide");
  if (target.dataset.form) {
    document.getElementById(target.dataset.form).reset();
  }
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

/**
 * Expected Object
 * const note = {
 *  id: "note1"
 *  title: "Some Title",
 *  description: "Some description",
 *  created: {
 *    year: 2023,
 *    month: 7,
 *    day: 23
 *  },
 *  status: 0
 * }
 *
 * Here status 0 means "Incomplete" and 1 means "Completed"
 */

const createNoteSaveBtn = document.getElementById("createNoteSaveBtn");

createNoteSaveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.querySelector("#createNoteTitle").value;
  const description = document.querySelector("#createNoteDescription").value;

  if (title === "" || !title || title === null) {
    document.querySelector("#createNoteTitle + .validation-msg").innerText =
      "*Title is required!";
    document
      .querySelector("#createNoteTitle")
      .addEventListener("change", (e) => {
        if (e.target === "" || !e.target || e.target === null) {
          return (document.querySelector(
            "#createNoteTitle + .validation-msg"
          ).innerText = "*Title is required!");
        } else {
          return (document.querySelector(
            "#createNoteTitle + .validation-msg"
          ).innerText = "");
        }
      });
    return;
  }
  document.querySelector("#createNoteTitle + .validation-msg").innerText = "";

  if (description === "" || !description || description === null) {
    document.querySelector(
      "#createNoteDescription + .validation-msg"
    ).innerText = "*Description is required!";
    document
      .querySelector("#createNoteDescription")
      .addEventListener("change", (e) => {
        if (e.target === "" || !e.target || e.target === null) {
          return (document.querySelector(
            "#createNoteDescription + .validation-msg"
          ).innerText = "*Description is required!");
        } else {
          return (document.querySelector(
            "#createNoteDescription + .validation-msg"
          ).innerText = "");
        }
      });
    return;
  }
  document.querySelector("#createNoteDescription + .validation-msg").innerText =
    "";

  const noteData = {
    id: Date.now().toString(),
    title: title,
    description: description,
    created: {
      year: dateObj.getFullYear(),
      month: dateObj.getMonth(),
      day: dateObj.getDate(),
    },
    status: 0,
  };
  const prevData = localStorage.getItem(localStorageNotesId);

  if (prevData) {
    const prevDataArr = JSON.parse(prevData);

    prevDataArr.push(noteData);

    localStorage.setItem(localStorageNotesId, JSON.stringify(prevDataArr));
    return toggleModal("createNoteFormModal");
  }

  const data = [noteData];
  localStorage.setItem(localStorageNotesId, JSON.stringify(data));
  return toggleModal("createNoteFormModal");
});
