const mongoose = require('mongoose')


function ConnectToDb(){
    mongoose.connect('mongodb+srv://ahadfsd28:AgtmCqKUXgjM1xxp@cluster0.xr9lnpn.mongodb.net/Moodyplayer').then(()=>{
        console.log('Contected to Db');
    })
}
module.exports = ConnectToDb;
