// Objetos

class Inflacion{
    constructor(mes, porcentaje){
        this.mes = mes
        this.porcentaje = porcentaje
    }
}


const inflacion2024 = [
    new Inflacion("enero", 20.6),
    new Inflacion("febrero", 13,2),
    new Inflacion("marzo", 11),
    new Inflacion("abril", 8.8),
    new Inflacion("mayo", 4.2),
    new Inflacion("junio", 4.6),
    new Inflacion("julio", 4),
    new Inflacion("agosto", 4.2),
    new Inflacion("septiembre", 3.5),
    new Inflacion("octubre", 2.7)
]





// Funciones

function determinarRecargo(valordelproducto,valorencuotas){
    const resultado1 = valorDelProductoEnCuotas - valorDelProducto
    return resultado1;
}

function determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto){
    const resultado2 = diferenciaValorProducto * 100 / valorDelProducto
    return resultado2;
}

function determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas){
    const resultado3 = porcentajeRecargo / cantidadDeCuotas
    return resultado3;
}

function determinarMesDeConsulta(fechaDeConsulta){
    const resultado4 = parseInt(fechaDeConsulta.getMonth())
    return resultado4;
}

function determinarMesAnterior(mesDeConsulta){
    const resultado5 = mesDeConsulta - 1
    return resultado5;
}

function determinarInflacionMesAnterior(mesAnterior){

}



// Inicio programa

const nombre = prompt("Cuál es tu nombre?")
let valorDelProducto = parseFloat(prompt( nombre + ", ingresá el valor del producto"))
let valorDelProductoEnCuotas = parseFloat(prompt("ahora ingresá el valor del producto en cuotas"))
let cantidadDeCuotas = parseInt(prompt("por último, decime la cantidad de cuotas que te dan"))
// const inflacionSeptiembre = 3.5
const fechaDeConsulta = new Date()




let diferenciaValorProducto = determinarRecargo(valorDelProducto,valorDelProductoEnCuotas)
let porcentajeRecargo = determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto)
let recargoMensual = determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas)
let mesDeConsulta = determinarMesDeConsulta(fechaDeConsulta)
let mesAnterior = determinarMesAnterior(mesDeConsulta)
let inflacionMesAnterior = determinarInflacionMesAnterior(mesAnterior)

if(diferenciaValorProducto == 0){
    alert( nombre + " hacelo en cuotas")
}else if(recargoMensual < inflacionSeptiembre){
    alert(nombre + " según la inflación del mes anterior, aún con el recargo, te convienen las cuotas ")
}else{ 
    alert(nombre + " pagalo de una")
}

let nuevaConsulta = prompt(nombre + " ¿querés hacer otra consulta?")


while(nuevaConsulta.toUpperCase() == ("SI" || "SÍ")){
    valorDelProducto = parseFloat(prompt( nombre + ", ingresá el valor del producto"))
    valorDelProductoEnCuotas = parseFloat(prompt("ahora ingresá el valor del producto en cuotas"))
    cantidadDeCuotas = parseInt(prompt("por último, decime la cantidad de cuotas que te dan"))

    diferenciaValorProducto = determinarRecargo(valorDelProducto,valorDelProductoEnCuotas)
    porcentajeRecargo = determinarPorcentajeDeRecargo(valorDelProducto,diferenciaValorProducto)
    recargoMensual = determinarRecargoMensual(porcentajeRecargo,cantidadDeCuotas)

    if(diferenciaValorProducto == 0){
        alert( nombre + " hacelo en cuotas")
    }else if(recargoMensual < inflacionSeptiembre){
        alert(nombre + " según la inflación del mes anterior, aún con el recargo, te convienen las cuotas ")
    }else{ 
        alert(nombre + " pagalo de una")
    }
    
    nuevaConsulta = prompt(nombre + " ¿querés hacer otra consulta?")

    if(nuevaConsulta.toUpperCase() == ("NO")){
      break;
    }
}

if(nuevaConsulta.toUpperCase() == ("NO")){
    alert(nombre + " gracias por usar nuestro servicio")
}