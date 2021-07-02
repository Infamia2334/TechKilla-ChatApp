const socket = io()

const $messages = document.querySelector("#messages")

const messageTemplate = document.querySelector("#message-template").innerHTML

socket.on("message", (welcome)=>{
    console.log(welcome)
    const html = Mustache.render(messageTemplate, {
        message: welcome
    })
    $messages.insertAdjacentHTML("beforeend", html)
})

document.querySelector("#msg-form").addEventListener("submit", (e)=>{
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit("sendMessage", message)
})