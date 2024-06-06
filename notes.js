import chalk from "chalk";
import fs from "fs";

// adding note
export const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse("new note added"));
  } else {
    console.log(chalk.red.inverse("note already exists"));
  }
};

// loading notes data
export const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// saving notes data

export const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// removing note

export const removeNote = (title, body) => {
  const notes = loadNotes();

  const noteData = notes.filter(
    (note) => note.title !== title || note.body !== body
  );

  if (noteData.length < notes.length) {
    saveNotes(noteData);
    console.log(chalk.green.inverse("note removed successfully"));
  } else {
    console.log(chalk.red.inverse("No not found for remove"));
  }
};
