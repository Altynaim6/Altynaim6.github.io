const imgElement = document.querySelector("img");

const img1URL = "img/sea.png";
const img2URL = "img/Altynai.png";

function changePhoto(event){
    let current = imgElement.getAttribute("src");
    if(current == img1URL){
        imgElement.setAttribute("src",img2URL);
    } else {
        imgElement.setAttribute("src", img1URL)
    }
}

imgElement.onclick = changePhoto;


