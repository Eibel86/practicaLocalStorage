
const formulario = document.querySelector("#formulario");
const tabla = document.querySelector("#tabla")
let nombreProducto = "";
let idProducto= "";
let arrProductos = JSON.parse(localStorage.getItem("producto")) || [];

let objProductos = {
  id: 1,
  nombre: "",
  cantidad: 1
}


formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
 // console.log(ev.target.nombre_producto.value);
  nombreProducto = ev.target.nombre_producto.value;
  let anadirgion = "-";
  idProducto = nombreProducto.split(" ").join("-") + anadirgion;
  console.log("idProducto: ", idProducto);
  let mached = false;
  arrProductos.forEach((item) => {
    console.log(item.nombre);
    if (item.nombre === nombreProducto){
      item.cantidad += 1;
      mached = true;
      console.log(item.cantidad);
    } 
  })

  if (!mached) {
    objProductos = {
      id:idProducto,
      nombre: nombreProducto,
      cantidad:1
    }
    arrProductos.push(objProductos);
  } else {
    console.log("nombre coincide, no se crea objeto")
  }
  localStorage.setItem("producto", JSON.stringify(arrProductos));
  
  crearTablaProducto();

})

tabla.addEventListener("click", (ev) => {
      console.log(ev.target.id);
      arrProductos.forEach((item, index, array) => {
        if (item.id === ev.target.id && item.cantidad > 1){
          item.cantidad -= 1;
        } else if (item.id === ev.target.id && item.cantidad <= 1){
          array.splice(index,1);
        }
      })
      console.log(arrProductos);
      localStorage.setItem("producto", JSON.stringify(arrProductos));
      crearTablaProducto();

  })

const crearTablaProducto = () => {
  const contenidoProductos = document.querySelector("#contenidoProductos");
  contenidoProductos.innerHTML = "";

  arrProductos.forEach((item, index, array) => {
    const tr = document.createElement("TR");
    const td1 = document.createElement("TD");
    const td2 = document.createElement("TD");
    const td3 = document.createElement("TD");
    const button = document.createElement("BUTTON");

    button.setAttribute("id", item.id);
    button.innerHTML = "Borrar";
    td1.innerHTML = item.nombre;
    td2.innerHTML = item.cantidad;

    td3.append(button);
    tr.append(td1, td2, td3);
    contenidoProductos.append(tr);
  })
}

const eliminarProducto = () => {
  
}

crearTablaProducto();
eliminarProducto();


const agregarProducto = () => {
  
  }