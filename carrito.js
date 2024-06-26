const products = [
    { id: 1, name: "Camiseta Oficial Titular 2024", price: 65000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lQhf5-EOTLg6yK_dRwN-nHUPTmHlk5utyA&s", desc: "Camiseta original de Racing club" },
    { id: 2, name: "Camiseta Oficial Titular 2023", price: 60000, img: "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/2u6r97b7nusiblbwtujy57wdljso/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5", desc: "Camiseta original de Racing club" },
    { id: 3, name: "Camiseta Oficial Titular 2022", price: 55000, img: "https://http2.mlstatic.com/D_NQ_NP_824076-MLA52995283435_122022-O.webp", desc: "Camiseta original de Racing club" },
    { id: 4, name: "Camiseta Oficial Titular 2021", price: 50000, img: "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/bzokvrecw0wg0a8aarqkpwn0mx3l/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5", desc: "Camiseta original de Racing club" },
    { id: 5, name: "Camiseta Oficial Titular 2020", price: 50000, img: "https://marcadegol.com/fotos//2020/03/camisetas-kappa-de-racing-club-2020-titular.jpg", desc: "Camiseta original de Racing club" },
    { id: 6, name: "Camiseta Oficial Titular 2019", price: 50000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nLWPdr9vfyJt2MbddOyoY-MtSWeFbFhHaw&s", desc: "Camiseta original de Racing club" },
    { id: 7, name: "Camiseta Oficial Titular 2018", price: 52500, img: "https://http2.mlstatic.com/D_805031-MLA76601105081_052024-C.jpg", desc: "Camiseta original de Racing club" },
    { id: 8, name: "Camiseta Oficial Titular 2017", price: 45000, img: "https://http2.mlstatic.com/D_608241-MLA40451243559_012020-C.jpg", desc: "Camiseta original de Racing club" },
    { id: 9, name: "Camiseta Oficial Titular 2016", price: 45000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZqf6V8kACHq9HxyxVtxbesAr7NVFa1tqqQ&s", desc: "Camiseta original de Racing club" },
    { id: 10, name: "Camiseta Oficial Titular 2015", price: 50000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2qkbNPhsReSvcTBcyFVSl-23JPOG7oUfpKw&s", desc: "Camiseta original de Racing club" },
    { id: 11, name: "Camiseta Oficial Titular 2014", price: 70000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzItis-wTEO7fSSNgA56wUoCrF7qZXFuUCg&s", desc: "Camiseta original de Racing club" },
    { id: 12, name: "Camiseta Oficial Titular 2013", price: 62500, img: "https://www.racingclub.com.ar/fotos/camiseta-topper-2014-02-01-2014/gale-camiseta-1-2-1-14.jpg", desc: "Camiseta original de Racing club" },
    { id: 13, name: "Camiseta Oficial Titular 2012", price: 50000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoSXgtR33GV6r4pKXmbswffR8i6B9y9BdgA&s", desc: "Camiseta original de Racing club" },
    { id: 14, name: "Camiseta Oficial Titular 2011", price: 60000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpsqkfMm8-Q_t0eEa2tlQtQ-96RR8J2QdU5w&s", desc: "Camiseta original de Racing club" },
    { id: 15, name: "Camiseta Oficial Titular 2010", price: 57500, img: "https://http2.mlstatic.com/D_NQ_NP_916449-MLA70402166945_072023-O.webp", desc: "Camiseta original de Racing club" },
    { id: 16, name: "Camiseta Oficial Titular 2009", price: 45000, img: "https://http2.mlstatic.com/D_NQ_NP_816592-MLA52763611493_122022-O.webp", desc: "Camiseta original de Racing club" },
    { id: 17, name: "Camiseta Oficial Titular 2008", price: 60000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8ZaouWU1cwFI4a81vGbPUJcrm3p7Me3EvQ&s", desc: "Camiseta original de Racing club" },
    { id: 18, name: "Camiseta Oficial Titular 2007", price: 58000, img: "https://todosobrecamisetas.com/wp-content/uploads/RACING_535066067640c.bmp", desc: "Camiseta original de Racing club" },
    { id: 19, name: "Camiseta Oficial Titular 2006", price: 60000, img: "https://http2.mlstatic.com/D_NQ_NP_771541-MLA71370455282_082023-O.webp", desc: "Camiseta original de Racing club" },
    { id: 20, name: "Camiseta Oficial Titular 2005", price: 70000, img: "https://i.pinimg.com/736x/d1/2e/8a/d12e8a878b4d18ae99a8228f0d9ca133.jpg", desc: "Camiseta original de Racing club" },
    { id: 21, name: "Camiseta Oficial Titular 2004", price: 72500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHbE4aOs5EkZ0wYCeCckLDC4iRTgFaxuHmg&s", desc: "Camiseta original de Racing club" },
];

let carrito = [];
let productoTemporal = null;

document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("products");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>Precio: $${product.price}</p>
            <button onclick="agregarAlCarrito(${product.id})">Agregar al carrito</button>
        `;
        productContainer.appendChild(productElement);
    });

    document.getElementById("ver-carrito").addEventListener("click", mostrarCarrito);
    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("carrito").style.display = "none";
    });
    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);
    document.getElementById("ir-a-pagar").addEventListener("click", irAPagar);
});

function agregarAlCarrito(id) {
    const product = products.find(p => p.id === id);
    const productoEnCarrito = carrito.find(p => p.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...product, cantidad: 1 });
    }

    productoTemporal = product;
    mostrarMensajeProductoAgregado();
    actualizarCarrito();
}

function mostrarMensajeProductoAgregado() {
    const mensaje = document.getElementById("mensaje-producto");
    mensaje.innerHTML = `
        <p>Producto agregado con éxito!</p>
        <img src="${productoTemporal.img}" alt="${productoTemporal.name}" class="imagen-pequena">
        <button id="aceptar-producto">Aceptar</button>
        <button id="cancelar-producto">Cancelar</button>
    `;
    mensaje.style.display = "block";

    document.getElementById("aceptar-producto").addEventListener("click", aceptarProducto);
    document.getElementById("cancelar-producto").addEventListener("click", cancelarProducto);
}

function aceptarProducto() {
    const mensaje = document.getElementById("mensaje-producto");
    mensaje.style.display = "none";
    productoTemporal = null;
}

function cancelarProducto() {
    carrito = carrito.filter(item => item.id !== productoTemporal.id);
    const mensaje = document.getElementById("mensaje-producto");
    mensaje.style.display = "none";
    productoTemporal = null;
    actualizarCarrito();
}

function mostrarCarrito() {
    const carritoElement = document.getElementById("carrito-items");
    carritoElement.innerHTML = "";

    carrito.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.cantidad}</p>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        carritoElement.appendChild(itemElement);
    });

    const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
    document.getElementById("total").innerHTML = `Total: $${total}`;
    document.getElementById("carrito").style.display = "block";
}

function eliminarDelCarrito(id) {
    const productoEnCarrito = carrito.find(p => p.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad--;
        if (productoEnCarrito.cantidad === 0) {
            carrito = carrito.filter(item => item.id !== id);
        }
    }
    actualizarCarrito();
    mostrarCarrito();
}

function actualizarCarrito() {
    
   
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();  
}

function irAPagar() {
    window.location.href = "pagina-de-pago.html"; 
}
