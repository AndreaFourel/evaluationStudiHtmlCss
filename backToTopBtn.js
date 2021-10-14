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

