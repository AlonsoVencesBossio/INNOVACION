document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');
    const eyeOffIcon = document.querySelector('.eye-off-icon');
    const loginForm = document.querySelector('.login-form');

    // Función para mostrar/ocultar contraseña
    window.togglePasswordVisibility = function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.style.display = 'none';
            eyeOffIcon.style.display = 'inline-block';
        } else {
            passwordInput.type = 'password';
            eyeIcon.style.display = 'inline-block';
            eyeOffIcon.style.display = 'none';
        }
    };

    // Manejo del envío del formulario (ejemplo básico)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí iría la lógica de validación del frontend
        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, ingresa tu nombre de usuario/correo electrónico y contraseña.');
            return;
        }

        // Simula un envío de datos (en un entorno real, esto sería una solicitud a un servidor)
        console.log('Usuario:', username);
        console.log('Contraseña:', password);

       document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');
    const eyeOffIcon = document.querySelector('.eye-off-icon');
    const loginForm = document.querySelector('.login-form');

    // Función para mostrar/ocultar contraseña
    window.togglePasswordVisibility = function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.style.display = 'none';
            eyeOffIcon.style.display = 'inline-block';
        } else {
            passwordInput.type = 'password';
            eyeIcon.style.display = 'inline-block';
            eyeOffIcon.style.display = 'none';
        }
    };

    // Manejo del envío del formulario
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí iría la lógica de validación del frontend
        if (username.trim() === '' || password.trim() === '') {
            alert('Por favor, ingresa tu nombre de usuario/correo electrónico y contraseña.');
            return;
        }

        // --- SIMULACIÓN DE INICIO DE SESIÓN ---
        // En un entorno real, aquí harías una solicitud AJAX/Fetch a tu backend.
        // Si el backend responde con éxito, entonces redirigirías.

        // Por ahora, simularemos un inicio de sesión exitoso y redirigiremos.
        // PODRÍAS AÑADIR UNA VALIDACIÓN SIMPLE PARA PRUEBA, POR EJEMPLO:
        // if (username === 'test@example.com' && password === 'password123') {
            // alert('¡Inicio de sesión exitoso! Redirigiendo...');
            window.location.href = 'main_page.html'; // REDIRIGE A LA PÁGINA PRINCIPAL
        // } else {
            // alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        // }

        // Si tuvieras un backend real, el código sería algo como esto:
        /*
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // alert('¡Inicio de sesión exitoso!'); // Opcional
                window.location.href = 'main_page.html'; // Redirigir a la página principal
            } else {
                alert('Error de inicio de sesión: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar iniciar sesión.');
        });
        */
    });
});
    });
});
