const carouselSlide = document.querySelector(".test-carousel-slide");
const carouselImages = document.querySelectorAll(".each-post");
const postsUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/" + "?per_page=14&_embed";
const myPostContainer = document.querySelector(".each-post");
carouselFrame = document.querySelector(".test-carousel");

async function fetchPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    posts.forEach(function(post){

        myPostContainer.innerHTML += `<div class="final-post">
            <h4>${post.title.rendered}</h4>
            <img class="test-image" src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="">
            <a class="view-recipe" href="" >View Recipe</a>
            </div>`;

// buttons
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// counter
let counter = 1;
const size = carouselFrame.clientWidth;
//Hide and show arrows
if(counter <= 1){
    prevBtn.classList.add("hide-btn");
    nextBtn.classList.remove("hide-btn");
}else{
    prevBtn.classList.remove("hide-btn");
}

carouselSlide.style.transform = 'translateX(' + (-size) + 'px)';

// btn listeners
nextBtn.addEventListener('click',()=>{
    
    carouselSlide.style.transition = "transform 250ms ease-in-out";
    counter ++;
    
    carouselSlide.style.transform = 'translateX(' + (-size) * counter + 'px)';
    //Hide and show arrows
    if(counter != 1) {
        prevBtn.classList.remove("hide-btn");
    };
    if(counter >= posts.length / 4) {
        nextBtn.classList.add("hide-btn");
    };
    console.log(counter);
});

prevBtn.addEventListener('click',()=>{

    carouselSlide.style.transition = "transform 250ms ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    //Hide and show arrows
    if(counter <= 1){
        prevBtn.classList.add("hide-btn");
        nextBtn.classList.remove("hide-btn");
    } 
    if(counter != 3) {
        nextBtn.classList.remove("hide-btn");
    };
    console.log(counter);
    
});
})
}
fetchPosts(postsUrl);

    

        

