import axios from 'axios';

const api = axios.create({
    baseURL: 'https://restapitcc.herokuapp.com/api/v1/'
})

export default function useApi() {
    return ({

        GetSurvey: async () => {
            const response = await api.get('/perguntas')
            return response.data
        }

    })
}