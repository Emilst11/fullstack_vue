import { Axios } from "../axios"
import { IApiResponse } from "../stores/responses/IResponses"

export const handleGetUnitsService = async (): Promise<IApiResponse> => {
    try {
        const { data } = await Axios.get('/units/get-all')
        return data
    } catch (error) {
        throw error
    }
}