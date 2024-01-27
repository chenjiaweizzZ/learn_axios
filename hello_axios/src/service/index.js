import axios from 'axios'

class CRequset {
    constructor(baseURL, timeout=10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        // return axios.request(config)
        return new Promise((resolve, reject) => {
            // axios.request(config).then(res => {
            //     resolve(res.data)
            // }).catch(err => {
            //     reject(err)
            // })

            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}


export default new CRequset("http://123.207.32.32:8000")