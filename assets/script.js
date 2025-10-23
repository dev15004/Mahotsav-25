// Countdown Timer
function updateCountdown() {
    const festDate = new Date('October 27, 2025 00:00:00').getTime(); // Change to your fest date
    const now = new Date().getTime();
    const distance = festDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<h2>Fest is Live! Join Now!</h2>';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (Basic)
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form Submission (Placeholder – Add backend like Formspree)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (Connect to a backend for real submissions)');
});
function myFunction(x) {
    x.classList.toggle("change");
};