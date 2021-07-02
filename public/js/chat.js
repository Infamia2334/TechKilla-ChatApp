const socket = io()

socket.on("message", (welcome)=>{
    console.log(welcome)
})

document.querySelector("#msg-form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const message = document.querySelector("input").value
    socket.emit("sendMessage", message)
})