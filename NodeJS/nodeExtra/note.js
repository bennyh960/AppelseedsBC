const fs = require("fs");
// const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

// ? Add
const addNote = (title, body) => {
  const notes = loadNote();
  //   console.log(notes);
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  // if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New notes is added");
  } else {
    console.log("note title taken");
  }
};

// ?Read notes

const readNotes = (title) => {
  const notes = loadNote();

  const note = notes.find((n) => n.title === title);
  if (note) {
    console.log(note.title);
    console.log(note.body);
  } else {
    console.log("Note not found");
  }
};

// ? Save
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// ? Load
const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNote();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    // console.log(chalk.green.inverse("Note Removed"));
    console.log("note removed");
    saveNotes(notesToKeep);
  } else {
    // console.log(chalk.red.inverse("Note not found"));
    console.log("note not found");
  }
  //   console.log("remove note", title);
};

const listNotes = () => {
  const notes = loadNote();
  console.log("your notes in List form");
  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
