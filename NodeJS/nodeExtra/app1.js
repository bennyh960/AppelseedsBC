const { getNotes, addNote, removeNote, listNotes, readNotes } = require("./note.js");
const yargs = require("yargs");
const { argv } = require("yargs");
// const chalk = require("chalk");

console.log(getNotes());

// const command = process.argv;
// console.log(command);

// Customise yargs version
yargs.version("1.1.1");

// console.log(process.argv);

//create yargs command
yargs.command({
  command: "add",
  describe: "add new note by yargs",
  builder: {
    title: {
      describe: "note title",
      demand: true, // to verify title is required , default is false
      type: "string", //make empty title be string and not boolean
    },
    body: {
      describe: "note Body",
      demand: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("adding new note with yargs func", argv);
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demand: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("remove a note!");
    removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    console.log("Listiong out all notes");
    listNotes();
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demand: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("reading a note");
    readNotes(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
