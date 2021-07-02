const path = require("path")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)




const publicPath = path.join(__dirname, "../public")
const port = process.env.PORT || 3000

app.use(express.static(publicPath))




io.on("connection", (socket)=> {
    console.log("New WBS connection")

    // socket.emit("countUpdate", count)

    // socket.on("counter", ()=>{
    //     count++
    //     io.emit("countUpdate", count)
    // })
    socket.emit("message", "Welcome!")

    socket.on("sendMessage", (message)=>{
        io.emit("message", message)
    })
})

server.listen(port, ()=> console.log(`App running on server on port ${port}`))