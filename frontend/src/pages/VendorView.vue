<template>
    <DashBoard title="Vendor">
        <v-data-table-server :headers="headers" :items="data" :items-length="meta?.totalData || 0"
            v-model:items-per-page="pagination.pageSize" @update:options="loadItems">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="pa-5 text-h5">List Vendor</v-toolbar-title>
                    <v-dialog v-model="dialog" max-width="600">
                        <template v-slot:activator="{ props }">
                            <v-btn class="mb-2" color="primary" dark v-bind="props">
                                New Item
                            </v-btn>
                        </template>
                        <v-card title="Add New Vendor">
                            <v-card-text>
                                <v-form @submit.prevent="handleSubmit">
                                    <v-text-field v-model="form.vendorId" label="ID Vendor" required variant="outlined">
                                    </v-text-field>
                                    <v-text-field v-model="form.vendorName" label="Vendor Name" required
                                        variant="outlined">
                                    </v-text-field>
                                    <v-text-field v-model="form.address" label="Address" required variant="outlined">
                                    </v-text-field>
                                    <v-divider></v-divider>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="primary" type="submit" text="Submit" variant="tonal"
                                            @click="dialog = false"></v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
        </v-data-table-server>
    </DashBoard>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DashBoard from '../components/layouts/DashBoard.vue';
import { useVendorStore } from '../utils/stores/vendor/vendorStore';
import { ref, watch } from 'vue';
import { IMeta } from '../utils/stores/responses/IResponses';
import { ILoadItems } from '../utils/stores/vendor/IVendorStore';
import { useUnitStore } from '../utils/stores/units/unitStore';

const { data, meta } = storeToRefs(useVendorStore())
const { handleGetVendor, handlePostNewVendor } = useVendorStore()
const { selected } = storeToRefs(useUnitStore())

const dialog = ref<boolean>(false)

const pagination = ref<IMeta>({
    totalPages: 0,
    currentPage: 1,
    pageSize: 10,
    totalData: 0
})

const form = ref({
    vendorId: '',
    vendorName: '',
    address: ''
})

const headers = [
    {
        title: 'Id',
        key: 'vendorId',
    },
    {
        title: 'Name',
        key: 'vendorName',
    },
    {
        title: 'Address',
        key: 'address',
    }
]

const loadItems = async ({ page, itemsPerPage }: ILoadItems) => {
    handleGetVendor({
        id: selected.value?.id || 1,
        page: page,
        pageSize: itemsPerPage
    })
}

const handleSubmit = async () => {
    await handlePostNewVendor({
        unitId: selected.value?.id,
        ...form.value
    })
    form.value = {
        vendorId: '',
        vendorName: '',
        address: ''
    }
}

watch(selected, () => {
    handleGetVendor({
        id: selected.value?.id || 1,
        page: pagination.value.currentPage,
        pageSize: pagination.value.pageSize
    })
})

</script>