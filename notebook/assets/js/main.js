const localStorageNotesId = "notebook_tCHaPLrao4H6xp67YsL5rHEL_notes";
const dateObj = new Date();
const monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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
      .addEventListener("input", (e) => {
        if (e.target.value === "" || !e.target.value || e.target.value === null) {
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
      .addEventListener("input", (e) => {
        if (e.target.value === "" || !e.target.value || e.target.value === null) {
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
    listAllNotes();
    return toggleModal("createNoteFormModal");
  }

  const data = [noteData];
  localStorage.setItem(localStorageNotesId, JSON.stringify(data));
  listAllNotes();
  return toggleModal("createNoteFormModal");
});

const listAllNotes = () => {
  const allNotesFromLocalStorage = localStorage.getItem(localStorageNotesId);
  const allNotesArr = allNotesFromLocalStorage
    ? JSON.parse(allNotesFromLocalStorage)
    : null;

  const notesContainer = document.getElementById("cardsContainer");
  notesContainer.innerHTML = "";
  if(allNotesArr) {
    allNotesArr.forEach((note) => {
      notesContainer.innerHTML += `
      <div class="note-card">
        <div class="note-date">
          <span class="note-date-month">${monthsArr[note.created.month]}</span>
          <span class="note-date-day">${note.created.day}</span>
          <span class="note-date-year">${note.created.year}</span>
        </div>
        <div class="note-content">
          <div class="note-title">
            <h3 class="title-text">${note.title}</h3>
            <div class="note-btns">
              <button class="btn btn-sm btn-primary edit-btn" data-toggle="modal"
                  data-target="editNoteFormModal" data-id="${note.id}">&#x270F; Edit</button>
              <button class="btn btn-sm btn-danger" data-toggle="modal"
                  data-target="deleteNoteDialogModal" data-id="${note.id}">&#x1F6AB; Delete</button>
            </div>
          </div>
          <div class="note-description">
            <span>${note.description}</span>
          </div>
          <div class="note-action">
            <label for="${note.id}">Move To:</label>
            <select name="moveNote" id="${note.id}">
              <option value="0">Incomplete</option>
              <option value="1">Completed</option>
            </select>
          </div>
        </div>
      </div>
      `;
    });
    return;
  }
  notesContainer.innerHTML = `<h3>No Notes Found.</h3>`;
  return;
};
listAllNotes();