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

    //Emitting to each client
    socket.emit("message", "Welcome!, Please Scroll to see new chat messages")  

    //Emitting to all clients except new(current) client
    socket.broadcast.emit("message", "A new user has joined the chat!")     


    socket.on("sendMessage", (message)=>{
        io.emit("message", message)
    })

    //Handling when client tab closes 
    socket.on("disconnect", ()=>{
        io.emit("message", "A user has left")
    })
})

server.listen(port, ()=> console.log(`App running on server on port ${port}`))