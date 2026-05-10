/* ==================== TYPED TEXT ==================== */
if (document.querySelector(".text")) {
    new Typed(".text", {
        strings: [
            "Preparing for Competitive Exams",
            "Dedicated B.Sc CS Student",
            "Aiming for Government Services",
            "Consistency & Hard Work"
        ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true
    });
}

/* ==================== NAVBAR TOGGLE ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/* ==================== ACTIVE LINK + STICKY NAV ==================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {

    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });

    /* Sticky Header */
    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /* Close mobile menu on scroll */
    if (menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

/* ==================== SCROLL REVEAL ==================== */
function revealSections() {
    const reveals = document.querySelectorAll('section');

    reveals.forEach(sec => {
        const windowHeight = window.innerHeight;
        const revealTop = sec.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {
            sec.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

/* ==================== CONTACT FORM ==================== */
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('Message पाठवल्याबद्दल धन्यवाद! मी लवकरच संपर्क करेन.');

        contactForm.reset();
    });
}

/* ==================== SCROLL TO TOP BUTTON ==================== */
const topBtn = document.querySelector('.top-btn');

if (topBtn) {
    window.addEventListener('scroll', () => {
        topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==================== BUTTON RIPPLE EFFECT ==================== */
const buttons = document.querySelectorAll('.btn-box');

buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

/* ==================== SCROLL PROGRESS BAR ==================== */
const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#0ef";
progressBar.style.zIndex = "9999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = (scroll / height) * 100 + "%";
});

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ==================== CURSOR GLOW EFFECT ==================== */
const cursor = document.createElement("div");

cursor.style.position = "fixed";
cursor.style.width = "12px";
cursor.style.height = "12px";
cursor.style.borderRadius = "50%";
cursor.style.background = "#0ef";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "9999";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* ==================== PAGE LOAD FADE ==================== */
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
