
//ARRAY
//Se parte de un array vacio, y se va generando a medida que se añaden producto.
let arrProductos = JSON.parse(localStorage.getItem("producto")) || [];

//SELECTORES
const formulario = document.querySelector("#formulario");
const tabla = document.querySelector("#tabla")
const contenidoProductos = document.querySelector("#contenidoProductos");

// VARIABLES
let nombreProducto = "";
let idProducto= "";
let anadirgion = "-";
let mached = false;


//EVENTOS
/**
 * Funcion de llamada cuando se hace click en boton Agregar.
 * @param idProducto : String que se creara para filtrar.
 */
formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();// Evita el envío del formulario
  nombreProducto = ev.target.nombre_producto.value;
  idProducto = nombreProducto.split(" ").join("-") + anadirgion;
  

  /**
   * Funcion para crear objetos dentro del array, bien aumentando la cantidad 
   * si existe el nombre o creando un nuevo objeto si no existe el nombre.
   * invocando al final la funcion de crearTablaProducto.
   */
  arrProductos.forEach((item) => {
    if (item.nombre === nombreProducto){
      item.cantidad += 1;
      mached = true;
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
  }
  localStorage.setItem("producto", JSON.stringify(arrProductos)); 
  crearTablaProducto();
})

/**
 * Funcion de llamada cuando se hace click en boton Borrar.
 * @param idButton : String que se creara para filtrar.
 */
tabla.addEventListener("click", (ev) => {
  //Funcion donde va a restar la cantidad del producto y en el
  //caso de que la cantidad sea cero se elimina el objeto del array.
      arrProductos.forEach((item, index, array) => {
        if (item.id === ev.target.id && item.cantidad > 1){
          item.cantidad -= 1;
        } else if (item.id === ev.target.id && item.cantidad <= 1){
          array.splice(index,1);
        }
      })
      localStorage.setItem("producto", JSON.stringify(arrProductos));
      crearTablaProducto();
  })


//FUNCIONES
/**
 * Funcion para crear el contenido dinamico de la tabla de productos.
 */
const crearTablaProducto = () => {
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



//INVOCAR FUNCIONES
crearTablaProducto();
