

function cambiarImagen(direccion) {
    const imagenes = [
        'https://media.urgente24.com/p/193250b965bf1c4610cca33aa967dc6a/adjuntos/319/imagenes/002/615/0002615747/racing.jpg',
        'https://elcrackdeportivo.com.ar/__export/1711162849790/sites/elcrackdeportivo/img/2024/03/23/20240323_120049229_f1280x720-95888_227563_5050.jpg_1217713605.jpg',
        'https://www.racingclub.com.ar/fotos/estadio-presidente-peron/14.jpg'
    ];
    const imagen = document.getElementById('estadio-image');
    let indiceImagenActual = imagenes.indexOf(imagen.src);
    indiceImagenActual = (indiceImagenActual + direccion + imagenes.length) % imagenes.length;
    imagen.src = imagenes[indiceImagenActual];
}

document.getElementById('calcular-btn').addEventListener('click', function() {
    var tipoEntrada = document.getElementById('tipo-entrada').value;
    var categoriaPersona = document.getElementById('categoria-persona').value;
    var valorEntrada = calcularValorEntrada(tipoEntrada, categoriaPersona);
    mostrarResultado(valorEntrada);
});

function calcularValorEntrada(tipoEntrada, categoriaPersona) {
    var valor = 0;
    switch (tipoEntrada) {
        case 'popular_local':
            switch (categoriaPersona) {
                case 'hombre_adulto':
                    valor = 10000;
                    break;
                case 'mujer_adulta':
                    valor = 8000;
                    break;
                case 'menor':
                    valor = 5000;
                    break;
            }
            break;
        case 'preferencial':
            switch (categoriaPersona) {
                case 'hombre_adulto':
                    valor = 15000;
                    break;
                case 'mujer_adulta':
                    valor = 13500;
                    break;
                case 'menor':
                    valor = 10000;
                    break;
            }
            break;
        case 'platea':
            switch (categoriaPersona) {
                case 'hombre_adulto':
                    valor = 12500;
                    break;
                case 'mujer_adulta':
                    valor = 11000;
                    break;
                case 'menor':
                    valor = 9000;
                    break;
            }
            break;
    }
    return valor;
}

function mostrarResultado(valor) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = 'El valor de tu entrada es: ' + valor + ' USD';
}