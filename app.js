// Nav bar code
const toggle = document.getElementById('toggle')
const navbarShow = document.getElementById('navbar-list')

    document.onclick = function(e){
        if(e.target.id !== 'navbarShow' && e.target.id !== 'toggle')
        {
            toggle.classList.remove('active')
            navbarShow.classList.remove('active')
        }
    }

    toggle.onclick = function(){
        toggle.classList.toggle('active')
        navbarShow.classList.toggle('active')
    }

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Countdown Date
const second= document.getElementById('seconds');

const minute=document.getElementById('minutes');
const hour=document.getElementById('hours');
const day=document.getElementById('days');
const newyeardate= "11 may 2024";

const countdown=()=>{
    const newdate= new Date(newyeardate);
    const date = new Date();
    const secleft= (newdate-date)/1000;
    const days=Math.floor(secleft/3600/24);
    const hours=(Math.floor(secleft/3600)%24);
    const min=(Math.floor(secleft/60)%60);
    const sec=(Math.floor(secleft%60))
    const timeformat=(time)=>{
      return  time<10? `0${time}`:time;
    }
    second.innerHTML=timeformat(sec);
    minute.innerHTML=timeformat(min);
    hour.innerHTML=timeformat(hours);
    day.innerHTML=timeformat(days);

    
   
    
}
countdown();
setInterval(countdown,1000);

//Photo Gallery

// Get the gallery container and images
const galleryContainer = document.querySelector('.gallery-container');
const galleryImages = galleryContainer.querySelector('.gallery-images');
const images = Array.from(galleryImages.children);

// Add an event listener to the full-screen button
galleryContainer.addEventListener('click', () => {
  // Get the current image index
  const currentIndex = parseInt(galleryContainer.dataset.currentImage);

  // Calculate the next image index
  const nextIndex = (currentIndex + 1) % images.length;

  // Update the current image index and update the CSS
  galleryContainer.dataset.currentImage = nextIndex;
  updateCSS();

  // Function to update the CSS
  function updateCSS() {
    // Get the current image
    const currentImage = images[nextIndex];

    // Calculate the full-screen dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update the CSS styles
    galleryContainer.style.width = `${width}px`;
    galleryContainer.style.height = `${height}px`;
    galleryContainer.style.top = `-${height}px`;
    galleryContainer.style.left = `-${width}px`;
    currentImage.style.width = `${width}px`;
    currentImage.style.height = `${height}px`;
    currentImage.style.top = '0';
    currentImage.style.left = '0';
  }
});