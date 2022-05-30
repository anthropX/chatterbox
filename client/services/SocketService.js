import { io } from 'socket.io-client'
import $store from '~/services/StoreService'
let socket = null

async function setUpSocket() {
  /* connect to the socket server
      1. arg: socket server URL
  */
  socket = io('http://localhost:3090')
  socket.on('broadcast', (message) =>
    $store().dispatch('pushMessage', message)
  )
  await new Promise((ok) => socket.on('connect', ok))
  $store().dispatch(
    'pushMessage',
    'You connected with socket id: ' + socket.id
  )
}

export default setUpSocket
