document.addEventListener('DOMContentLoaded', function() {
    const prices = {
        desktop: {
            standard: 120,
            deluxe: 180,
            suite: 350
        },
        mobile: {
            standard: 100,
            deluxe: 150,
            suite: 300
        }
    };

    const servicePrices = {
        spa: 50,
        gym: 30,
        gourmet: 100
    };

    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const deviceType = isMobile ? 'mobile' : 'desktop';

    document.getElementById('price-standard').textContent = `$${prices[deviceType].standard} por noche`;
    document.getElementById('price-deluxe').textContent = `$${prices[deviceType].deluxe} por noche`;
    document.getElementById('price-suite').textContent = `$${prices[deviceType].suite} por noche`;

    if (deviceType === 'mobile') {
        const heroContent = document.querySelector('.hero-content p');
        heroContent.textContent += " ¡Reserva desde tu móvil y aprovecha precios exclusivos!";
    }

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedRoom = document.querySelector('input[name="room"]:checked').value;
        const selectedServices = Array.from(document.querySelectorAll('input[name="services"]:checked'))
            .map(service => service.value);

        let totalPrice = prices[deviceType][selectedRoom];

        selectedServices.forEach(service => {
            totalPrice += servicePrices[service];
        });

        const totalPriceElement = document.getElementById('total-price');
        totalPriceElement.textContent = `El total a pagar es: $${totalPrice}`;
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const registerMessage = document.getElementById('register-message');
        registerMessage.textContent = `¡Gracias por registrarte, ${name}! Hemos enviado un correo de confirmación a ${email}.`;
    });
});
