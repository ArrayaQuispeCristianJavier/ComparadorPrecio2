let producto =
{
 nombreProducto:"",
 precioProducto:0,
 nombreLocal: ""
}
let Productos = [];
document.getElementById("RegistroProducto").onclick = () =>
{
    /*producto.precioProducto = Number(document.getElementById("PrecioProducto").value);
    producto.nombreProducto = document.getElementById("NombreProducto").value;
    producto.nombreLocal = document.getElementById("NombreComercio").value;
*/
    //guardarProductos(producto);
    const precio = document.getElementById("PrecioProducto").value;
    const nombre =  document.getElementById("NombreProducto").value;
    const local = document.getElementById("NombreComercio").value;
    Productos.push({nombre,precio,local});
    //console.log(Productos.producto.precio);

    document.getElementById("PrecioProducto").value = "";
    document.getElementById("NombreProducto").value = "";
    document.getElementById("NombreComercio").value = "";
    
            console.log(nombre);
            console.log("$"+precio);
            console.log(local);

/*Productos.forEach(function(elementos)
{
    console.log(elementos.precio);
});*/

};

document.getElementById("enlistar").onclick = () =>
{
    Productos.forEach(function(elementos)
{
    console.log(elementos.precio);
    
});
};


/*function guardarProductos(producto)
{
    producto.push(Productos);
};*/