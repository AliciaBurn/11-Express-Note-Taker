const fs = require("fs")
const path = require("path");
const uuidv1 = require('uuid/v1');

var noteData;

module.exports = function (app) {
    fs.readFile("db.json", "utf8", function (err, data) {
        if (err) throw err;
        noteData = JSON.parse(data);
    })

    app.get("/api/notes", function (req, res) {
        // console.log(noteData);
        res.json(noteData);
    });


    app.post("/api/notes", function (req, res) {
        // console.log("test");
        const data = req.body;
        data.id = uuidv1();
        var newNote = req.body;
        noteData.push(newNote);
        let parsedata = JSON.stringify(noteData)
        fs.writeFile(path.join('db.json'), parsedata, (err) => {
            if (err) throw err;
        })
        // console.log(noteData);
        res.json(noteData);
    });

    app.delete("/api/notes/:id", async (req, res) => {
        fs.readFile(path.join(__dirname, "../db.json"), (err, data) => {
            if (err) throw err;
            
            let notesArr = (JSON.parse(data));
            let newNotesArr = []
            for (i = 0; i < notesArr.length; i++) {
                if (notesArr[i].id != req.params.id) {
                    newNotesArr.push(notesArr[i]);
                }
            }
            // console.log(newNotesArr);
            let notesString = JSON.stringify(newNotesArr);
            // console.log(notesString);
            fs.writeFileSync(path.join(__dirname, "../db.json"), notesString)
        })
        var deleteNote = req.params.id;
        // console.log(deleteNote)
        for (i = 0; i < noteData.length; i++) {
            // console.log(noteData[i])
            if (deleteNote === noteData[i].title) {
                noteData.splice(i, 1)
            };
        };
        let parsedata = JSON.stringify(noteData)
        // deleted __dirname from path.join
        fs.writeFile(path.join('../db.json'), parsedata, (err) => {
           if (err) throw err;
       })
        console.log(noteData)
        res.json(noteData)
    })}