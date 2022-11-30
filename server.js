const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())

const db = require("./db.js")

const jobsRoute = require('./routes/jobsRoute')
const userRoute = require('./routes/userRoute')

app.get("/", (req, res)=>{
    res.json("This My Find Job App")
})

app.use(express.json())

app.use("/api/jobs", jobsRoute)
app.use("/api/users", userRoute)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Started on Port ${port}`))