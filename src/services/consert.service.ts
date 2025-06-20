
import authentication from '../lib/axios/authentication';

export async function create(name: string, description: string, seat: number) {
    try {
       const response = await authentication.post(`/api/v1/concert`, {
        name,
        description,
        seat
       })
       return response.data;
    } catch (error) {
        return Promise.reject(error)
    }
}