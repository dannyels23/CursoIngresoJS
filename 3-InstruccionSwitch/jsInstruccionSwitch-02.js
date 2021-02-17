function mostrar()
{
	let mes;

    mes = document.getElementById("txtIdMes").value;

    switch (mes){
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert ("Falta para invierno");
            break;
        case "Julio":
        case "Agosto":
            alert ("Abrigate que hace Frio !!!");
            break;
        default:
        alert ("Ya paso el Frio. ahora calor !!!!!");
    }




}//FIN DE LA FUNCIÓN