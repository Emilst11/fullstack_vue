import { defineStore } from "pinia";
import { IUnitsResponse, IUnitsStore } from "./IUnitStore";
import { handleGetUnitsService } from "../../services/unitService";

export const useUnitStore = defineStore({
    id: 'Unit',
    state: () :IUnitsStore => ({
        selected: null,
        data: []
    }),
    actions: {
        async handleGetUnit(){
            const res = await handleGetUnitsService()
            this.data = res.data
            this.selected = res.data[0]
        },
        setSelected(items: IUnitsResponse){
            this.selected = items
        }
    }
})