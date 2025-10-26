// ---------- DOM ready ----------
document.addEventListener('DOMContentLoaded', function () {
    // set footer year
    const year = new Date().getFullYear();
    const elYear = document.getElementById('thisYear');
    if (elYear) elYear.textContent = year;

    // Smooth scroll for internal anchors (ignores href="#")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Contact form validation + fake submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // bootstrap validation
            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                return;
            }
            // simulate submit (replace with real ajax as needed)
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = 'Sending...';
            setTimeout(() => {
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                btn.disabled = false;
                btn.innerHTML = originalText;
            }, 900);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer (لتحديد المحتوى عند ظهوره في الشاشة)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // إيقاف المراقبة بعد التشغيل مرة واحدة
            }
        });
    }, {
        threshold: 0.1 // تشغيل الأنيميشن عندما يظهر 10% من العنصر
    });

    // مراقبة كل عناصر تحتوي على كلاس "animate-on-scroll"
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});


window.addEventListener("scroll", function () {
    const nav = document.querySelector(".custom-navbar");
    nav.classList.toggle("shrink", window.scrollY > 50);
});
