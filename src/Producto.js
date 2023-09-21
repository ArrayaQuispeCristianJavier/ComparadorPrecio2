let producto =
{
 nombreProducto:"",
 precioProducto:0,
 nombreLocal: ""
};
let Productos = [];
document.getElementById("RegistroProducto").onclick = () =>
{
    
    const precio = Number(document.getElementById("PrecioProducto").value);
    const nombre =  document.getElementById("NombreProducto").value;
    const local = document.getElementById("NombreComercio").value;
    
    Productos.push({nombre,precio,local});

    mostrarProducto();
    
    
    
    


    //console.log(Productos.producto.precio);

    document.getElementById("PrecioProducto").value = "";
    document.getElementById("NombreProducto").value = "";
    document.getElementById("NombreComercio").value = "";
     
    
    
    
            console.log(nombre);
            console.log("$"+precio);
            console.log(local);
       
};

document.getElementById("productoDeMenorPrecio").onclick = () =>
{
productoMenorPrecio();//Hacer otro boton para ejecutar la funcion
};
function mostrarProducto()
{
    let registroProducto = "";
    Productos.forEach(function(elemento)
    {
        registroProducto = registroProducto + `Nombre del producto: ${elemento.nombre} -- Precio del producto: $ ${elemento.precio} -- Nombre del local: ${elemento.local}<br>`;//br sirve para separar los productos e evitar que se muestre todo junto
    });
    document.getElementById("Registros").innerHTML = registroProducto;
}

 
    
function productoMenorPrecio() //VA A RECORRER EL PRODUCTO HACIA EL SIGUIENTE
{
    let productoBarato = null;//Mantiene el registro de los productos baratos
    Productos.forEach((elemento,indice,Productos)=>
    {
     let precio = elemento.precio;
     let nombre = elemento.nombre;
     let local = elemento.local;
     
     if (!productoBarato || precio < productoBarato.precio) 
     {
            productoBarato = {
            nombre: nombre,
            precio: precio,
            local: local
        }; 
     }
     
});

// Muestra los productos más baratos
//productoBarato.forEach(producto => 
//{
//productoBarato = productoBarato + `Nombre del producto: ${elemento.nombre}-- Precio del producto:$ ${elemento.precio}-- Nombre del local: ${elemento.local}<br>`;
if(productoBarato){
let ProductosBaratos = `Nombre del producto: ${productoBarato.nombre} -- Precio del producto mas bajo: $${productoBarato.precio} -- Nombre del local: ${productoBarato.local}`;
document.getElementById("productoMenorPrecio").innerHTML = ProductosBaratos;
}
//}
}  


/*document.getElementById("enlistar").onclick = () =>
{
    Productos.forEach(function(elementos)
{
    console.log(elementos.precio);   
});
};*/