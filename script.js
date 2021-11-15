// Mi idea de proyecto final es poder aplicar javascript al e-commerce que hice en el curso de desarrollo web
// Para el esqueleto html use el index mas basico que tenia armado, en realidad ya tengo toda la pagina armada pero lo queria dejar mas simple para esta entrega

//Simulador para calcular el monto total de tu compra
function calcularPrecio (precioPrenda, cantidadPrenda, porcentajeDescuento, costoEnvio) {
    //calculo los descuentos
    let descuento = (precioPrenda * porcentajeDescuento) / 100;
    //se lo aplico al precio
    let precioConDescuento = precioPrenda - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de prendas
    return (precioConDescuento * cantidadPrenda) + costoEnvio;
}

const envio = 800; //valor aproximado del costo de envio promedio dentro de CABA

//le pedimos al usuario el precio de la prenda, la cantidad y el porcentaje del descuento
let prenda = parseFloat(prompt("Ingrese el precio de la prenda que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar de esta prenda:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:")) //los cupones en este caso serian los porcentajes de descuento, lo pongo asi para que quede mas visual

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(prenda, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");
