<template>
  <div class="flex justify-content-center mt-8">
    <Card style="width: 25em" class="cardLogin">
      <template #header>
      </template>
      <template #title>
        Vamos a crear tu cuenta!
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
        <Button icon="pi pi-user-plus" label="Ya tengo cuenta" class="p-button-secondary"  />
        <Button @click="register" icon="pi pi-users" label="Crear cuenta" style="margin-left: .5em" :disabled="frmRegister.password === '' || frmRegister.username === ''" />
      </template>
    </Card>
  </div>

</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import {onMounted, ref} from "vue";
import users from '/users.json'
import axios from "axios";

export default {
  name: "Login",
  setup() {
    let usuarios = users
    const frmRegister = ref({
      username: "",
      password: "",
      id: 0,
    })

    const register = () => {
      let existe = false
      let lastElement = usuarios.users.length - 1
      usuarios.users.forEach((element) => {
        if (element.username === frmRegister.value.username && element.password === frmRegister.value.password) {
          existe = true
        }
      })
      if (!existe) {
        frmRegister.value.id = lastElement.id + 1
        axios.post('http://localhost:3000/users', frmRegister.value).then((response) => {
          console.log(response)
          alert('Usuario creado con exito!')
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
      register,
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