<template>
  <ion-page>
     <ion-header>
       <ion-toolbar class="toolbar-md-primary">
         <ion-title>HomePage</ion-title>
       </ion-toolbar>
     </ion-header>
     <ion-content class="content">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
