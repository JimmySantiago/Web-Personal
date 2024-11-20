document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const loading = document.getElementById('loading');
  const successMessage = document.getElementById('successMessage');

  // Función de validación
  function validateField(field, errorId, criteria) {
      const errorElement = document.getElementById(errorId);
      let isValid = true;
      let errorMessage = '';

      if (field.value.trim() === '') {
          isValid = false;
          errorMessage = '⚠️ Este campo es requerido';
      } else if (criteria) {
          if (field.type === 'email' && !field.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
              isValid = false;
              errorMessage = '⚠️ Por favor, ingresa un correo electrónico válido';
          }
          if (field.id === 'message' && field.value.length < 10) {
              isValid = false;
              errorMessage = '⚠️ El mensaje debe tener al menos 10 caracteres';
          }
      }

      if (!isValid) {
          field.classList.add('error');
          errorElement.style.display = 'block';
          errorElement.textContent = errorMessage;
      } else {
          field.classList.remove('error');
          errorElement.style.display = 'none';
      }

      return isValid;
  }

  // Validación en tiempo real
  const fields = ['name', 'email', 'message'];
  fields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      field.addEventListener('blur', () => {
          validateField(field, `${fieldId}Error`, true);
      });
      field.addEventListener('input', () => {
          if (field.classList.contains('error')) {
              validateField(field, `${fieldId}Error`, true);
          }
      });
  });

  // Manejo del envío del formulario
  form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      let isValid = true;
      fields.forEach(fieldId => {
          const field = document.getElementById(fieldId);
          if (!validateField(field, `${fieldId}Error`, true)) {
              isValid = false;
          }
      });

      if (!isValid) return;

      submitBtn.disabled = true;
      loading.style.display = 'block';

      try {
          // Simular envío
          await new Promise(resolve => setTimeout(resolve, 2000));

          form.reset();
          loading.style.display = 'none';
          successMessage.style.display = 'block';
          
          setTimeout(() => {
              successMessage.style.display = 'none';
              submitBtn.disabled = false;
          }, 5000);

      } catch (error) {
          console.error('Error:', error);
          loading.style.display = 'none';
          submitBtn.disabled = false;
          alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
  });
});