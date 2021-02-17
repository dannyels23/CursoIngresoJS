function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){
		case "Enero":
			alert("Que comience bien el año");
			break;
		case "Marzo":
			alert("a Clases !!!!!");
			break;
		case "Julio":
			alert("Se vienen las Vacaciones !!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas");
			break;
		default:
			alert("Es alguno de los otros meses");
	}



}//FIN DE LA FUNCIÓN