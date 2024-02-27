/////////////////////////////////////////////////////
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid blue}";
        document.body.appendChild(css);
    };


/////////////////////////////////////////

// Get the button:
let mybutton = document.getElementById("footer-button");

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
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

    function searchFunction() {
			// Declare variables
			var input, filter, body, div, p, i, txtValue;
			input = document.getElementById("searchbar");
			filter = input.value.toUpperCase();
			body = document.getElementById("body-content");
			div = body.getElementsByTagName("div");

			// Loop through all table rows, and hide those who don't match the search query
			for (i = 0; i < div.length; i++) {
				p = div[i].getElementsByTagName("p")[0];
				if (td) {
					txtValue = p.textContent || p.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1) {
						div[i].style.display = "";
					} else {
						div[i].style.display = "none";
					}
				}
			}
		}
//////////////////////////////////////////////
const container = document.getElementById('popup-container');

window.addEventListener('load', () => {
  // Show the pop-up with a delay for better loading experience
  setTimeout(() => {
    container.classList.remove('hidden');
  }, 1000); // Adjust delay as needed
});

// Optional: Add functionality for the close button (if included in your HTML)
document.getElementById('close-button').addEventListener('click', () => {
  container.classList.add('hidden');
});
//////////////////////////////////////////////
/*function darkmodeFunction() {
  var element = document.body;
  element.dataset.bsTheme =
  element.dataset.bsTheme == "light" ? "dark" : "light";
}*/
function darkmodeFunction() {
  const body = document.body;
  const html = document.documentElement;

  // Toggle dark mode state
  const isDarkMode = body.dataset.theme === 'dark';
  body.dataset.theme = isDarkMode ? 'light' : 'dark';

  // Toggle theme colors and text
  const lightColors = {
    backgroundColor: '#ffffff',
    color: '#000000',
  };
  const darkColors = {
    backgroundColor: '#000000',
    color: '#ffffff',
  };
  const colors = isDarkMode ? darkColors : lightColors;

  // Apply colors to body, html, and potential custom elements
  const elements = [body, html];
  const customElements = document.querySelectorAll('[data-theme-toggle]'); // Selects elements with data-theme-toggle attribute
  elements.push(...customElements); // Add custom elements to the array
  elements.forEach(element => {
    Object.assign(element.style, colors);
  });
}