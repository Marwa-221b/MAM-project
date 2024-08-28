let observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add("shows");
        observer.unobserve(entry.target);
    });
});


document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));


    document.getElementById('btnSwitch').addEventListener('click',()=>{
        if (document.querySelector('html').getAttribute('data-bs-theme') == 'dark') {
            document.querySelector('html').setAttribute('data-bs-theme','light')
            document.getElementById('btnSwitch').innerText="Dark Mode"
        
        }
        else {
            document.querySelector('html').setAttribute('data-bs-theme','dark')
            document.querySelector('.sec8').classList.toggle("dark")
            document.getElementById('btnSwitch').innerText="light Mode"
        }
    })

