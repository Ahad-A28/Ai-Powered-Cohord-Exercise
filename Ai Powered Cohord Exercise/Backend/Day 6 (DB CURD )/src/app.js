const express =  require('express')
const app = express()
const ConnectToDB = require('./db/db')
const noteModel = require('./models/note.model')
ConnectToDB()
app.use(express.json())
// All notes
app.get('/',async (req , res )=>{

   const AllNotes = await noteModel.find()
res.json({
    Notes:AllNotes
})
})
// Create Note
app.post('/note', async (req , res)=>{
const {title , Content} = req.body

console.log("Title"+" " +title, "Content"+" " + Content);
await noteModel.create({
    title, 
    Content
})

res.json({
    message:"Note Created Sucessfully"
})


})

// Update Note
app.patch('/note/:id', async (req , res)=>{
const Noteid = req.params.id
const {title, Content} = req.body


await noteModel.findOneAndUpdate({
    _id : Noteid,
    
    },{
        title:title,
        Content:Content
    })

res.json({
    message:"Note Updated Sucessfully"
})

})
// Delete Note

app.delete ('/note/:id', async (req, res)=>{
    const Noteid = req.params.id

    await noteModel.findByIdAndDelete(Noteid)
    res.json({
        message:"Note Deleted Sucessfully"
    })

})

 

module.exports = app