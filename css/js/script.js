// ========================================
// OUT ORGANIZATION - MAIN JAVASCRIPT
// Gallery Lightbox + WhatsApp Contact Form
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // GALLERY LIGHTBOX
    // ========================================

    const galleryImages = document.querySelectorAll(".gallery-item img");

    if (galleryImages.length > 0) {

        // Create lightbox
        const lightbox = document.createElement("div");
        lightbox.className = "gallery-lightbox";

        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close">&times;</button>

            <img class="lightbox-image" src="" alt="Gallery image">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector(".lightbox-image");
        const closeButton = lightbox.querySelector(".lightbox-close");

        // Open image
        galleryImages.forEach(function (image) {

            image.style.cursor = "pointer";

            image.addEventListener("click", function () {

                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");

                document.body.style.overflow = "hidden";
            });

        });

        // Close button
        closeButton.addEventListener("click", function () {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        });

        // Close when clicking outside image
        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

        // Close with Escape key
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                lightbox.classList.remove("active");

                document.body.style.overflow = "";

            }

        });

    }


    // ========================================
    // CONTACT FORM → WHATSAPP
    // ========================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent normal form submission
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const subject = document.getElementById("subject")?.value.trim() || "";
            const message = document.getElementById("message")?.value.trim() || "";

            // Make sure required information is present
            if (!name || !email || !subject || !message) {
                alert("Please fill in all the required fields.");
                return;
            }

            // Your organization's WhatsApp number
            const whatsappNumber = "254111503308";

            // Create WhatsApp message
            const whatsappMessage =
                "Hello OUT Organization,%0A%0A" +
                "*New Contact Form Message*%0A%0A" +
                "*Name:* " + encodeURIComponent(name) + "%0A" +
                "*Email:* " + encodeURIComponent(email) + "%0A" +
                "*Subject:* " + encodeURIComponent(subject) + "%0A%0A" +
                "*Message:*%0A" + encodeURIComponent(message);

            // WhatsApp URL
            const whatsappURL =
                "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

            // Open WhatsApp
            window.open(whatsappURL, "_blank");

        });

    }

});
