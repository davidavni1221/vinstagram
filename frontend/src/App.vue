<template>
  <section class="app-container container">
    <app-header />

    <router-view />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
// import { RouterLink, RouterView } from "vue-router";

export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadStorys' })
    this.$store.dispatch({ type: 'loadUsers' })
  },
  methods: {
  },
  components: {
    appHeader,

  },
}
</script>
<style>
@font-face {
    font-family: "Billabong";
    src: local("Billabong"),
    url("./assets/fonts/Billabong/FontsFree-Net-Billabong.ttf") format("truetype");
    
     
    }@font-face {
    font-family: "Segoe UI";
    src: local("Segoe UI"),
    url("./assets/fonts/Segoe UI/Segoe UI Bold.ttf") format("truetype");
    }
    </style>