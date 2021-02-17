/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombres;
	let edad;

	nombres = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama "+nombres+" y tiene "+edad+" años");


}

