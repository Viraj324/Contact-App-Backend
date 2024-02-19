const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // Your database connection logic goes 'here
        const connect = await mongoose.connect("mongodb+srv://Virajs324:Sjpv%405555@virajcluster.vsad8ay.mongodb.net/mycontacts-backend?retryWrites=true&w=majority")
        console.log("Connected to the database", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDb;

//Sjpv5555
