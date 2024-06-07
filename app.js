import Yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNote, removeNotes } from "./notes.js";

Yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "add a note",
    builder: {
      title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "note body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "remove a note",
    builder: {
      title: {
        describe: "note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "note body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      removeNotes(argv.title, argv.body);
    },
  }).argv;
