const fs = require('fs');

var addNote = (title, body) => {

    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesDataString = fs.readFileSync('./data/notesData.json');
        notes = JSON.parse(notesDataString);
    } catch (e) {

    }

    // code to check if the note passed here in addNote function is already exist in the notesData.json
    //below function will be empty if the note doesn't exist and it's lenght is 1 if the note already exist

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('./data/notesData.json', JSON.stringify(notes));
    }
    console.log("Note Added:- ");
    console.log("Title is : ", title);
    console.log("The Body is : ", body);
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