const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll(".card .btn");

// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(btnBotones);

const carritoObjeto = {};
const agregarAlCarrito = (e) => {
  //console.log(e.target.dataset.fruta);
  const producto = {
    title: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  if (carritoObjeto.hasOwnProperty(producto.title)) {
    producto.cantidad = carritoObjeto[producto.title].cantidad + 1;
  }

  carritoObjeto[producto.title] = producto;
  pintarCarrito(producto);
};

const pintarCarrito = (producto) => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.title;
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};
btnBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
