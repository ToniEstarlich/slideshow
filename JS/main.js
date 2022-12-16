//javascript program//
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = 
    document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace( "active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    setTimeout(showSlides, 2000); //change image every 2 seconds
}

//End Slideshow//