const photoContainer = document.querySelector('.photo_container')
const urlApi = 'https://picsum.photos/v2/list'
const Picture = ()=>{
    fetch(urlApi).then(data=>data.json()).then((iteam=>{
        console.log(iteam);

        iteam.forEach(element => {
            
        const newImg = document.createElement('img')
        newImg.src = element.download_url;
        console.log(newImg)

        const newAuth = document.createElement('p')
        const Auth = newAuth.innerHTML=element.author;
        // console.log(Auth)

        const imgCard = document.createElement('div');
        imgCard.classList.add('img_card');
        imgCard.appendChild(newImg)
        imgCard.appendChild(newAuth)


        photoContainer.appendChild(imgCard);
            
        });

    }));
}

Picture();