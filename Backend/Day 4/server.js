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
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete note[index];
  res.json({
    message: "Note Deleted Sucessfull",
  });
});

// ✏️ Update a note

app.patch('/notes/:index', (req,res)=>{
const index = req.params.index
const {name} = req.body

note[index].name = name
res.json({
  message: "Note Updated Sucessfull",
});

})

app.listen("3000", () => {
  console.log("Server is running on port 3000");
});
