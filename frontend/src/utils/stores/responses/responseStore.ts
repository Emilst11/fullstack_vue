import { defineStore } from "pinia";
import { IApiResponse } from "./IResponses";

export const useResponseStore = defineStore({
    id: 'ApiResponse',
    state: (): IApiResponse => ({
        status: null,
        message: '',
    }),
    actions: {
        setResponse(response: IApiResponse){
            this.status = response.status
            this.message = response.message
        },
        clearResponse(){
            this.status = null
            this.message = ''
        }
    }
})