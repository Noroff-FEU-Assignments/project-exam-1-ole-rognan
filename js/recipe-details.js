const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const recipeId = params.get("id");
const paramsCat = new URLSearchParams()
const recipeDetailsContainer = document.querySelector(".recipe-details-container");


const captionUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/" + recipeId;

async function getDetails(){
    const response = await fetch(captionUrl);
    const details = await response.json();
    console.log(details);
    
    createHTML(details);
}


getDetails();

function createHTML(details){

        recipeDetailsContainer.innerHTML = 
    `<div class="recipe-details-container">
    <div class="recipe-content"> 
    ${details.content.rendered}</div>
    </div>`;
    
};