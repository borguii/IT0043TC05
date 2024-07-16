
document.addEventListener("DOMContentLoaded", function() {

    const faqItems = document.querySelectorAll("#faq .faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const roleText = document.getElementById('role-text');
    const roles = ["Barista", "Gamer"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % roles.length;
        roleText.textContent = roles[index];
    }, 1200);
});

document.getElementById("mobile-menu").addEventListener("click", function() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    var bars = document.querySelectorAll(".bar");
    bars.forEach(bar => {
        bar.classList.toggle("change");
    });
});