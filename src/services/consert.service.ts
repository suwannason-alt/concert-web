
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

export async function getConsert() {
    try {
        const response = await authentication.get(`/api/v1/concert`)
        return response.data
    } catch (error) {
        return Promise.reject(error)
    }
}

export async function reserveConsert(uuid: string) {
    try {
        await authentication.get(`/api/v1/concert/reserve/${uuid}`)

    } catch (error) {
        return Promise.reject(error)
    }
}

export async function cancelConsert(uuid: string) {
    try {
        await authentication.get(`/api/v1/concert/cancel/${uuid}`)

    } catch (error) {
        return Promise.reject(error)
    }
}

export async function getHistory() {
    try {
        const response = await authentication.get(`/api/v1/concert/history`);
        return response.data;
    } catch (error) {
        return Promise.reject(error)
    }
}

export async function deleteConcert(uuid: string) {
    try {
        await authentication.delete(`/api/v1/concert/${uuid}`)
    } catch (error) {
        return Promise.reject(error)
    }
}