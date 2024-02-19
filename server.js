const express  = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection" );
const dotenv = require("dotenv");

connectDb();
const app = express();

dotenv.config();

const port = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/contacts",require("F:/Projects/mycontacts-backend/routes/contactRoutes.js"));
app.use("/api/users",require("F:/Projects/mycontacts-backend/routes/userRoutes.js"));
app.use(errorHandler)
app.listen(port,() =>{
    console.log(`Server running on port ${port}`);
})