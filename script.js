const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png"
];

let currentIndex = 0;

const mainImg = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll(".thumbnails img");

function updateGallery() {

    mainImg.src = images[currentIndex];

    thumbnails.forEach((img) => {
        img.classList.remove("active");
    });

    thumbnails[currentIndex].classList.add("active");

}

function setImage(index) {

    currentIndex = index;
    updateGallery();

}

function nextImage() {

    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();

}

function prevImage() {

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();

}

updateGallery();
/* TOGGLE MENU */

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
    const menuLinks = document.querySelectorAll("#navMenu a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            document.getElementById("navMenu").classList.remove("active");
        });
    });
    document.addEventListener("click", function (event) {

        const nav = document.getElementById("navMenu");
        const menuBtn = document.querySelector(".menu-toggle");

        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.classList.remove("active");
        }

    });
}

/* CLOSE MENU WHEN CLICK OUTSIDE */

document.addEventListener("click", function (e) {

    const nav = document.getElementById("navMenu");
    const toggle = document.querySelector(".menu-toggle");

    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("active");
    }

});
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    const specRows = document.querySelectorAll('.spec-row');

    // 1. Download Button Click Interaction
    downloadBtn.addEventListener('click', () => {
        // Replace with your actual file path
        const fileUrl = 'path/to/your/technical-datasheet.pdf';

        // Simulating a download trigger
        alert("Preparing your Technical Datasheet for download...");

        // In a real scenario, you would uncomment the next line:
        // window.location.href = fileUrl;
    });

    // 2. Subtle Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for each row to create a "staggered" look
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 50);
            }
        });
    }, observerOptions);

    specRows.forEach(row => {
        // Set initial state for animation
        row.style.opacity = "0";
        row.style.transform = "translateY(10px)";
        row.style.transition = "all 0.5s ease-out";
        observer.observe(row);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const quoteBtn = document.querySelector('.center-btn button');

    // 1. Button Interaction
    if (quoteBtn) {
        quoteBtn.addEventListener('click', () => {
            // Smooth scroll to a contact form or redirect
            console.log("Redirecting to Quote Request Form...");
            alert("Thank you for your interest! Opening Request Form...");
        });
    }

    // 2. Scroll Animation (Fade in effect)
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        featureCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                // Staggered delay for each card
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    // Set initial state for animation
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });

    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);

    // Initial check in case user is already at the section
    revealOnScroll();
});
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const arrow = item.querySelector('.arrow');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items (Optional: remove this part if you want multiple items open)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.arrow').innerHTML = '&#9660;'; // Down arrow
            });

            // Toggle the clicked item
            if (!isActive) {
                item.classList.add('active');
                arrow.innerHTML = '&#9650;'; // Up arrow
            } else {
                item.classList.remove('active');
                arrow.innerHTML = '&#9660;'; // Down arrow
            }
        });
    });

    // Form Submission Logic
    const catalogBtn = document.querySelector('.catalog-form button');
    if (catalogBtn) {
        catalogBtn.addEventListener('click', (e) => {
            const emailInput = document.querySelector('.catalog-form input').value;
            if (emailInput && emailInput.includes('@')) {
                alert(`Success! The catalogue will be sent to ${emailInput}`);
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }
});
const slider = document.getElementById("appSlider");
const nextBtn = document.getElementById("nextApp");
const prevBtn = document.getElementById("prevApp");

nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 320,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -320,
        behavior: "smooth"
    });
});
const steps = document.querySelectorAll(".step");

const title = document.getElementById("processTitle");
const description = document.getElementById("processDescription");
const list = document.getElementById("processList");
const image = document.getElementById("processImage");

const data = [
    {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        list: [
            "PE100 grade material",
            "Optimal molecular weight distribution"
        ],
        img: "image1.jpg"
    },
    {
        title: "Extrusion Process",
        desc: "The extrusion process melts and forms the HDPE material into pipes with consistent structure.",
        list: [
            "High precision extrusion",
            "Uniform pipe formation"
        ],
        img: "image1.jpg"
    },
    {
        title: "Cooling Process",
        desc: "Cooling tanks stabilize the pipe dimensions and ensure structural integrity.",
        list: [
            "Controlled cooling tanks",
            "Shape stabilization"
        ],
        img: "image1.jpg"
    },
    {
        title: "Sizing Process",
        desc: "Sizing ensures the pipe maintains correct diameter and shape.",
        list: [
            "Vacuum calibration",
            "Accurate pipe dimension"
        ],
        img: "image1.jpg"
    },
    {
        title: "Quality Control",
        desc: "Every pipe undergoes strict quality inspection before dispatch.",
        list: [
            "Thickness inspection",
            "Pressure testing"
        ],
        img: "image1.jpg"
    },
    {
        title: "Packaging",
        desc: "Finished pipes are cut and packed for safe delivery.",
        list: [
            "Precision cutting",
            "Secure packaging"
        ],
        img: "image1.jpg"
    }
];

steps.forEach(step => {

    step.addEventListener("click", () => {

        steps.forEach(btn => btn.classList.remove("active"));
        step.classList.add("active");

        let index = step.dataset.step;

        title.textContent = data[index].title;
        description.textContent = data[index].desc;
        image.src = data[index].img;

        list.innerHTML = "";

        data[index].list.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });

    });

});
const sliders = document.getElementById("testimonialSlider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
    const cardWidth = slider.querySelector(".testimonial-card").offsetWidth + 25;
    slider.scrollBy({
        left: cardWidth,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    const cardWidth = slider.querySelector(".testimonial-card").offsetWidth + 25;
    slider.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
    });
});
document.querySelectorAll(".portfolio-card button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Navigate to product details page");
    });
});

document.querySelector(".primary").addEventListener("click", () => {
    alert("Redirect to contact expert page");
});
document.querySelector(".cta-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = this.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "1px solid red";
            valid = false;
        } else {
            input.style.border = "1px solid #ddd";
        }
    });

    if (valid) {
        alert("Form submitted successfully!");
        this.reset();
    } else {
        alert("Please fill all fields.");
    }

});
document.querySelectorAll(".footer-col a, .footer-bottom a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        alert("This link will navigate to: " + this.textContent);
    });
});