import axios from 'axios'

const HTTP = axios.create({
    baseURL: `https://newsapi.org/v2/`,
    headers: {
        Authorization: 'Bearer 8cd9d8bbae394be5b04b953c45f57454',
        'Content-Type': 'application/json',
    },
})

export const GET = async url => {
    try {
        const { data } = await HTTP.get(url)
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
