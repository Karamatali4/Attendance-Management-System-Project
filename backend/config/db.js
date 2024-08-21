const mongoose = require('mongoose');

const URL = `mongodb+srv://${process.env.USERNAMEPASSWORD}@cluster0.qcpbsjv.mongodb.net/${process.env.MYDATABASE}?retryWrites=true&w=majority&appName=Cluster0`;


const connectedDB = async() => {

    try {
        await mongoose.connect(URL);
        console.log("connection successful to DB");
      } catch (error) {
        console.error("database connection fail");
        process.exit(0);
      }
}

module.exports = connectedDB;
