<template>
  <div class="flex justify-content-center mt-6">
    <Card style="width: 25em" class="cardLogin flex justify-content-center">
      <template #header>
      </template>
      <template #title>
        Vamos a dar de alta un equipo
      </template>
      <template #content>
        <label for="Nombre" class="mr-3 flex justify-content-start">Nombre</label>
        <InputText  v-model="frmCrear.nombre" type="text" class="flex justify-content-start fieldEquipo" />
        <br>
        <label for="Marca" class="mr-3 flex justify-content-start">Marca</label>
        <InputText  v-model="frmCrear.marca" type="text" class="flex justify-content-start fieldEquipo" />
        <br>
        <label for="Producto" class="mr-3 flex justify-content-start">Producto</label>
        <InputText  v-model="frmCrear.producto" type="text" class="flex justify-content-start fieldEquipo" />
        <br>
        <label for="Comentarios" class="mr-3 flex justify-content-start">Comentarios</label>
        <InputText  v-model="frmCrear.comentarios" type="text" class="flex justify-content-start fieldEquipo" />
        <br>
        <label for="Ultimo" class="mr-3 flex justify-content-start">Ultimo Mantenimiento</label>
        <Calendar inputId="Ultimo" v-model="frmCrear.ultimoMantenimiento" autocomplete="off" class="fieldEquipo"/>
        <br>
        <br>
        <label for="Siguiente" class="mr-3 flex justify-content-start">Proximo Mantenimiento</label>
        <Calendar inputId="Siguiente" v-model="frmCrear.proximoMantenimiento" autocomplete="off" class="fieldEquipo"/>
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
  name: "CrearEquipo",
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
      nombre: '',
      id: 0,
      marca: '',
      producto: '',
      comentarios: '',
      ultimoMantenimiento: '',
      proximoMantenimiento: '',
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
.fieldEquipo {
  width: 100%;
  border-radius: 5px;
}
</style>