/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num1 + num2;
	alert("La Suma es" + suma);

}

function restar()
{
	let num1;
	let num2;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = num1 - num2;
	alert("La Resta es" + resta);
}

function multiplicar()
{ 
	let num1;
	let num2;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	multi = num1 * num2;
	alert("La Multiplicacion es" + multi);
}

function dividir()
{
	let num1;
	let num2;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	division = num1 / num2;
	alert("La Division es" + division);
}

