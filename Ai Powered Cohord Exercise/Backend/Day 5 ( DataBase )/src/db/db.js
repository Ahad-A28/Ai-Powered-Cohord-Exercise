const { default: mongoose } = require("mongoose")

const ConnectToDb = ()=>{

mongoose.connect("mongodb+srv://ahadfsd28:AgtmCqKUXgjM1xxp@cluster0.xr9lnpn.mongodb.net/Cohort")
.then(()=>{
    console.log("Conected To DB");
})

}

module.exports = ConnectToDb;