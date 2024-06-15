const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes;

function loadData() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
loadData();

function saveData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box"; //adding a classname
  inputBox.setAttribute("contenteditable", "true");

  img.src = "images/trash.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    //    for all the notes save the data in browser
    notes.forEach((note) => {
      // event handler property that specifies a function to execute when the keyup event is triggered on the element. The keyup event occurs when the user releases a key on the keyboard.
      note.onkeyup = function () {
        saveData();
      };
    });
  }
});
