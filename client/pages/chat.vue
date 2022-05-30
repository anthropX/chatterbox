<!-- Please remove this file from your project -->
<template>
  <main class="content">
    <section class="messages-container">
      <h4>Messages</h4>
      <ul class="messages">
        <li
          v-for="(messageObject, index) in messages"
          :key="index"
          class="message"
          :class="{ self: messageObject.isSelf }"
        >
          {{ messageObject.message }}
        </li>
      </ul>
    </section>
    <div class="forms">
      <section class="form message" @submit.prevent>
        <label for="message">Message</label>
        <div class="form-content">
          <input id="message" v-model="message" type="text" />
          <button class="send" @click="sendMessage">Send</button>
        </div>
      </section>
      <section class="form room" @submit.prevent>
        <label for="room">Room</label>
        <div class="form-content">
          <input id="room" v-model="room" type="text" />
          <button class="join" @click="joinRoom">Join</button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  mixins: [global],
  layout: 'default',
  data() {
    return {
      messages: [],
      message: '',
      room: '',
      socket: null,
    }
  },
  created() {
    this.setUpSocketConnection()
  },
  methods: {
    async setUpSocketConnection() {
      /* connect to the socket server
          1. arg: socket server URL
      */
      this.socket = io('http://localhost:3090')
      this.socket.on('broadcast', this.recieveMessage)
      await new Promise((ok) => this.socket.on('connect', ok))
      this.pushMessage('You connected with socket id: ' + this.socket.id)
    },
    recieveMessage(message) {
      this.messages.push({
        message,
        isSelf: false,
      })
    },
    sendMessage() {
      this.pushMessage(this.message)
      this.socket.emit('message', this.message)
    },
    joinRoom() {
      console.log('joining room', this.room)
    },
  },
}
</script>
<style scoped lang="scss">
.chatterbox {
  color: white;
  height: 100%;
}

section {
  padding: 0.5rem 0;
}

.content {
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  margin-top: 1rem;
}

h4 {
  margin-top: 1rem;
  padding: 0.5rem 0;
}

.messages {
  background: black;
  color: neon;
}

li {
  border: 1px black solid;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}

li.message {
  background-color: #303030;
  margin-bottom: 0.25rem;
  width: 80%;
  &.self {
    background-color: #330a1b;
    margin-left: auto;
  }
}
</style>
