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

var command = process.argv[2];

if(command === 'add'){
    console.log("Note added");
} else if(command === 'list'){
     console.log("List of notes");
} else if(command === 'read'){
    console.log("Reading note");
} else if(command === 'remove'){
    console.log("Removing note");
} else{
    console.log("Command not recognized");
}