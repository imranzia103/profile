let  darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}


ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration :2000,
    delay : 200


});








ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img', { origin: 'bottom' });