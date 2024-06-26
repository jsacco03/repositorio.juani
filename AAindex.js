

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

function cambiarImagencarrusel(direccion) {
    const imagenes = [
    'https://www.elfutbolero.com.ar/image/elfutbolerocomar/en-estos-dias-trascendio-una-noticia-en-redes-sociales-de-una-propuesta-de-los-hinchas-de-la-academia-para-el-recibimiento-frente-a-atletico-nacional-1704344020-hq.webp',
    'https://www.clarin.com/2022/02/15/VMGIPKNY3_2000x1500__1.jpg',
    'https://i0.wp.com/www.quelapaseslindo.com.ar/wp-content/uploads/guardia-imperial.jpg?resize=580%2C261',
    'https://barrabrava.net/img/barras-bravas/la-guardia-imperial-racing-club/la-guardia-imperial-racing-club-397-110555-barrabrava-net.jpg',
    'https://nddinfosystems.net/onetraveloffice/img/img-celetours/prog_carousel/racing-hinchada.jpg',
    'https://img.lagaceta.com.ar/fotos/notas/2023/08/31/que-decia-cartel-fallido-recibimiento-hinchada-racing-equipo-1004574-100025.jpg',
    'https://media.tycsports.com/files/2021/11/21/362168/racing-iguala-con-colon-por-liga-profesional.jpg',
    'https://conlagentenoticias.com/wp-content/uploads/2019/12/racing2001.jpg',
    'https://media.tycsports.com/files/2023/09/30/624812/racing-recibimiento_862x485_wmk.webp',
    'https://www.elprimergrande.com/wp-content/uploads/2023/08/leandropepe91-e1691154348908.jpg'
    ];
    const imagen = document.getElementById('imagenes de racing');
    let indiceImagenActual = imagenes.indexOf(imagen.src);
    indiceImagenActual = (indiceImagenActual + direccion + imagenes.length) % imagenes.length;
    imagen.src = imagenes[indiceImagenActual];
}

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    const agregarAlCarritoBtn = document.getElementById('agregar-al-carrito-btn');
    agregarAlCarritoBtn.addEventListener('click', agregarAlCarrito);
});

function calcularValorEntrada(sectorCancha, categoriaPersona) {
    let valor = 0;

    switch (sectorCancha) {
        case 'Popular_local':
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
        case 'Platea_preferencial':
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
        case 'Platea':
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
        case 'Visitante':
            switch (categoriaPersona) {
                case 'hombre_adulto':
                    valor = 15500;
                    break;
                case 'mujer_adulta':
                    valor = 15000;
                    break;
                case 'menor':
                    valor = 12000;
                    break;
            }
            break;
    }
    return valor;
}

function mostrarResultado() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    if (carrito.length === 0) {
        carritoDiv.innerHTML = '<p>No hay entradas seleccionadas.</p>';
    } else {
        
        const totalPorTipoYCateg = {};
        let totalGeneral = 0;

        carrito.forEach(entrada => {
            const { sectorCancha, categoriaPersona, cantidad } = entrada;
            const valorEntrada = calcularValorEntrada(sectorCancha, categoriaPersona);
            const costoTotal = valorEntrada * cantidad;
            totalGeneral += costoTotal;

            
            if (!totalPorTipoYCateg[sectorCancha]) {
                totalPorTipoYCateg[sectorCancha] = {};
            }
            if (!totalPorTipoYCateg[sectorCancha][categoriaPersona]) {
                totalPorTipoYCateg[sectorCancha][categoriaPersona] = 0;
            }
            totalPorTipoYCateg[sectorCancha][categoriaPersona] += cantidad;
        });

        
        carritoDiv.innerHTML += '<p>Entradas agregadas al carrito con éxito</p>';

        
        Object.keys(totalPorTipoYCateg).forEach(tipoEntrada => {
            const tipoDiv = document.createElement('div');
            tipoDiv.innerHTML = `<h3>${tipoEntrada}</h3>`;
            Object.keys(totalPorTipoYCateg[tipoEntrada]).forEach(categoria => {
                tipoDiv.innerHTML += `<p>${categoria}: ${totalPorTipoYCateg[tipoEntrada][categoria]}</p>`;
            });
            carritoDiv.appendChild(tipoDiv);
        });

        
        carritoDiv.innerHTML += `<p>Total: ${totalGeneral} ARS</p>`;
    }

    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    overlay.style.display = 'block';
    modal.style.display = 'block';
}

function agregarAlCarrito() {
    const tipoEntrada = document.getElementById('tipo-entrada').value;
    const categoriaPersona = document.getElementById('categoria-persona').value;
    const cantidadEntradas = document.getElementById('cantidad-entradas').value;

    if (tipoEntrada === '' || categoriaPersona === '' || cantidadEntradas === '') {
        alert('Por favor, seleccione el tipo de entrada, la categoría de persona y la cantidad de entradas.');
        return;
    }

    const cantidad = parseInt(cantidadEntradas);

    if (isNaN(cantidad) || cantidad < 1 || cantidad > 4) {
        alert('Por favor, seleccione una cantidad válida de entradas (entre 1 y 4).');
        return;
    }

    const entradas = {
        sectorCancha: tipoEntrada,
        categoriaPersona: categoriaPersona,
        cantidad: cantidad
    };

    carrito.push(entradas);
    mostrarResultado();
}

function cerrarModal() {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    overlay.style.display = 'none';
    modal.style.display = 'none';
}
