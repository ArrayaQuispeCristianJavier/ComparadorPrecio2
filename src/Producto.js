let producto =
{
 nombreProducto:"",
 precioProducto:0,
 nombreLocal: ""
}
let Productos = [];//Definimos un array llamada Productos que almacena cada producto que se ingrese
document.getElementById("RegistroProducto").onclick = () =>
{
    
    const precio = Number(document.getElementById("PrecioProducto").value);
    const nombre =  document.getElementById("NombreProducto").value;
    const local = document.getElementById("NombreComercio").value;
    
    Productos.push({nombre,precio,local});

    mostrarProducto();
    
    
    
    
    


    

    document.getElementById("PrecioProducto").value = "";
    document.getElementById("NombreProducto").value = "";
    document.getElementById("NombreComercio").value = "";
     
    
    
    
            console.log(nombre);
            console.log("$"+precio);
            console.log(local);
       
};
/*Cuando se presione el boton de producto de menor precio se va a ejecutar la funcion*/
document.getElementById("productoDeMenorPrecio").onclick = () =>
{
productoMenorPrecio();
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

 
    
function productoMenorPrecio() 
{
    let productoBarato = null;//Se usara para tener el producto mas barato
    let registroProductoComparado = "";
    Productos.forEach((elemento)=>
    {
     let precio = elemento.precio;
     let nombre = elemento.nombre;
     let local = elemento.local;
     //verifica que no encontro ningun producto mas barato
     //Va a ver si el producto actual es igual al nombre del producto mas barato y si su precio es mas bajo
     //verifica si el nombre del producto no es igual al nombre del producto mas barato
     if (!productoBarato || (nombre === productoBarato.nombre && precio < productoBarato.precio) || (nombre !== productoBarato.nombre))
     {                                                      
            productoBarato = {
            nombre: nombre,
            precio: precio,
            local: local
        }; 
     }
     
//Si se encontro un producto mas barato va a ejecutarlo
if(productoBarato){
registroProductoComparado += `Nombre del producto: ${productoBarato.nombre} -- Precio del producto más bajo: $${productoBarato.precio} -- Nombre del local: ${productoBarato.local}<br>`;
}
});
document.getElementById("ProductosComparados").innerHTML = registroProductoComparado;
}  


document.getElementById("enlistar").onclick = () =>
{
    Productos.forEach(function(elementos)
{
    console.log(elementos.precio);   
});
};
