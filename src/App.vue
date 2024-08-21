<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Back</button>
  <button @click="forward">Forward</button>
  <router-view />
</template>
<script>
  import { useRouter } from 'vue-router';
  export default {
    setup() {
      const router = useRouter();
      function redirect() {
        router.push({ name: 'home' })
      }
      function back() {
        router.go(-1)
      }
      function forward() {
        router.go(1)
      }
      return {
        redirect,
        back,
        forward
      }
    }
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    border-radius: 4px;
    text-decoration: none;
  }

  nav a.router-link-exact-active {
    color: white;
    background-color: crimson;
  }
</style>