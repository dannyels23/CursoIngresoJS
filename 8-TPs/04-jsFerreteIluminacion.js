/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let precio = 35;
    let calculoprecio;
    let cantidad;
    let Marca;
    let descuento;
    let IIBB;


    cantidad = parseInt (document.getElementById ("txtIdCantidad").value);
    Marca = document.getElementById("Marca").value;

    switch (cantidad){
        case 1:
            document.getElementById("txtIdprecioDescuento").value = precio;
            break;
        case 2:
            precio = precio * 2;
            document.getElementById("txtIdprecioDescuento").value = precio;
            break;
        case 3:
            if (Marca == "ArgentinaLuz"){
                descuento = cantidad * precio * 15 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            } else if (Marca == "FelipeLamparas"){
                descuento = cantidad * precio * 10 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            } else {
                descuento = cantidad * precio * 5 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            }
            break;
        case 4:
            if (Marca == "ArgentinaLuz" || Marca == "FelipeLamparas"){
                descuento = cantidad * precio * 25 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            } else 
                descuento = cantidad * precio * 20 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            break;
        case 5:
            if (Marca == "ArgentinaLuz"){
                descuento = cantidad * precio * 40 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            } else 
                descuento = cantidad * precio * 30 / 100;
                calculoprecio = (cantidad * precio) - descuento;
                document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            break;
        case 6:
            descuento = cantidad * precio / 2;
            document.getElementById("txtIdprecioDescuento").value = descuento;
            break;
        default:
            descuento = cantidad * precio / 2;
            IIBB = cantidad * precio * 10 / 100;
            calculoprecio = (cantidad * precio) - descuento + IIBB;
            document.getElementById("txtIdprecioDescuento").value = calculoprecio;
            alert ("Usted pago de IIBB" +IIBB );
            break;
    }
        
   
   
            
 
 
              
    
                    
            
                   
            
        
        
        
    

}



