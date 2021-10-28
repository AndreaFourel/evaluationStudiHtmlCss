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
  var myCarousel = document.getElementById('festival-carousel');

  myCarousel.addEventListener('slide.bs.carousel', function (e) {

      let image = e.relatedTarget.querySelector('img');

      if(!image.hasAttribute('src')){
        let url = image.getAttribute('data-src');
        image.setAttribute('src', url);
        image.removeAttribute('data-src');
      }   
})
}



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

