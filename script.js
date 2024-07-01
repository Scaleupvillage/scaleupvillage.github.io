const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLink.classList.add('active');
    });
});