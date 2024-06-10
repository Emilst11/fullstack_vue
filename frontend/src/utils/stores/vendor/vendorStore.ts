import { defineStore } from "pinia";
import { handleDeleteVendorService, handleGetVendorService, handlePostVendorService, handleUpdateVendorService } from "../../services/vendorService";
import { IVendorDeletePayload, IVendorPayload, IVendorPostPayload, IVendorStore } from "./IVendorStore";
import { useUnitStore } from "../units/unitStore";
import { useResponseStore } from "../responses/responseStore";

export const useVendorStore = defineStore({
    id: 'Vendor',
    state: () :IVendorStore => ({
        data: [],
        meta: undefined
    }),
    getters: {
        getUnitId: () => {

        }
    },
    actions: {
        async handleGetVendor(payload: IVendorPayload){
            const res = await handleGetVendorService(payload)
            this.data = res.data
            this.meta = res.meta
        },
        async handlePostNewVendor(payload: IVendorPostPayload){
            const { selected } = useUnitStore()
            const response = useResponseStore()
            const res = await handlePostVendorService(payload)

            response.setResponse(res)

            await this.handleGetVendor({
                id: selected?.id || 1,
                page: this.meta?.currentPage || 1,
                pageSize: this.meta?.pageSize || 10
            })
            
            setTimeout(() => {
                response.clearResponse()
            }, 2500);
        },
        async handleDelete(payload: IVendorDeletePayload){
            const { selected } = useUnitStore()
            const response = useResponseStore()
            const res = await handleDeleteVendorService(payload)

            response.setResponse(res)

            await this.handleGetVendor({
                id: selected?.id || 1,
                page: this.meta?.currentPage || 1,
                pageSize: this.meta?.pageSize || 10
            })

            setTimeout(() => {
                response.clearResponse()
            }, 2500);
        },
        async handleUpdate(payload: IVendorPostPayload){
            const { selected } = useUnitStore()
            const response = useResponseStore()
            const res = await handleUpdateVendorService(payload)

            response.setResponse(res)

            await this.handleGetVendor({
                id: selected?.id || 1,
                page: this.meta?.currentPage || 1,
                pageSize: this.meta?.pageSize || 10
            })

            setTimeout(() => {
                response.clearResponse()
            }, 2500);
        }
    }
})