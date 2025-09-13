const gelery = document.querySelector('.photo_container')
const apiUrl= 'https://picsum.photos/v2/list';
function getPhoto(){
    fetch(apiUrl)
    .then(data => data.json())
    .then(iteam=>{
        iteam.forEach(element => {
            const ImgCard = document.createElement('div')
            ImgCard.classList.add('img_card')

            const newPic = document.createElement('img')
            newPic.src=  element.download_url;

            const NewAuthor = document.createElement('p')
            NewAuthor.innerHTML='Author : '+ element.author
            
            gelery.appendChild(ImgCard)
            ImgCard.appendChild(newPic);
            ImgCard.appendChild(NewAuthor);
        });
})
}
getPhoto();