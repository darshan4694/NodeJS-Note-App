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
    notes.push(note);
    fs.writeFileSync('./data/notesData.json', JSON.stringify(notes));
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