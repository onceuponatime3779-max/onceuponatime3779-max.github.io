// ==========================================
// OUT ORGANIZATION CONTACT FORM
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm.elements["name"].value.trim();
        const email = contactForm.elements["email"].value.trim();
        const subject = contactForm.elements["subject"].value.trim();
        const message = contactForm.elements["message"].value.trim();

        const whatsappNumber = "254111503308";

        const whatsappMessage =
            "Hello OUT Organization,\n\n" +
            "NEW WEBSITE ENQUIRY\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Subject: " + subject + "\n\n" +
            "Message:\n" + message;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

});
