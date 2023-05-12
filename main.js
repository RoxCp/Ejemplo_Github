function saludar(){
    
    let destinatario = 'Comisión 11';
    
    console.log('Bienvenido ' + destinatario);
    
}
saludar();

//Ejemplo con argumentos
function saludar(nombre){
    let destinatario = nombre;
    console.log('Bienvenido ' + destinatario);
}
saludar('Pedro');

//Ejemplo con argumentos y operaciones
function cuadrado(num1){
    let numeroCuadrado = num1 * num1;
    console.log('El cuadrado de '+ num1 +' es: '+numeroCuadrado);
}
cuadrado(8);

       
function preciofinal(precioInicial){
    let pais = 'Brasil'
    if (pais == 'Argentina'){
        let impuesto = 0.21;
        let resultado = (precioInicial*impuesto)+precioInicial;
         console.log('Me cuesta en total' + resultado);
    } else{
        if (pais == 'Brasil'){
            let impuesto = 0.16;
            let resultado = (precioInicial*impuesto)+precioInicial;
            console.log('Me cuesta en total' + resultado);
            } else{
        let impuesto = 0.12;
        let resultado = (precioInicial*impuesto)+precioInicial;
        console.log('Me cuesta en total ' + resultado);}
    }
}
preciofinal(100);

//Tabla multiplicar del 2


