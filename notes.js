const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesDataString = fs.readFileSync('./data/notesData.json');
        return JSON.parse(notesDataString);
    } catch (e) {
        return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('./data/notesData.json', JSON.stringify(notes));
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    // code to check if the note passed here in addNote function is already exist in the notesData.json
    //below function will be empty if the note doesn't exist and it's lenght is 1 if the note already exist
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }
};

var getAll = () => {
    console.log("Getting all Notes...");
};

var getNote = (title) => {
    console.log("getting note : ", title);
};

var removeNote = (title) => {
    console.log("Removing note: ", title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};