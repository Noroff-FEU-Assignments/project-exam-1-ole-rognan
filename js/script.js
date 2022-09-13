
const postsUrl = "https://gamehub.olemariusrognan.com/wp-json/wp/v2/posts/" + "?per_page=14&_embed";

const carousel = document.querySelector(".carousel")
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-button-right");
const prevButton = document.querySelector(".carousel-button-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);
const slideWidth = carousel.getBoundingClientRect().width;

async function fetchPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);

    posts.forEach(function(post){
        track.innerHTML += `
        
            <li class="carousel-slide current-slide">
                    <h4 class="index-h3-title">${post.title.rendered}</h4>
                    <img class="carousel-image" src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="">
                    <div class="see-recipe-button"> 
                    <h4 class="see-recipe-h4">See Recipe</h4>
                    </div>
            </li>`
    })
}
fetchPosts(postsUrl);




console.log(slideWidth);

//arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
    
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot,  targetDot)=> {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex)=> {
    if(targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
    } else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
    } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
    };

}

// when I click left, move slides to left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

})

// when I click right, move slides to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);

    console.log(currentSlide);
    
})

// when I move the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest("button");
    
    if(!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot) 
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
 console.log(targetIndex)
})




/*posts.forEach(function(post){
    carouselContainer.innerHTML += `
    
    <div class="carousel-track-container">
        <ul class="carousel-track">
            <li class="carousel-slide current-slide">
                <div class="recipe-post">
                <h3 class="my-title-h3">${post.title.rendered}</h3>
                <p class="my-caption">${post._embedded['wp:featuredmedia']['0'].caption.rendered}</p>
                </div>
            </li>
        </ul>
    </div>`
})*/
