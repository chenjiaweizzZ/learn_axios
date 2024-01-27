const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 6000,
    headers: {}
})

instance1.get("/home/multidata").then(res => {
    console.log(res)
})
