<template>
    <v-layout>
        <SideBar :toggle="visible"/>
        <v-main>
            <MenuBar :title="title" :toggle="visible" @toggleMenu="visible = !visible"/>
            <slot></slot>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import SideBar from './SideBar.vue'
import MenuBar from './MenuBar.vue';
import { ref } from 'vue';

const visible = ref<boolean>(true)

defineProps<{
    title: string
}>()
</script>