const express = require('express')

const app = express()
const port = process.env.PORT || 8000

app.use(express.static('public'))



app.use(express.json())
const server = app.listen(port,
    () => {
        console.log(`Example app listening on ${port}!`)
    })

let io = require('socket.io')(server)

io.on('connection', (socket) => {
    // console.log(`New connection: ${socket.id}`)
    // Recieve event
    socket.on('comment', (data) => {
        data.time = Date()
        socket.broadcast.emit('comment', data)
    })


})