const asccesKey= "QblIDC_Evm8_F0c_KDF0jYSImxWcdHLCpahzaLEEjoo";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let Keyword = "";
let page = 1;

async function searchImages(){
    Keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${asccesKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const result = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})