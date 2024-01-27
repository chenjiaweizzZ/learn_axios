// axios.request({
//     url: "http://123.207.32.32:8000/home/multidata",
//     method: 'get'
// }).then(res => {
//     console.log('res',res)
// })

// axios.get("http://music.163.com/api/playlist/detail?id=3778678").then(res => {
//     console.log('res',res)
// })

// axios.get("http://music.163.com/api/playlist/detail",{
//     params: {
//         id: 3778678
//     }
// }).then(res => {
//     console.log('res',res)
// })

// axios.post("http://123.207.32.32:1888/02_param/postjson",{
//     username: 'coderwhy',
//     password: '123456'
// }).then(res => {
//     console.log(res)
// })

const baseUrl = "http://123.207.32.32:8000"
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 10000
axios.defaults.headers = {}
axios.get("/home/multidata").then(res => {
    console.log(res)
})