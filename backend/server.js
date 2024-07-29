const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes")
const colors=require("colors");
const {notFound,errorHandler}=require('./middleware/errorMiddleware')



dotenv.config();
connectDB();
const app=express();
app.use(express.json());

app.get('/',(req,res)=>(
    res.send("Api is running cool")
));
app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);



    const PORT = process.env.PORT || 5000;
    app.listen(`${PORT}`, console.log(`Server is running on port ${PORT}`.yellow.bold));