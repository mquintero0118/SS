<template>
  <div class="flex justify-content-center mt-8">
    <Card style="width: 25em" class="cardLogin">
      <template #header>
      </template>
      <template #title>
        Vamos a entrar a tu cuenta!
      </template>
      <template #subtitle>
        Porfavor llena estos datos
      </template>
      <template #content>
        <label for="username">Nombre de usuario</label> <br>
        <InputText  v-model="frmRegister.username" type="text" class="mt-2" />
        <br>
        <br>
        <label for="username">Contraseña</label> <br>
        <InputText v-model="frmRegister.password" type="password" class="mt-2" />
      </template>
      <template #footer>
        <Button icon="pi pi-user-plus" label="No tengo cuenta" class="p-button-secondary"  />
        <Button @click="login" icon="pi pi-users" label="Iniciar sesion" style="margin-left: .5em" :disabled="frmRegister.password === '' || frmRegister.username === ''" />

      </template>
    </Card>
  </div>

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import {onMounted, ref} from "vue";
import users from '/users.json'
import store from "@/store";
import router from "@/router";
// import axios from "axios";

export default {
  name: "Login",
  setup() {
    let usuarios = users
    const frmRegister = ref({
      username: "",
      password: "",
      id: 0,
    })

    const login = () => {
      let existe = false
      usuarios.users.forEach((element) => {
        if (element.username === frmRegister.value.username && element.password === frmRegister.value.password) {
          console.log(element)
          frmRegister.value.username = element.username
          frmRegister.value.password = element.password
          frmRegister.value.id = element.id
          alert('Sesion iniciada con exito!')
          existe = true
        }
      })
      if (existe) {
        store.commit('setUser', frmRegister.value)
        setTimeout(() => {
          router.push('/Reportes')
        })
      } else {
        alert('Ya existe el usuario')
      }
    }

    onMounted(() => {
      frmRegister.value.username = ""
      frmRegister.value.password = ""
    })
    return {
      frmRegister,
      login,
      usuarios,
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 80%;
}

.cardLogin {
  background-color: rgba(164, 164, 141, 0.55)
}

</style>