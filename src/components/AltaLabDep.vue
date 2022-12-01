<template>
<div class="flex justify-content-center mt-6">
  <Card style="width: 25em" class="cardLogin">
    <template #header>
    </template>
    <template #title>
      ¿Que deseas crear?
    </template>
    <template #content>
      <div v-for="category of categories" :key="category.key" class="field-radiobutton">
        <RadioButton :inputId="category.key" name="category" :value="category.key" v-model="frmCrear.LabOrDep"  />
        <label :for="category.key">{{category.name}}</label>
      </div>
      <br>
        <label for="username" class="mr-3 flex justify-content-start">Nombre</label>
        <InputText  v-model="frmCrear.nombre" type="text" class="flex justify-content-start" />
    </template>
    <template #footer>
        <Button  @click="create" class="flex justify-content-end" icon="pi pi-plus-circle" label="Crear" style="margin-left: .5em" :disabled="frmCrear.nombre === ''" />
    </template>
  </Card>

</div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "AltaLabDep",
  setup() {
    const create = () => {
      axios.post('http://localhost:3000/LabOrDep', frmCrear.value).then((response) => {
        console.log(response)
        if (frmCrear.value.LabOrDep === 1) {
          alert('Laboratorio creado con exito!')
        } else {
          alert('Departamento creado con exito!')
        }
        setTimeout(() => {
          router.push('/Reportes')
        }, 1000)
      })
    }
    const categories = ref([
      {name: 'Laboratorio', key: 1},
      {name: 'Departamento', key: 2},
    ]);
    const frmCrear = ref({
      LabOrDep: 1,
      nombre: '',
      id: 0,
      equipos: []
    })

    onMounted(() => {
      frmCrear.value.LabOrDep = 1
      frmCrear.value.nombre = ''
      frmCrear.value.id = 0
    })

    return {
      create,
      categories,
      frmCrear,
    }
  }
}
</script>

<style scoped>
.cardLogin {
  background-color: rgba(164, 164, 141, 0.55)
}
</style>