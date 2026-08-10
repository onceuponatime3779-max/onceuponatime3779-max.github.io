/* ===========================
   GALLERY LIGHTBOX
============================ */

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(".gallery-item img");

    if (galleryImages.length === 0) {
        return;
    }

    /* Create lightbox */

    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">
            &times;
        </button>

        <img class="lightbox-image" src="" alt="Gallery image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeButton = lightbox.querySelector(".lightbox-close");

    /* Open image */

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });

    /* Close button */

    closeButton.addEventListener("click", function () {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

    /* Close when clicking outside the image */

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

    /* Close with Escape key */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});
