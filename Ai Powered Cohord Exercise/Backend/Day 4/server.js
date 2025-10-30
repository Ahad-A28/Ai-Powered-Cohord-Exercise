// Note App
// ## ✅ How It Works
// | Method | Route            | Purpose                  |
// |--------|------------------|--------------------------|
// | GET    | `/`              | Welcome message          |
// | POST   | `/notes`         | Add a new note           |
// | GET    | `/notes`         | List all notes           |
// | DELETE | `/notes/:index`  | Delete a note by index   |
// | PATCH  | `/notes/:index`  | Update title of a note   |

const express = require("express");
const app = express();

app.use(express.json());

let note = [];

app.get("/", (req, res) => {
  res.send("Helo World ");
});

// ✅ Create a note

app.post("/notes", (req, res) => {
  note.push(req.body);
  res.json({
    message: "Note Created Sucessfull",
  });
});
// 📄 Show all notes
app.get("/notes", (req, res) => {
  res.json(note);
});

// ❌ Delete a note
 app.delete('/delete/:index',(req, res)=>{
 const {index} = req.params
 console.log(index);
 delete note[index]
 res.json({
  message:"Note is deleted Sucessfull"
 })
 })

// ✏️ Update a note
app.patch('/update/:index',(req, res)=>{
const {name}= req.body
const  {index} = req.params

note[index].name = name 

res.json({
  message:"Note is Updated Sucessfull"
 })

})
 


app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
