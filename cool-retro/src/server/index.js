const express = require('express')
const app = express()
const socket = require('socket.io')
const port = 5000

// app.use(express.static('public'))

const server = app.listen(port, function () {
  console.log(`running at port ${port}`)
})
// socket Setup
const io = socket(server)
io.on('connection', function (socket) {
  console.log(`user connected: ${socket.id}`)

  socket.on('disconnect', function () {
    console.log(`user ${socket.id}, disconnected`)
  })
})
