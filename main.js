/* ======================================================
   1. PAGE LOADER (Website load honyacha animation)
   ====================================================== */
window.addEventListener("load", () => {
    const loader = document.querySelector("#loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

/* ======================================================
   2. NAVBAR TOGGLE (For Mobile)
   ====================================================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Cross icon sathi
    navbar.classList.toggle('active'); // Menu dakhvnyasathi
};

/* ======================================================
   3. ACTIVE LINK ON SCROLL & STICKY HEADER
   ====================================================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* --- Sticky Navbar Effect --- */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* --- Scroll kelyavar menu band karne (Mobile sathi) --- */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ======================================================
   4. TYPED.JS (Auto-typing text effect)
   ====================================================== */
if (document.querySelector(".text")) {
    const typed = new Typed('.text', {
        strings: [
            'B.Sc CS Student', 
            'Govt Exam Aspirant', 
            'Data Analyst', 
            'Cybersecurity Enthusiast'
        ],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
}

/* ======================================================
   5. BUTTON RIPPLE EFFECT (Click kelyavar wave animation)
   ====================================================== */
const buttons = document.querySelectorAll('.btn-box');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;

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

/* ======================================================
   6. CONTACT FORM HANDLING (Simple Alert)
   ====================================================== */
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message यशस्वीरित्या पाठवला आहे! धन्यवाद, सौरभ.');
        contactForm.reset();
    });
}

/* ======================================================
   7. SCROLL PROGRESS BAR (Top progress line)
   ====================================================== */
const scrollProgress = document.createElement("div");
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: #00eeff;
    z-index: 10001;
    transition: width 0.2s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener("scroll", () => {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + "%";
});
                        
