import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNote, removeNote } from "./notes.js";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "add Note",
    builder: {
      title: {
        describe: "title",
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
    describe: "remove Note",
    builder: {
      title: {
        describe: "title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      removeNote(argv.title, argv.body);
    },
  }).argv;
