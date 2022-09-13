const recipePostsUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/?_embed";
const recipesContainer = document.querySelector(".recipes-container");
const showMoreRecipes = document.querySelector(".view-more-recipes");

async function fetchPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    
    posts.forEach(function(post){
        recipesContainer.innerHTML += 
        ` <a class="click-post" href="recipe-details.html?id=${post.id}">
        <div class="single-recipe">
        <div class="post-title"><h3>${post.title.rendered}</h3></div>
        <div class="caption"><p>${post._embedded['wp:featuredmedia']['0'].caption.rendered}</p></div>
        <div class="post-image"><img src="${post._embedded['wp:featuredmedia']['0'].source_url}"></div>
        <div class="see-recipe-button"><h4>See Recipe</h4></div>
        </div></a>
       `; 

    })
   }

fetchPosts(recipePostsUrl);






showMoreRecipes.addEventListener("click", () => {

    recipesContainer.innerHTML = "";

    let newUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/?per_page=20&_embed";

    
    

    window.scrollTo(0, document.body.scrollHeight);

    fetchPosts(newUrl);
})

