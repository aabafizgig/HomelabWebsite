
document.querySelectorAll('.lightbox').forEach(lightbox => {
    lightbox.addEventListener('click', e => {
        if (e.target.tagName !== 'IMG') {
            lightbox.style.display = 'none';
        }
    });
});

document.querySelectorAll('a[href^="#img"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        document.getElementById(id).style.display = 'flex';
    });
});

