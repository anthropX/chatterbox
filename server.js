const io = require('socket.io')(3090, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

io.on('connection', (socket) => {
  console.log(socket.id + ' joined!')
  socket.on('message', (message) => {
    console.log(socket.id + ' says ' + message)
    socket.broadcast.emit('broadcast', message)
  })
})
