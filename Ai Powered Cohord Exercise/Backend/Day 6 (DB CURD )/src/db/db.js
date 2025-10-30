const mongoose = require('mongoose')


function ConnectToDB(){

 
    mongoose.connect('mongodb+srv://ahadfsd28:AgtmCqKUXgjM1xxp@cluster0.xr9lnpn.mongodb.net/Note')
    .then(()=>{
        console.log('Connected To DB');
    })
 
}



module.exports = ConnectToDB;