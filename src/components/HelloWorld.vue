<template>
  <div class="ion-padding">
    <ion-list>
      <ion-list-header lines="inset">
        <ion-label>
          Tickets
        </ion-label>
      </ion-list-header>
      <ion-item v-for="t in tickets" :key="'ticket-' + t.id">
        <ion-text>
          <span>#{{ t.id }}</span>
          <span>{{ t.name }}</span>
        </ion-text>
        <ion-badge color="primary" slot="end">
          {{t.messages_count}}
        </ion-badge>
      </ion-item>
      <ion-item slot="end">
        <ion-button @click="loadMore">
          <ion-icon name="add-circle"></ion-icon>
        </ion-button>
      </ion-item>
      <div class="ion-padding custom-skeleton" v-if="tickets.length == 0">
        <ion-skeleton-text animated></ion-skeleton-text>
      </div>
    </ion-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tickets: []
    }
  },
  async mounted () {
    await this.load()
  },
  methods: {
    async load () {
      let result = await axios.get('http://dmv.test/api/debug/tickets')
      if (result) {
        window.console.log(result.data.tickets)
        this.$set(this.$data, 'tickets', result.data.tickets)
      }
    },
    async loadMore () {
      let result = await axios.get('http://dmv.test/api/debug/tickets?more=true')
      if (result) {
        window.console.log(result.data.tickets)
        result.data.tickets.forEach(ticket => {
          this.tickets.push(ticket)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
