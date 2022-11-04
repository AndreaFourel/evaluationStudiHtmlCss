//back to top button
let myButton = document.getElementById('up-btn');

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}


// lazy load Carousel 


runCarousel();

function runCarousel (){
  let myCarousel = document.getElementById('festival-carousel');
  if(myCarousel){
    myCarousel.addEventListener('slide.bs.carousel', function (e) {
      let image = e.relatedTarget.querySelector('img');
      if(!image.hasAttribute('src')){
        let url = image.getAttribute('data-src');
        image.setAttribute('src', url);
        image.removeAttribute('data-src');
      }   
    }, {passive: true})
  }

}

// lazyload for all img tags

//   const images = document.querySelectorAll('img');

// let imageOptions = {};
// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;

//     const image = entry.target;
//     const newURL = image.getAttribute('data-src');
//     image.src = newURL;
//     observer.unobserve(image);
//   });
// }, imageOptions);

// images.forEach((image) => {
//   observer.observe(image);
// });
document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None; Secure";