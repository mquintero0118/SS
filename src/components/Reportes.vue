<template>
  <div class="flex justify-content-center mt-6">
    <Card style="width: 25em" class="cardLogin">
      <template #title>
        Escoge que computadoras quieres ver
      </template>
      <template #content>
        <Dropdown v-model="labOrdep" :options="reportes.LabOrDep" option-label="nombre" @change="searchIndex" optionValue="id" placeholder="Selecciona Laboratorio o Departamento" class="fieldEquipo"></Dropdown>
      </template>
    </Card>
  </div>
  <br>
<div class="flex justify-content-center mt-6">
  <DataTable :value="reportes.LabOrDep[elIndex].equipos" v-if="labOrdep !== -1" style="width: 60em">
    <Column field="nombre" header="Nombre"/>
    <Column field="marca" header="Marca"/>
    <Column field="producto" header="Producto"/>
    <Column field="comentarios" header="Comentarios"/>
    <Column field="ultimoMantenimiento" header="Ultimo Mantenimiento" sortable>
      <template #body="slotProps">
        {{slotProps.data.ultimoMantenimiento.slice(2, 10)}}
      </template>
    </Column>
    <Column field="proximoMantenimiento" header="Proximo Mantenimiento" sortable >
      <template #body="slotProps">
        {{slotProps.data.proximoMantenimiento.slice(2, 10)}}
      </template>
    </Column>

  </DataTable>
</div>
</template>

<script>
import users from "../../users.json";
import {ref} from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reportes",
  setup() {
    const elIndex = ref(-1);
    const labOrdep = ref(-1);
    let reportes = users
    const searchIndex = () => {
      elIndex.value = reportes.LabOrDep.findIndex(x => x.id === labOrdep.value)
    }
    return {
      elIndex,
      labOrdep,
      searchIndex,
      reportes,
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