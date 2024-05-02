<template>
    <v-toolbar :elevation="8" class="px-2 py-3" style="background-color: white;">
        <v-app-bar-nav-icon @click="onToggleMenu"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ props.title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-select 
        autocomplete
        v-model="selected"
        label="Unit" 
        :items="data"
        variant="outlined" 
        item-title="name"
        item-value="id"
        return-object
        @update:model-value="onSelected"
        hide-details>
        </v-select>
    </v-toolbar>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUnitStore } from '../../utils/stores/units/unitStore';

const { data, selected } =  storeToRefs(useUnitStore())
const { handleGetUnit, setSelected } = useUnitStore()
const props = defineProps<{
    title: string,
    toggle: boolean
}>()

const emit = defineEmits(["toggleMenu"])

const onToggleMenu = () =>{
    emit('toggleMenu')
}

const onSelected = (value:any) => {
    setSelected(value)
}

handleGetUnit()
</script>