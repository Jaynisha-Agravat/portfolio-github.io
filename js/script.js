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