const path = require("path")
const http = require("http")
const express = require("express")
const socket = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socket(server)




const publicPath = path.join(__dirname, "../public")
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

io.on("connection", ()=> {console.log("New WBS connection")})

server.listen(port, ()=> console.log(`App running on server on port ${port}`))