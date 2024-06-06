import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNote } from "./notes.js";

yargs(hideBin(process.argv)).command({
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
}).argv;
