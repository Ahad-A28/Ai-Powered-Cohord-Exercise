const app = require("./src/app");
const ConnectToDb = require('./db/db')
 
ConnectToDb()

app.listen('3000', ()=> console.log('Server is Running on port 3000'))