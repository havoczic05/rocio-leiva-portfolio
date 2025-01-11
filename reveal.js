window.sr = ScrollReveal();

sr.reveal('.hero-content', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});

sr.reveal('.nav-content', {
    duration: 2000,
    origin: 'top',
});

sr.reveal('.container', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});






document.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    const modal = document.getElementById("imageModal");

    // Get the modal image and caption text
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Get all images with class "work-item" and insert the clicked image inside the modal
    const images = document.querySelectorAll(".work-item img");
    images.forEach((image) => {
        image.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = image.src;
            captionText.innerHTML = image.alt;
            document.body.classList.add("no-scroll");
        });
    });

    // Get the <span> element that closes the modal
    const span = document.querySelector(".close");

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    });

    // Add zoom functionality
    modalImg.addEventListener('click', () => {
        modalImg.classList.toggle('zoom');
    });
});
