const express = require("express")
const { chats} = require('./data.js')
const app = express()
const dotenv = require('dotenv')
const connectDB = require("./config/db.js")
const userRoutes = require("./routes/userRoutes.js")
const {notFound, errorHandler} = require("./middleware/errorMiddleware.js")

dotenv.config()
connectDB()

app.use(express.json())

app.use("/api/user", userRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(5000,console.log('server start on port 5000 '))