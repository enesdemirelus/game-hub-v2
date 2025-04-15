import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '91f3eb5f569c4665a4a8aae7548f7cba'
    }
})