<template>
  <RouterView></RouterView>
  <v-layout class="w-100">
    <v-snackbar 
      v-model="visible" 
      :timeout="2000" 
      :color="getColor()"
      variant="tonal">
      {{ message }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="visible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-layout>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useResponseStore } from './utils/stores/responses/responseStore';
import { ref } from 'vue';

const store = useResponseStore()
const { status, message } = storeToRefs(useResponseStore())
const visible = ref<boolean>(false)

store.$subscribe((mutation, state) => {
  if (state.status !== null) {
    visible.value = true
  }
})

const getColor = () => {
  if(status.value == 200 || status.value == 201){
    return 'primary'
  }else{
    return 'red darken-2'
  }
}

</script>
