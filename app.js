const urlApi = 'https://picsum.photos/200/300'
const Picture = ()=>{
    fatch(urlApi).then(data=>data.json()).then((iteam=>{
        console.log(iteam)
    }))
}