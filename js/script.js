// destinos
let argentina = 7;
let chile = 7;
let peru= 7;
let stockGlobal = argentina+chile+peru;
let continuar = true;


do {
    let ingresaDestino = prompt("A que ciudad desesas viajar?").toLowerCase();
    if(ingresaDestino=="argentina" || ingresaDestino=="chile" || ingresaDestino=="peru"){
        var unidadesIngresadas = parseInt(prompt("¿Cuántos tickets deseas comprar?"));
    }
    switch(ingresaDestino){
        case "argentina":
            if(unidadesIngresadas <= argentina){
                argentina -= unidadesIngresadas;
                console.log("tickets vendidos"+ " " + unidadesIngresadas + " " + "para Buenos Aires ciudad de Argentina, disponibles" + " " + argentina);
                stockGlobal = argentina+chile+peru;
                alert("Obtuviste"+ " " + unidadesIngresadas + " " + "tickets para Argentina");
                break;
            }else{
                alert("no hay suficiente asientos disponibles");
                break;
            }
            case "chile":
            if(unidadesIngresadas <= chile){
                chile -= unidadesIngresadas;
                console.log("tickets vendidos"+ " " + unidadesIngresadas + " " + "para Santiago de Chile ciudad de Chile, disponibles" + " " + chile);
                stockGlobal = argentina+chile+peru;
                alert("Obtuviste"+ " " + unidadesIngresadas + " " + "tickets para Chile");
                break;
            }else{
                alert("no hay suficiente asientos disponibles");
                break;
            }
            case "peru":
            if(unidadesIngresadas <= peru){
                peru -= unidadesIngresadas;
                console.log("tickets vendidos"+ " " + unidadesIngresadas + " " + "para Lima ciudad de Perú, disponibles" + " " + peru);
                stockGlobal = argentina+chile+peru;
                    alert("Obtuviste"+ " " + unidadesIngresadas + " " + "tickets para Lima");
                    break;
                }else{
                alert("no hay suficiente asientos disponibles");
                break;
                    }
    default:
            alert("El destino ingresado no se encuentra en nuestro itinerario");
            break;
        }
    if (stockGlobal > 0){
        let seguirCompra = prompt("Si deseas otro ticket presiona Y para continuar, de lo contrario presiona N").toLowerCase();
        if (seguirCompra == "n"){
                continuar = false;
            }else{
                continuar == false;
            }
    }

}while ((continuar == true) && (stockGlobal > 0));
        if (stockGlobal == 0){
            alert("Sin Stock");
        }else{
            alert("Gracias por viajar con nosotros");
}