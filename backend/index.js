const express = require('express')
const app = express()
// const port = 4000
const PORT=process.env.PORT
const mongoDB = require("./db")
mongoDB();
require("dotenv").config();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!  Hi i am Aman Kumar ')
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(PORT , () => {
  console.log(`Example app listening on port `)
})

