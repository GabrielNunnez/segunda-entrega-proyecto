const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaProductos = document.querySelector("#lista-productos");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  listaProductos.addEventListener("click", agregarProducto);

  carrito.addEventListener("click", eliminarProducto);

  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];

    limpiarHTML();
  });
}
function agregarProducto(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const productoSeleccionado = e.target.parentElement;
    leerDatosProducto(productoSeleccionado);
  }
}

function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-producto")) {
    const productoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id !== productoID
    );

    carritoHTML();
  }
}
function leerDatosProducto(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector(".card-title").innerText,
    precio: producto.querySelector("h6").innerText,
    id: producto.querySelector("a").getAttribute("id"),
    cantidad: 1,
  };
  const existe = articulosCarrito.some(
    (producto) => producto.id === infoProducto.id
  );
  if (existe) {
    const producto = articulosCarrito.map((producto) => {
      if (producto.id === infoProducto.id) {
        producto.cantidad++;
        return producto;
      } else {
        return producto;
      }
    });
    articulosCarrito = [...producto];
  } else {
    articulosCarrito = [...articulosCarrito, infoProducto];
  }
  carritoHTML();
}
function carritoHTML() {
  limpiarHTML();
  articulosCarrito.forEach((producto) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td>
    <a href="" class="borrar-producto" id="${producto.id}">x</a>
    </td>`;
    contenedorCarrito.appendChild(row);
  });
}
function limpiarHTML() {
  contenedorCarrito.innerHTML = "";
}
const guardarCarrito = contenedorCarrito
const enJSON = JSON.stringify(contenedorCarrito);
localStorage.setItem("guardarCarrito", enJSON);
// operador and
const carritoVacio = [];
carritoVacio.length === 0 && console.log("el carrito esta vacio");
//destrututando un array
const itemsTienda = [
  "id:1, producto: Cuchilla Artesanal Parrilla y Cocina Para Asado, precio: 5.476",
  "id:2, producto: Cuchillo Artesanal De Campo Disco Arado Acero Asado, precio: 7.000",
  "id:3, producto: Cuchillo Artesanal Cabo Madera Con Cinco Virolas De Alpaca, precio: 6.000",
  "id:4, producto: Cuchillos Artesanales Trenzado Alpaca Cincelado, precio: 3.500",
  "id:5, producto: Juego Asador Kit Asado Set Parrillero X5 Pala Atizado Combo, precio: 5.500",
];
const [a] = itemsTienda
console.log(a)