const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const recipeId = params.get("id");
const paramsCat = new URLSearchParams()
const recipeDetailsContainer = document.querySelector(".recipe-details-container");
const modal = document.getElementById("myModal");
const blockImage = document.querySelectorAll(".wp-block-image img");

console.log(recipeDetailsContainer.childNodes[0].ownerDocument.images)

const captionUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/" + recipeId;



async function getDetails(){
    const response = await fetch(captionUrl);
    const details = await response.json();
    
    createHTML(details);
    
}

const singleImage = recipeDetailsContainer.childNodes[0].ownerDocument.images[0].ownerDocument.images;

console.log(recipeDetailsContainer.childNodes[0].ownerDocument)

const myArray = Array.from(singleImage[0])

console.log(myArray)

getDetails();

function createHTML(details){

recipeDetailsContainer.innerHTML = 
    `
    <div class="recipe-content"> 
    ${details.content.rendered}
    </div>`;

    

};


