document.addEventListener("DOMContentLoaded", loadNotes);

const noteInput = document.getElementById("note-input");
const saveBtn = document.getElementById("save-btn");
const notesList = document.getElementById("notes-list");
const toggleThemeBtn = document.getElementById("toggle-theme");

saveBtn.addEventListener("click", saveNote);
toggleThemeBtn.addEventListener("click", toggleTheme);

function saveNote() {
    const text = noteInput.value.trim();
    if (text === "") return;

    const note = {
        id: Date.now(),
        text: text,
        date: new Date().toLocaleString()
    };

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    addNoteToDOM(note);
    noteInput.value = "";
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(addNoteToDOM);
}

function addNoteToDOM(note) {
    const li = document.createElement("li");
    li.classList.add("note-item");
    li.innerHTML = `
        <span>${note.date}: ${note.text}</span>
        <button class="delete-btn" onclick="deleteNote(${note.id})">❌</button>
    `;
    notesList.appendChild(li);
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));

    notesList.innerHTML = "";
    loadNotes();
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// Установка темы при загрузке
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
