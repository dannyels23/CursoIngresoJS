function mostrar()
{
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if (edad < 18 && (estado == "Casado" || estado == "Divorsiado")){
		alert("Es muy pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN