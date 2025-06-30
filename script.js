let inventario = [];
let fiados = [];

function agregarProducto() {
  const nombre = prompt("Nombre del producto:");
  const cantidad = prompt("Cantidad:");
  const precio = prompt("Precio:");

  if (nombre && cantidad && precio) {
    inventario.push({ nombre, cantidad: Number(cantidad), precio: Number(precio) });
    actualizarInventario();
  }
}

function actualizarInventario() {
  const cuerpo = document.querySelector("#tabla-inventario tbody");
  cuerpo.innerHTML = "";

  inventario.forEach((prod, index) => {
    cuerpo.innerHTML += `
      <tr>
        <td>${prod.nombre}</td>
        <td>${prod.cantidad}</td>
        <td>$${prod.precio.toFixed(2)}</td>
        <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
      </tr>
    `;
  });

  document.getElementById("total-productos").textContent = inventario.length;
}

function eliminarProducto(index) {
  inventario.splice(index, 1);
  actualizarInventario();
}

function agregarCliente() {
  const nombre = prompt("Nombre del cliente:");
  const debe = prompt("¿Cuánto debe?");
  const abono = prompt("¿Cuánto ha abonado?");

  if (nombre && debe) {
    fiados.push({ nombre, debe: Number(debe), abono: Number(abono) || 0 });
    actualizarFiados();
  }
}

function actualizarFiados() {
  const cuerpo = document.querySelector("#tabla-fiados tbody");
  cuerpo.innerHTML = "";
  let total = 0;

  fiados.forEach((cliente, index) => {
    const saldo = cliente.debe - cliente.abono;
    total += saldo;

    cuerpo.innerHTML += `
      <tr>
        <td>${cliente.nombre}</td>
        <td>$${cliente.debe.toFixed(2)}</td>
        <td>$${cliente.abono.toFixed(2)}</td>
        <td><button onclick="eliminarCliente(${index})">Eliminar</button></td>
      </tr>
    `;
  });

  document.getElementById("total-fiado").textContent = `$${total.toFixed(2)}`;
}

function eliminarCliente(index) {
  fiados.splice(index, 1);
  actualizarFiados();
}
