/* =====================================================
   NOOR AL HIDAYAH - GLOBAL JAVASCRIPT
   ===================================================== */


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute("aria-label", "Close menu");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute("aria-label", "Open menu");
        }

    });


    document
        .querySelectorAll(".nav-link, .nav-button")
        .forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("open");

                const icon = menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });

}


/* =====================================================
   HEADER SCROLL
   ===================================================== */

const header = document.getElementById("header");

if (header) {

    const updateHeader = () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);

}


/* =====================================================
   ACTIVE PAGE NAVIGATION
   ===================================================== */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPage = href.split("#")[0];

        link.classList.remove("active");

        if (
            (currentPage === "" && linkPage === "index.html") ||
            linkPage === currentPage
        ) {
            link.classList.add("active");
        }

    });


/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");

                        revealObserver
                            .unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =====================================================
   TESTIMONIAL SLIDER
   ===================================================== */

const testimonials =
    document.querySelectorAll(".testimonial");

const nextButton =
    document.getElementById("next");

const prevButton =
    document.getElementById("prev");

let testimonialIndex = 0;


function showTestimonial(index) {

    if (!testimonials.length) return;

    testimonials.forEach(testimonial => {

        testimonial.classList.remove("active");

    });

    testimonials[index]
        .classList
        .add("active");

}


if (
    testimonials.length &&
    nextButton &&
    prevButton
) {

    nextButton.addEventListener("click", () => {

        testimonialIndex++;

        if (
            testimonialIndex >= testimonials.length
        ) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    });


    prevButton.addEventListener("click", () => {

        testimonialIndex--;

        if (testimonialIndex < 0) {

            testimonialIndex =
                testimonials.length - 1;

        }

        showTestimonial(testimonialIndex);

    });


    setInterval(() => {

        testimonialIndex++;

        if (
            testimonialIndex >= testimonials.length
        ) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    }, 6000);

}


/* =====================================================
   FAQ
   ===================================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item =
            question.parentElement;

        const answer =
            item.querySelector(".faq-answer");

        const isOpen =
            item.classList.contains("open");


        document
            .querySelectorAll(".faq-item")
            .forEach(otherItem => {

                otherItem
                    .classList
                    .remove("open");

                const otherAnswer =
                    otherItem.querySelector(
                        ".faq-answer"
                    );

                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }

            });


        if (!isOpen) {

            item.classList.add("open");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


// /* =====================================================
//    CONTACT FORM
//    ===================================================== */

// const contactForm =
//     document.getElementById("contact-form");


// if (contactForm) {

//     contactForm.addEventListener(
//         "submit",
//         event => {

//             event.preventDefault();

//             const name =
//                 contactForm.querySelector(
//                     'input[name="name"]'
//                 );

//             alert(
//                 `Thank you${name && name.value ? " " + name.value : ""}! Your message has been received. Noor Al Hidayah Quran Academy will contact you shortly.`
//             );

//             contactForm.reset();

//         }
//     );

// }


/* =====================================================
   CURRENT YEAR
   ===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   SMOOTH SCROLL
   ===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const targetSelector =
                    this.getAttribute("href");

                if (
                    !targetSelector ||
                    targetSelector === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetSelector
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                    history.replaceState(
                        null,
                        "",
                        targetSelector
                    );

                }

            }
        );

    });


/* =====================================================
   FAQ ACCORDION
   ===================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Close all other FAQ items
        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });

        // Toggle current item
        item.classList.toggle("active");

    });

});
