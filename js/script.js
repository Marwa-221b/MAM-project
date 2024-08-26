let observer = new IntersectionObserver((entries, observer)=>{
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
});
document.querySelectorAll('.hidden').forEach((el)=> observer.observe(el )) ;