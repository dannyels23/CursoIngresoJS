/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let valor;
	let descuento;
	let importeFinal;

	valor = parseFloat(document.getElementById ("txtIdImporte").value);
	descuento = valor * .25;
	importeFinal = valor - descuento;
	document.getElementById("txtIdResultado").value = importeFinal.toFixed(2);
}
