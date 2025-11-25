// Menunggu dokumen HTML selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {  
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        // 1. Toggle tampilan menu (Slide in/out)
        navLinks.classList.toggle('nav-active');
        // 2. Toggle animasi tombol hamburger
        menuToggle.classList.toggle('is-active');
        // 3. BARU: Toggle kunci scroll pada body
        // Saat menu terbuka, body tidak bisa discroll. Saat tertutup, bisa lagi.
        document.body.classList.toggle('no-scroll');
    });

});