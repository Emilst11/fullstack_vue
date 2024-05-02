<template>
    <v-navigation-drawer v-model="$props.toggle" permanent>
        <v-list>
            <v-list-item 
              v-for="(items, index) in navigation" 
              :key="index" 
              :prepend-icon="items.icons" 
              :title="items.title"
              :to="items.link"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block class="bg-deep-purple" @click="handleLogout">
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
</template>
<script setup lang="ts">
import Cookies from "js-cookie";
import { useRouter } from "vue-router";

const router = useRouter()

const navigation = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icons: 'mdi-view-dashboard'
  },
  {
    title: 'Vendor',
    link: '/dashboard/vendor',
    icons: 'mdi-account-box'
  }
]

const handleLogout = () => {
  Cookies.remove('token')
  router.push('/')
}

defineProps<{
  toggle: boolean
}>()

</script>