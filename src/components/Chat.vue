<template>
    <div class="container mt-5">
    <div class="card">
        <div class="card-block">
            <div class="list">          
                <div v-for="item in messages" class="alert message alert-info">
                    <strong>{{item.author}}</strong> {{item.content}} ({{formatDate(item.time)}})
                </div>
            </div>
            <div class="input-group">
                <input type="text"  v-model="currentMessage" class="form-control" placeholder="Enter message" >
                </input>
                <span class="input-group-btn">
                    <button class="btn btn-secondary" v-on:click="sentMessage"
                        type="button">Send</button>
                </span>
            </div>
        </div>
    </div>
</div >
</template>

<script>
import io from 'socket.io-client'
import moment from 'moment'

export default {
  name: 'chat',
  props: {
    login: ''
  },
  data () {
    return {
      currentMessage: '',
      messages: [],
      socket: null
    }
  },
  mounted: function () {
    this.socket = io.connect('http://chat.artifex.usermd.net:3017')
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.socket.on('receiveChatMessage', (data) => {
      this.messages.push(data)
    })
    this.socket.on('disconnect', () => {
      console.log('disconnected')
    })
  },
  methods: {
    sentMessage: function () {
      const message = {
        content: this.currentMessage,
        author: this.login,
        time: Date.now()
      }
      this.currentMessage = ''
      this.socket.emit('sendChatMessage', message)
    },
    formatDate: function (time) {
      console.log(time)
      return moment(new Date(time)).format('HH:mm:ss')
    }
  }
}
</script>


<style scoped>

</style>
