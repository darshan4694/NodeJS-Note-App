/*
Here I initialized package.json by using node init
And then to intall 'lodash' : node install lodash --save
*/

/* 
Bes practice: 
Never upload node mudules folder on github,
just upload the project files,
to use modules from the node modules folder ( here lodash )
package,json will be helpful
we already initialized dependecies in package.json
So, when we download the files of the project use 'npm install' command
in project folder.
It will install necessary modules according to the dependencies in the package.json
*/
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const updateJsonFile = require('update-json-file');

const filePath = './data/notesData.json';

const titleOptions = {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of a note',
    demand: true,
    alias: 'b'
};
var argv = yargs
        .command('add', 'Add a new note', {title: titleOptions, body: bodyOptions})
        .command('read', 'Read an existing note', {title: titleOptions})
        .command('list', 'List out all existing notes')
        .command('remove', 'Remove a note', {title:titleOptions})
        .help()
        .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log("Note Added: ");
    if (note) {
        notes.logData(note);
    } else {
        console.log("The note already exist with the title: ", argv.title);
        console.log("Try using another title!");
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log("Printing " + allNotes.length +" note(s)");
    allNotes.forEach((note) => notes.logData(note));
} else if (command === 'read') {
    var outputNote = notes.getNote(argv.title);

    console.log("Note Found: ");
    
    if (outputNote) {
        notes.logData(outputNote);
    } else {
        console.log(`The note with title '${argv.title}' does not exist!`);
    }
} else if (command === 'remove') {
    var isRemoved = notes.removeNote(argv.title);

    if (isRemoved) {
        console.log("The note removed succesfully!");
    } else {
        console.log(`The note with Title: '${argv.title}' does not exist!`);
    }
} else {
    console.log("Command not recognized");
}


