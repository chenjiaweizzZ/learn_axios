axios.interceptors.request.use((config) => {
    //开始动画
    console.log(config)
    config.headers['token'] = "cjw12138"
    return config
},(error) => {
    return error
})

axios.interceptors.response.use((res) => {
    //结束动画
    return res.data
},(error) => {
    return error
})

axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    console.log(res)
})