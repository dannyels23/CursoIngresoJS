function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13){
		alert("Es niño");
	}
	if (edad >= 13 && edad <= 17){
		alert("Es adolecente");
	}
	if (edad > 17){
		alert("Es adulto");
	}



}//FIN DE LA FUNCIÓN