/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let nuevosueldo;

	sueldo = parseFloat(document.getElementById ("txtIdSueldo").value);
	aumento = sueldo * .1;
	nuevosueldo = sueldo + aumento;
	document.getElementById("txtIdResultado").value = nuevosueldo.toFixed(2);
	
}
