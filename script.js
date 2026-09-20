document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }

    const cards = document.querySelectorAll(".news-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });

    });

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", function () {
            this.src = "https://via.placeholder.com/400x250";
        });

    });

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            if (name && email && message) {

                alert(
                    "شكرا " +
                    name +
                    "، تم إرسال رسالتك بنجاح"
                );

                contactForm.reset();

            } else {

                alert("يرجى ملء جميع الحقول");

            }

        });

    }

    const readButtons =
        document.querySelectorAll(".read-more");

    readButtons.forEach(button => {

        button.addEventListener("click", function () {
            this.style.opacity = "0.5";
        });

    });

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        });

    document.querySelectorAll(".news-card").forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(40px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

});
