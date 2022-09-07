
const postsUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/" + "?per_page=4&_embed";

const carouselContainer = document.querySelector(".grid-container");

async function fetchPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    posts.forEach(function(post){
        carouselContainer.innerHTML += `
        <div class="carousel-post-container">
        <a class="click-post" href="recipe-details.html?id=${post.id}"><div class="carousel-post">
        <div class="post-title"><h3>${post.title.rendered}</h3></div>
        <div class="caption"><p>${post._embedded['wp:featuredmedia']['0'].caption.rendered}</p></div>
        <div class="post-image"><img src="${post._embedded['wp:featuredmedia']['0'].source_url}"></div>
        <div class="see-recipe-button"> <h4>See Recipe</h4></div>
        </div></a>
        </div>`
        ; 
    })
}


fetchPosts(postsUrl);


