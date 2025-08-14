// Basit mobil menü aç/kapa fonksiyonu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    // Klavye ile erişilebilirlik için
    hamburger.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') toggleMenu();
    });
}

// İletişim formu gönderim örneği (gerçek sunucu yok)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mesajınız başarıyla gönderildi!');
        contactForm.reset();
    });
}
