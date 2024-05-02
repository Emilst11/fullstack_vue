import { Axios } from "../axios"
import { IApiResponse } from "../stores/responses/IResponses"
import { IVendorPayload, IVendorPostPayload } from "../stores/vendor/IVendorStore"

export const handleGetVendorService = async ({ id, page, pageSize }: IVendorPayload): Promise<IApiResponse> => {
    try {
        const { data } = await Axios.get(`/vendors/get-all?id=${id}&page=${page}&pageSize=${pageSize}`)
        return data
    } catch (error: any) {
        return error.response.data
    }
}

export const handlePostVendorService = async(payload: IVendorPostPayload): Promise<IApiResponse> => {
    try {
        const { data } = await Axios.post('/vendors', payload)
        return data
    } catch (error: any) {
        return error.response.data
    }
}