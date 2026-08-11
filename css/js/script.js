// ========================================
// OUT ORGANIZATION - MAIN JAVASCRIPT
// Gallery Lightbox + WhatsApp Contact Form
// + Mobile Navigation
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

        const lightboxImage =
            lightbox.querySelector(".lightbox-image");

        const closeButton =
            lightbox.querySelector(".lightbox-close");


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

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const formData =
                new FormData(contactForm);

            const name =
                (formData.get("name") || "").trim();

            const email =
                (formData.get("email") || "").trim();

            const subject =
                (formData.get("subject") || "").trim();

            const message =
                (formData.get("message") || "").trim();


            if (!name || !email || !subject || !message) {

                alert(
                    "Please fill in all the required fields."
                );

                return;

            }


            const whatsappNumber =
                "254111503308";


            const whatsappMessage =
                "Hello OUT Organization,\n\n" +
                "New Contact Form Message\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Subject: " + subject + "\n\n" +
                "Message:\n" + message;


            const encodedMessage =
                encodeURIComponent(whatsappMessage);


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodedMessage;


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {


        // Open and close mobile menu

        menuToggle.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle("active");

                const isOpen =
                    navLinks.classList.contains("active");


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );


                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );


                menuToggle.textContent =
                    isOpen ? "×" : "☰";

            }
        );


        // Close menu after clicking a link

        const navigationLinks =
            navLinks.querySelectorAll("a");


        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );


                        menuToggle.textContent = "☰";

                    }
                );

            }
        );

    }

});
