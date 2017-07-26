const fs = require('fs');

var notesDataString = fs.readFileSync('./data/notesData.json'); // this is string
// console.log("Data in json file: ",);

if(notesDataString.toString() === null)
    notesDataString.toString() = '{}';

var notesDataJSON = JSON.parse(notesDataString);
console.log("Initial Data",notesDataJSON);
if(!notesDataJSON.notes)
    notesDataJSON.notes = [];

// console.log(notesDataJSON.notes.length);

var addNote = (title, body) => {

    notesDataJSON.notes.push({
        title,
        body
    });

    fs.writeFileSync('./data/notesData.json', JSON.stringify(notesDataJSON));
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