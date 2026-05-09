/* ==================== TYPED JS (Text Animation) ==================== */
const typed = new Typed(".text", {
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

/* ==================== TOGGLE ICON NAVBAR (Mobile sathi) ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ==================== STICKY NAVBAR ==================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ==================== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK ==================== */
    if (menuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/* ==================== CONTACT FORM HANDLER ==================== */
const contactForm = document.querySelector('form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Ithe tumhi actual email logic nantar add karu shakta
        alert('Message Pathavlyabaddal Dhanyavad! Mi tumhala lavkarach sampark karel.');
        contactForm.reset();
    });
}

/* ==================== OPTIONAL: SMOOTH REVEAL ANIMATION ==================== */
// Jar tumhala sections scroll kartana halke var yetana dakhvayche astil tar
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('section');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
                }
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
                    
