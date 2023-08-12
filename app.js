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

