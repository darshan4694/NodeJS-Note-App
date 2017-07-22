var addNote = (title, body) => {
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