
// Form validation and submission
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (!nombre || !email || !mensaje) {
            alert('Por favor, complete todos los campos requeridos.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('¡Mensaje enviado con éxito! Gracias por contactarme.');
        this.reset();
    });
}

