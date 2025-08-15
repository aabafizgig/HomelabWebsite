// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(lightbox => {
    // Close when clicking the X
    lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

// Open lightbox when clicking thumbnails
document.querySelectorAll('a[href^="#img"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').substring(1);
        document.getElementById(id).style.display = 'flex';
    });
});

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.lightbox').forEach(lightbox => {
            lightbox.style.display = 'none';
        });
    }
});