let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Cambiar la imagen cada X segundos (ajusta el valor en milisegundos)
    setTimeout(showSlides, 5000);
}

showSlides(); // Inicia la presentación de diapositivas automáticamente
