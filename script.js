const waifuImages = document.getElementById('waifuImages');

getWaifuImage();

function getWaifuImage() {
    fetch('https://api.waifu.im/search/?excluded_files=4401')
    .then((response) => response.json())
    .then((data) => {
        waifuImages.innerHTML = `
            <img src="${data.images[0].url}">
            <p>Source: <a href="${data.images[0].source}">${data.images[0].source}</a></p>
            <button class="glow-on-hover" onclick="getWaifuImage()">Get Waifu Image</button>
        `;
    })
    .catch(error => console.log(error))
}