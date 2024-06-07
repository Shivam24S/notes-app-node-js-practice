import fs from "fs";
import chalk from "chalk";

// adding notes
export const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(
    (note) => note.title === title || note.body === body
  );

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("note added successfully"));
  } else {
    console.log(chalk.inverse.red("note already exist"));
  }
};

// loading notes

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// saving notes

const saveNotes = (note) => {
  const dataJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", dataJSON);
};
