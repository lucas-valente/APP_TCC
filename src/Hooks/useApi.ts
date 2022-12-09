import axios from 'axios';

import { TFormDataProps } from '../@types/types';

export default function useApi() {

    const api = axios.create({
        baseURL: 'https://restapitcc.herokuapp.com/api/v1/'
    })

    const username = 'lucas.valente'
    const password = 'YTuNWNSN4GQ2xdp'

    return ({

        GetPosts: async () => {
            const response = await api.get('/posts', {
                auth: {
                    username,
                    password
                }
            })
            return response.data
        },
        PostSurvey: async (data: TFormDataProps) => {
            const response = await api.post('/respostas', data, {
                auth: {
                    username,
                    password
                }
            })
            return response.status
        }

    })
}