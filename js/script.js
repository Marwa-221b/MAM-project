let observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("shows");
        observer.unobserve(entry.target);
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));