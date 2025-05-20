
const formulario = document.querySelector("#formulario");
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
})

const eliminarProducto = () => {
  
}

const agregarProducto = () => {
  
  }