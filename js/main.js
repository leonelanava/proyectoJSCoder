
/* Añadiendo los objetos al array global  */

ProductosSkincare.push(new Productos (1, "Limpiador en Gel", 50, "limpiador", "https://i.ibb.co/vmL6zGK/pexels-photo-5797994.jpg"));
ProductosSkincare.push(new Productos (2, "Limpiador Espuma", 30, "limpiador", "https://i.ibb.co/xS9mh79/pexels-photo-4735905.jpg"))
ProductosSkincare.push(new Productos (3, "leche limpiadora", 40, "limpiador", "https://i.ibb.co/rxKHVwp/pexels-photo-7319145.jpg"))
ProductosSkincare.push(new Productos (4,"serum vitamina C", 70, "serum", "https://i.ibb.co/FJJSQpm/pexels-photo-8131586.jpg"))
ProductosSkincare.push(new Productos (5,"serum hidratante", 80, "serum", "https://i.ibb.co/8N2YPf2/pexels-photo-5069440.jpg"))
ProductosSkincare.push(new Productos (6,"bloqueador gel", 60, "bloqueador", "https://i.ibb.co/vzVv0BF/pexels-photo-8155447.jpg"))
console.log(ProductosSkincare)

/* Añadiendo estos productos al HTML */
productosHTML(ProductosSkincare, '#productosContenedor');




/* BACK OFFICE  

Declaración de variables de entrada y salida - ID y Tipo 
let busquedaID = document.getElementById("insertarIDProducto")
let retornoID = document.getElementById("productoIDIngresado")

let busquedaTipo = document.getElementById("insertarTipoProducto")
let retornoTipo= document.getElementById("productoTipoIngresado")

*/
