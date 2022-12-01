<template>
  <Toolbar class="nav">
    <template #start>
      <Button v-if="id === 0" label="Iniciar sesion" icon="pi pi-user" class="mr-2" @click="route(1)"/>
      <Button v-if="id === 0" label="Registrarse" icon="pi pi-plus"  class="p-button-success" @click="route(2)"/>
    </template>

    <template #end>
      <Button v-if="id !== 0" :label="username" icon="pi pi-user" class="p-button-rounded p-button-secondary mr-2" />
      <Button v-if="id !== 0" @click="closeSesion" icon="pi pi-times" class="p-button-danger p-button-rounded" label="Cerrar sesion" />
    </template>
  </Toolbar>
<!--  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>-->
  <router-view/>
</template>

<script>
import router from "@/router";
import {mapState} from "vuex";
import store from "@/store";

export default {
  setup() {
    const closeSesion = () => {
      store.commit('logOut')
      router.push('/')
    }
    const route = (type) => {
      if (type === 1) {
        router.push('/')
      }
      if (type === 2) {
        router.push('/Register')
      }

    }

    return {
      closeSesion,
      route,
    }
  },
  computed: {
    ...mapState(['username', 'password', 'id'])
  }
}


</script>

<style>

.nav {
  background: rgba(79, 15, 28, 0.9) !important;
  color: rgba(79, 15, 28, 0.9) !important;
  border: rgba(79, 15, 28, 0.9) !important;
  border-radius: 6px !important;
  margin-left: 15% !important;
  margin-right: 15% !important;
}
body{
  background-color: #d2d2c9;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  color: #a79086
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
