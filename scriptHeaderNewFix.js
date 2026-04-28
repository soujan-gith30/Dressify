window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust the scroll position threshold as needed
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});
