<template>
  <div class="flex justify-content-center mt-6">
    <Card style="width: 25em" class="cardLogin flex justify-content-center">
      <template #header>
      </template>
      <template #title>
        Vamos a dar de alta un equipo
      </template>
      <template #content>
        <Dropdown v-model="frmCrear.idLabOrDep" :options="LabOrDep.LabOrDep" optionLabel="nombre" optionValue="id" placeholder="Selecciona Laboratorio o Departamento" class="fieldEquipo" />
        <br>
        <br>
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
        <Button  @click="create" class="flex justify-content-end" icon="pi pi-plus-circle" label="Crear" style="margin-left: .5em"
        :disabled="frmCrear.idLabOrDep === 0 || frmCrear.nombre === '' || frmCrear.marca === '' || frmCrear.producto === '' || frmCrear.comentarios === '' || frmCrear.ultimoMantenimiento === '' || frmCrear.proximoMantenimiento === ''"/>
      </template>
    </Card>

  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
// import router from "@/router";
import users from "../../users.json";
import router from "@/router";

export default {
  name: "CrearEquipo",
  setup() {
    let LabOrDep = users
    const create = () => {
      let index = LabOrDep.LabOrDep.findIndex(x => x.id == frmCrear.value.idLabOrDep)
      let obj = JSON.parse(JSON.stringify(LabOrDep.LabOrDep[index]))
      obj.equipos.push(frmCrear.value)
      let longitud = obj.equipos.length - 1
      if (longitud <= 0) {
        obj.equipos.id = 1
      } else {
        let index2 = obj.equipos.length - 1
        obj.equipos[index2].id = longitud + 1
      }
      console.log(index)
      axios.patch(`http://localhost:3000/LabOrDep/${frmCrear.value.idLabOrDep}`, obj).then((response) => {
        console.log(response)
      })
      alert('Equipo registrado con exito')
      setTimeout(() => {
        router.push('/Reportes')
      }, 1000)
      /*axios.post('http://localhost:3000/LabOrDep', frmCrear.value).then((response) => {
        console.log(response)
        if (frmCrear.value.LabOrDep === 1) {
          alert('Laboratorio creado con exito!')
        } else {
          alert('Departamento creado con exito!')
        }
        setTimeout(() => {
          router.push('/Reportes')
        }, 1000)
      })*/
    }
    const categories = ref([
      {name: 'Laboratorio', key: 1},
      {name: 'Departamento', key: 2},
    ]);
    const frmCrear = ref({
      idLabOrDep: 0,
      nombre: '',
      id: 0,
      marca: '',
      producto: '',
      comentarios: '',
      ultimoMantenimiento: '',
      proximoMantenimiento: '',
    })

    onMounted(() => {
      frmCrear.value.nombre = ''
      frmCrear.value.id = 0
    })

    return {
      LabOrDep,
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