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

        const lightbox = document.createElement("div");
        lightbox.className = "gallery-lightbox";

        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <img class="lightbox-image" src="" alt="Gallery image">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector(".lightbox-image");
        const closeButton = lightbox.querySelector(".lightbox-close");

        galleryImages.forEach(function (image) {

            image.style.cursor = "pointer";

            image.addEventListener("click", function () {

                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";

            });

        });

        closeButton.addEventListener("click", function () {

            lightbox.classList.remove("active");
            document.body.style.overflow = "";

        });

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.classList.remove("active");
                document.body.style.overflow = "";

            }

        });

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

            event.preventDefault();

            // Find fields by their NAME attributes
            const nameField = contactForm.querySelector('[name="name"]');
            const emailField = contactForm.querySelector('[name="email"]');
            const subjectField = contactForm.querySelector('[name="subject"]');
            const messageField = contactForm.querySelector('[name="message"]');

            // Make sure all fields exist
            if (!nameField || !emailField || !subjectField || !messageField) {

                alert("There is a problem with the contact form fields. Please check the form HTML.");

                return;

            }

            // Get the actual values
            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const subject = subjectField.value.trim();
            const message = messageField.value.trim();

            // Check if anything is empty
            if (name === "" || email === "" || subject === "" || message === "") {

                alert("Please fill in all the required fields.");

                return;

            }

            // ========================================
            // WHATSAPP NUMBER
            // ========================================

            const whatsappNumber = "254111503308";

            // ========================================
            // MESSAGE TO WHATSAPP
            // ========================================

            const whatsappMessage =
                "Hello OUT Organization,\n\n" +
                "*New Contact Form Message*\n\n" +
                "*Name:* " + name + "\n" +
                "*Email:* " + email + "\n" +
                "*Subject:* " + subject + "\n\n" +
                "*Message:*\n" + message;

            // Encode message
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Create WhatsApp link
            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodedMessage;

            // Open WhatsApp
            window.open(whatsappURL, "_blank");

        });

    }

});
