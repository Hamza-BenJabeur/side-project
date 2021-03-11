import  express from 'express';
import  cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


import  chatRoutes from "./routes/chat.js";

const app=express()
app.use(cors());
app.use(bodyParser.json({extended: true }))

app.use(bodyParser.urlencoded({extended: true }))


app.use('/chats', chatRoutes);

const PORT = process.env.PORT|| 3000;

mongoose
  .connect("mongodb://localhost:27017/basic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB", err);
  });

  app.listen(PORT, () => {
    console.log("app connected on: " + PORT);
  });