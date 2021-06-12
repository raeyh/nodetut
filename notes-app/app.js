const val = require("validator");
const ch = require("chalk");
const yar = require("yargs");
// Customize yargs version

yar.version("1.2.0");
// Create add command

yar.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new Note!");
  },
});
yar.command({
  command: "remove",
  describe: "Remove the note",
  handler: function () {
    console.log("Removing the Note!");
  },
});
yar.command({
  command: "list",
  describe: "Listing Notes",
  handler: function () {
    console.log("Listing All Notes");
  },
});
yar.command({
  command: "read",
  describe: "Reading a Note",
  handler: function () {
    console.log("Reading a Note!");
  },
});
console.log(yar.argv);
