const contenedorQR = document.getElementById('contenedorQR');

// new QRCode( contenedorQR, 'https://blogandmar.netlify.app' );  objeto sin ser dinamico, con url definida

const formulario = document.getElementById('formulario')

const QR = new QRCode( contenedorQR );

formulario.addEventListener('submit', ( e ) =>{
    e.preventDefault();
    // acceder al valor del input
    QR.makeCode( formulario.link.value );
});

