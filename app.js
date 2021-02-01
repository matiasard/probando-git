"use strict" //todo_ MODO ESTRICTO - Las variables tienen que ser declaradas

var nombre="sergio";
console.log("El nombre es: ",nombre)


function saludos(){
    let nombre = "Carlos";
    console.log(nombre)

    let edad = 20;
    console.log(edad)
}
saludos();

var numero = 35;
var cant = "10";
var NuevaCant= Number(cant)
var TextNumero = String(numero)

//* Fechas
//* var fecha = new Date();

//tODO - JSON -> JavaScript Object Notation
var persona = {nombre: "Sergio", Twitter: "Yacafx"};

var datoA = 10;
var datoB = 20;


//TODO -    ----------> OPERADORES <---------- 
//* SUMA +
var suma = datoA + datoB;
console.log("La suma de: "+ datoA +" + "+ datoB + " es igual a: "+ suma);

//* RESTA -
var resta = datoA - datoB;
console.log("La Resta de "+ datoA + " - "+ datoB +" es Igual a: "+ resta );

//* MULTIPLICACION *
var mult = datoA * datoB;
console.log("La MULTIPLICACION de "+ datoA + " * "+ datoB + " es igual a: "+ mult);

//* DIVISION /
var division = datoB / datoA;
console.log("La DIVISION de "+ datoB + " / "+ datoA+ " es igual a: "+ division);

//* MODULO o RESIDUO %
var modulo = datoB % datoA;
console.log("El MODULO de "+ datoB + " % "+ datoA + " es igual a: "+ modulo );

//* INCREMENTO ++
var incremento = datoA;
incremento++;
console.log("El incremento de "+ datoA + " es igual a: "+ incremento);

//* DECREMENTO --
var decremento = datoA;
decremento--;
console.log("el DECREMENTO de "+ datoA +" es: "+ decremento);



//TODO ------------> OPERADORES RELACIONALES <------------
console.log("--------> OPERADORES RELACIONALES <--------");
//* MAYOR QUE >
var mayorQue = datoA > datoB;
console.log("Es "+ datoA +" Mayor que "+ datoB +": "+ mayorQue);

//* MENOR QUE <
var menorQue = datoA < datoB;
console.log("Es "+datoA+" Menor que "+datoB+": "+menorQue);

//* MAYOR O IGUAL >=
var mayorIgual = datoA >= datoB;
console.log("Es "+datoA+" Mayor o Igual que "+datoB+": "+mayorIgual);

//* MENOR O IGUAL <=
var menorIgual = datoA <= datoB;
console.log("Es "+datoA+" Menor o Igual que "+datoB+": "+menorIgual);

//* IGUAL QUE ==
var igualQue = datoA == datoB;
console.log("Es "+datoA+" Igual Que "+datoB+": "+igualQue);

//* NO ES IGUAL QUE o  ES DIFERENTE QUE  !=
var diferente = datoA != datoB;
console.log("Es "+datoA+" Direferente de "+datoB+": "+ diferente);


//TODO ------------> OPERADORES LOGICO <------------
console.log("--------> OPERADORES LOGICO <--------");

//* OPERADOR Y o AND = &&
var and = (datoA > 10 && datoB > 10);
console.log("El resultado de la evalizacion AND es: "+ and);

//* OPERADOR O u OR = ||
var or = (datoA > 10 || datoB >10);
console.log("El resultado de la Evaluacion OR es: "+ or);

//* OPERADOR DE NEGACION o NOT = !
var not = !(datoA > 10);
console.log("El resultado de la Evaluacion Not es: "+ not);


//TODO ------------> OPERADORES de ASIGNACION <------------
console.log("--------> OPERADORES de ASIGNACION <--------");

//* ASIGNACION SIMPLE
var asigIgual = 15;
console.log("El resultado de la Asignacion simple es: ", asigIgual);

//* SUMAR Y ASIGNAR
var masIgual = 10;
masIgual += datoA // masIgual = masIgual + datoA
console.log("El resultado de la Asignacion += es: ", masIgual);

//* RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= datoA;
console.log("El resultado de la Asignacion -= es: ", menosIgual);

//* MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignacion *= es:", porIgual);

//* DIVIDIR Y ASIGNAR
var entreIgual = 20 ;
entreIgual /= datoA;
console.log("El resultado de la asignacion /= es:", entreIgual);

console.log("");
//TODO ------------> OPERADORES NEGATIVO <------------
console.log("--------> EN QUE CONSISTE EL OPERADOR NEGATIVO <--------");

var datoC = 15;
var datoD = -datoC;
console.log("El valor de datoC es "+ datoC + ", despues del operador NEGATIVO datoD es: "+ datoD);

console.log("");
//TODO ------------> OPERADORES TERNARIO o CONDICIONAL <------------
console.log("--------> OPERADORES TERNARIO o CONDICIONAL <--------");


//* Condicion ? TRUE : FALSE
var resultadoCondicion = datoA > datoB ? "Si es Mayor" : "No es Mayor";
console.log(resultadoCondicion);


//TODO ------------> CONDICIONAL IF -  ELSE<------------
console.log("--------> CONDICIONAL IF - ELSE IF - ELSE<--------");

var resultado ="Sin datos";

if (datoA < datoC){
    resultado = datoC+" Es Menor que "+ datoA;
} else if(datoA == datoC){
    resultado = datoC+" es igual a "+ datoA;
} else{
    resultado = datoA+" es Mayor que "+ datoC;
}

console.log("El resultado de la Evaluacion IF es: ", resultado);
console.log("");

//TODO ------------> ESTRUCTURA SWITCH <------------
console.log("--------> ESTRUCTURA SWITCH <--------");

var edad=20;
switch (edad) {
    case 10:
        resultado = "La edad es 10 Años";
        break;
        case 20:
        resultado = "La edad es 20 Años";
        break;
        case 30:
        resultado = "La edad es 30 Años";
        break;
    default:
        resultado = "Ningun caso concide";
        break;
}
console.log("El resultado de la Evaluacion con Numeros es: "+resultado);

//* EVALIACION CON CADENA DE TEXTO
console.log("");
var producto = "pc";

switch (producto) {
    case "TV","tv":
        resultado = "Se elegio la TV";
        break;
    case "Radio","radio":
        resultado = "Se elegio una Radio";
        break;
    case "PC","pc":
        resultado = "Se elegio la PC";
        break;
    case "Telefono","telefono":
        resultado = "Se elegio el Telefono";
        break;
    default:
        resultado = "No se eligio ningun producto";
        break;
}
console.log("El resultado de la Evaluacion con Cadena de Texto es: "+resultado);

console.log("");
//TODO ------------> CICLOS | LOOPS | ITERADORES <------------
console.log("--------> CICLOS | LOOPS | ITERADORES <--------");
//* - 2 TIPOS: Defnidos e Indefinidos 
//* - Definidos: CICLO FOR
//* - Indefinidos: CICLO WHILE y CICLO DO...WHILE

var productos = 5;

for (let contador = 0; contador < productos; contador++) {
    console.log('Producto #'+ contador);
    //debugger;
}

console.log("");
//TODO ------------> CICLOS WHILE | CICLO INDEFINIDO <------------
console.log("--------> CICLOS WHILE | CICLO INDEFINIDO <--------");

var productos2 = 4;

//* la Variable vale 4 y se va a decrementar hasta que sea menor que 0
while (productos2 > 0) {
    console.log('Productos vendidos: #'+ productos2);
    productos2--;
    //debugger;
}

console.log("");
//TODO ------------> CICLOS DO WHILE | CICLO INDEFINIDO <------------
console.log("--------> CICLOS DO WHILE | CICLO INDEFINIDO <--------");
var productos3 = 6;

do{
    console.log("Productos vendido (Do While): #"+ productos3);
    productos3--;
    //debugger;
}
while (productos3 >= 1)


console.log("");
//TODO ------------> CICLOS: CONTROL DE CICLOS <------------
console.log("--------> CICLOS: CONTROL DE CICLOS <--------");
//* - CONTINUE | BREAK


var cuenta = 0;

for (let contador2 = 0; contador2 <= 10; contador2++) {
    if (contador2 == 9){
        break;
    }
    if (contador2 % 2 == 0){
        continue;
    }
    cuenta++;
    //debugger;
}
console.log("Hay "+cuenta+ " numeros impares");


console.log("");
//TODO ------------> ESTRUCTURA BASICA DE FUNCION <------------
console.log("--------> ESTRUCTURA BASICA DE FUNCION <--------");

function saludar(){
    var saludo = "Hola, esto es una Funcion";
    console.log(saludo)
    return saludo;
}
saludar();

console.log("");
//TODO ------------> FUNCION: PARAMETROS DE UNA FUNCION <------------
console.log("--------> FUNCION: PARAMETROS DE UNA FUNCION <--------");

function sumar(num1, num2){
    
    console.log("La suma es: ", num1+num2 );
    
}
sumar(12,4);


console.log("");
//TODO ------------> FUNCION: INICIALIZACIÓN DE PARAMETROS <------------
console.log("--------> FUNCION: INICIALIZACIÓN DE PARAMETROS <--------");

//* Se puede inicializar un valor en caso de que no ingresen valor a la funcion

function contar(cantidad=20) {
    console.log("Total: ",cantidad);
}
contar(15); //* Pero si ingresan un valor, este reemplazara al valor inicializado anteriormente


console.log("");
console.log("--------> FUNCION: PARAMETRO REST <--------");
//* Cuando al Parametro ingresan mas valores de lo que habia previsto.

function cocinar(ingre1,ingre2, ...masIngredientes) {
    console.log("Ingrediente 1: ", ingre1);
    console.log("Ingrediente 2: ", ingre2);
    console.log("Mas Ingrediente: ", masIngredientes);
}
cocinar("Pollo", "tapas de empanada", "Recado", "Gaseosa", "Limon")


console.log("");
//TODO ------------> FUNCION: PARAMETROS SPREAD <------------
console.log("--------> FUNCION: PARAMETROS SPREAD <--------");
//* Si ya contamos con una opcion para poder RECIBIR N canidad de Parametros
//* Tambien deberiamos de contar con una OPCION para poder ENVIAR N Cantidad de Parametros y que no esten declarados todos estos parametros directamenete.



function cocinar2(ingrediente1, ingrediente2, ingrediente3, ...otros) {
    console.log("Ingrediente 1: ", ingrediente1);
    console.log("Ingrediente 2: ", ingrediente2);
    console.log("Ingrediente 3: ", ingrediente3);
    console.log("Otros: ",otros);
}
var ingredienteBase = ["Pollo", "Tomate"];

//* ¿COMO VAN A FUNCIONAR LOS PARAMETROS SPREAD?
//* A diferencia de "REST" debemos de DECLARARLO en la Invocacion.
cocinar2(...ingredienteBase, "Arroz", "Queso", "Hueve", "Gaseosa");
//* Yo estoy enviando primero Parametros que se esparza con los que ya existen (ingredienteBase).
//* Y posteriormente estoy recibiendo Parametros de Tipo REST. Asi entonces yo ya puedo tener una COMBINACION poderosa  de los tipoes de parametros que puedo estar recibiendo



console.log("");
//TODO ------------> FUNCION: FUNCIONES ANONIMAS <------------
console.log("--------> FUNCION: FUNCIONES ANONIMAS <--------");

//* Esto NOS PERMITE NO AASIGNARLE a un NOMBRE a un conjunto de instrucciones que deseemos ejecutarlo sin necesidad de asociarlo. Esto lo podemos utilizar comúnmente cuando tenemos un "callback" o cuando queremos nosotros aislar una función de algún otro elemento.

/*( //* Podemos hacerlo de manera aislada. ¿Esto cómo es? Vamos a escribir la sintaxis de DOS Paréntesis seguidos, esto nos permite AISLAR NUESTRA FUNCION.
    function(){
        var mensaje = "Hola de nuevo ";
        console.log(mensaje);
    }
)()
*/
//*todo- Ahora vamos a escribir FUNCION ANONIMA DE UNA MANERA DISTINTA:

//* ESTE TIPO DE CODIGO LO VEAS REGULARMENTE al momento de estar trabajando con JS.

var saludar2 = function(nombres){
    var mensaje = "Hola de nuevo "+ nombres;
    return mensaje;
} 
//* FUNCIONES ANONIMAS DE ESTA FORMA ES BASTANTE COMUN Y TE LO ENCONTRARAS EN TODOS LOS CODIGOS QUE ESTES REVISANDO AL REDEDOR DE INTERNET.
//* Y TAMBIEN CUANDO TRABJES CON LOS "CALLBACK"



console.log("");
//TODO ------------> FUNCION: CALLBACK <------------
console.log("--------> FUNCION: CALLBACK <--------");

//* Tambien podemos RECIBIR FUNCIONES COMO PARAMETROS, recibir funciones como parametros es MUY COMUN

//* Una función de CALLBACK Es una Función que se Pasa A Otra Función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción

function calcular(dato1, dato2, sumarCB, restarCB){
    var suma = dato1 + dato2;
    var restar = dato1 - dato2;

    sumarCB(suma);
    restarCB(restar);
}

calcular(4, 6, function (resultado){
    console.log("Suma: ", resultado);
}, function (resultado) {
    console.log("Resta: "+ resultado);
})



console.log("");
//TODO ------------> FUNCION: ARROW | FAT ARROW | LAMBDA <------------
console.log("--------> FUNCION: ARROW | FAT ARROW | LAMBDA <--------");

var saludar2 = nombre => "Hola " + nombre;
console.log(saludar2("Lucas"));

var sumar2 = sumaParametro => sumaParametro+10;
console.log(sumar2(5));

var calcular = (dato1, dato2) => dato1 + dato2;
console.log(calcular(40,6));

var generar = (dato1, dato2) => {
    var dato3 = 100;
    return dato1+dato2+dato3;
}
console.log(generar(10,60));

//* Y por ultimo tenemos otra variante, donde simplemente no enviaremos ningun parametro.
//* Y al NO ENVIAR Ningún Parámetro, solamente tenemos que especificar el símbolo de los paréntesis y después aquí hacer un'return'del contenido que vamos a utilizar. Como puedes ver, la función de tipo "arrow" es bastante

var validar = () => {
    return "Validacion correcta"
}
console.log(validar());
//todo_ COMO PUEDES VER LAS FUNCIONES TIPO "ARROW" ES BASTANTE VERSATILES, lo único que tenemos que hacer es adaptarla dependiendo de las acciones que tenemos que ejecutar.



console.log("");
//TODO ------------> FUNCION: USO DEL OPERADOR  THIS <------------
console.log("--------> FUNCION: USO DEL OPERADOR  THIS <--------");

const boton = document.querySelector(' .boton');
/*
boton.addEventListener('click', function () { //* addEventListener escucha
    //console.log('Boton pulsado'); //* Si Pulsa el boton aparece el msj
    console.log(this.innerHTML); //* Si Pulsa el boton obtengo el textodel HMTL
})
*/
//TODO- Hay una GRAN DIFERENCIA CUANDO DEJAMOS DE TRABAJAR CON FUNCION ANONIMA TRADICIONAL y COMENZAMOS A TRABAJAR CON UNA FUNCION DE TIPO "ARROW" o "ARROW FUNCTION"

//* VAMOS HACER UNA PRUEBA:

boton.addEventListener('click', () =>{
    console.log(this)
    this.location = "http://www.google.com";
})


//* Al dar clic vamos a ver que ahora nosotros no tenemos la etiqueta, tenemos acceso a la ventana completa y, por tanto, a todas sus propiedades y a sus métodos. Por ejemplo, el'localStorage', 'location', etc.

//* ¿Y qué sucede si nosotros queremos acceder a este contenido utilizando esta estructura? Simplemente no vamos a poder directamente, tendríamos que navegar sobre toda la ventana hasta encontrar el valor. Por eso mismo tenemos que decidir qué tipo de función anónima vamos a utilizar: una función anónima tradicional o una función anónima de tipo "Arrow Function"

//* Pero no todo es malo. De hecho, podemos sacar un poco de provecho. Ya que aquí nosotros tenemos acceso a la ventana, podemos acceder por ejemplo al objeto'location'del cual dispone la ventana y así nosotros podemos hacer un redireccionamiento. En este caso, vamos a hacer un redireccionamiento en'this. location' igual a'www. google. com'.




console.log("");
//TODO ------------> CREANDO TU PRIMER ARREGLO <------------
console.log("--------> CREANDO TU PRIMER ARREGLO <--------");

//* Hay 2 formas de hacer  Arreglo:
var platillo = [ "Empanadas", "Asado", "Napolitana"];

var videoEdit = new Array ("Videos", "Musica", "Efectos de Sonidos", "Imagenes");

console.log(Array.isArray (platillo), videoEdit);
console.log(platillo);
//* platillo.length: para saber cuanto indice hay en el arreglo, CONTANDO DESDE 1
console.log("\nHay Platillos "+ platillo.length + " en el menu");

//* Para accedir a un indice del Arreglo:  platillo[0]
console.log("El platillo seleccionado es: "+ platillo[1]);



console.log("");
//TODO ------------> ARREGLO MULTIDIMENSIONALES | ARREGLO DE ARREGLO <------------
console.log("--------> ARREGLO MULTIDIMENSIONALES | ARREGLO DE ARREGLO <--------");

var Menu = [platillo, videoEdit];
//* Para ACCEDER A UN INDICE DE UN ARREGLO MULTIDIMENCIONAL (Se cuenta desde la pocision 0).
console.log( Menu[0][2]);
console.log( Menu[1][3]);


console.log("");
//TODO ------------> ARREGLO: OPERACIONES BASICAS DE UN ARREGLO <------------
console.log("--------> ARREGLO: OPERACIONES BASICAS DE UN ARREGLO <--------");

//* PARA AGREGAR NUEVOS INDICE AL ARREGLO:  variable.push("Nuevo Elemento")
//platillo.push("Pollo");
//platillo.push("Sopa");

//* PARA QUITAR UN INDICE DEL ARREGLO:  variable.pop()
//platillo.pop() 

//* PARA CONVERTIR EN UNA CADENA DE TEXTO UN "ARRAY"  variable.join()
var mensaje2 = platillo.join();
console.log(mensaje2);



console.log("");
//TODO ------------> ARREGLO: GENERAR ARREGLO CON SPLIT() |  FROM() | OF() <------------
console.log("--------> ARREGLO: GENERAR ARREGLO CON SPLIT() |  FROM() | OF() <--------");

//* Generar un arreglo apartir de un texto.
var texto1 = "lapicera, hoja, resaltador, borrador";

var utilesArreglo = texto1.split(", ");

console.log(texto1);
console.log(utilesArreglo);



console.log("");
//TODO ------------> ARREGLO: ORDENANDO UN ARREGLO <------------
console.log("--------> ARREGLO: ORDENANDO UN ARREGLO <--------");

console.log("Antes ", platillo);

//* ORDENA EL ARREGLO EN ORDEN ALFABETICO: variable.sort()
platillo.sort();
console.log("Ordenado ", platillo);

//* Ordenarlo de Forma Reversa
platillo.reverse()
console.log("Reversa ", platillo);

platillo.reverse()
console.log("Reversa de nuevo", platillo);



console.log("");
//TODO ------------> ARREGLO: ITERANDO ARREGLOS CON FORR...IN <------------
console.log("--------> ARREGLO: ITERANDO ARREGLOS CON FORR...IN <--------");

var platillo2 = ["Sanwitch", "Napolitana", "Empanadas", "Papa fritas"]

//* Va a repetir tantas veces mida el Arreglo "platillo2"
for (let i in platillo2){
    console.log(platillo2[i])
}


console.log("");
//TODO ------------> ARREGLO: OTRA FORMA DE ITERAR ES CON ForEach <------------
console.log("--------> ARREGLO: OTRA FORMA DE ITERAR ES CON ForEach <--------");

//platillo2.forEach(platillos => console.log(platillo2));

platillo2.forEach( (platillos, i) => console.log(i, platillo2) );




console.log("");
//TODO ------------> ARREGLO: BUSCANDO EN UN ARREGLO <------------
console.log("--------> ARREGLO: BUSCANDO EN UN ARREGLO  (find)<--------");

//* Find no va a permitir iterar sobre un Arreglo sin necesidad de utilizar un Ciclo y apartir de esto, recuperar la informacion que yo quiero

var pElegido =  platillo2.find( platillo2 => platillo2 == 'Napolitana');

console.log("Valor buscado: ",pElegido);

//* Cuando trabajamos con JS, tenemos estructura mas complejas por EJ: un Objeto

var Menu2= [
    {
        nombre: 'Pancho',
        precio: 20,
        pais: 'Chile'
    },
    {
        nombre: 'Tacos',
        precio: 30,
        pais: 'Mexico'
    },
    {
        nombre: 'Choripan',
        precio: 40,
        pais: 'Argentina'
    },
    {
        nombre: 'Dulce de Leche',
        precio: 40,
        pais: 'Argentina'
    }
];

var pElegido2 =  Menu2.find( i => i.nombre == 'Tacos');

console.log(pElegido2);


console.log("");
console.log("--------> ARREGLO: BUSQUEDA DE INDICE DE ELEMENTO  (findIndex)<--------");

var numPlatillo =  Menu2.findIndex( i => i.nombre == 'Tacos');
console.log(pElegido2, "Esta en el Indice: ", numPlatillo);



console.log("");
console.log("--------> ARREGLO: FILTAR ARREGLO  (Filter) <--------");

//* var pElegido =  platillo2.find( platillo2 => platillo2 == 'Napolitana');
//* .Filter() TRAE TODAS LAS INCIDENCIAS QUE COINCIDAN. 
var busquedaFiltro = Menu2.filter( i => i.pais == "Argentina"); 

console.log(busquedaFiltro);



console.log("");
console.log("--------> ARREGLO: VALIDACION DE ELELEMNTO DE UN ARREGLO  <--------");

//* PARA SABER SI HAY EN EL MENU PLATOS CON PRECIO MENOR A 20
var resultado3 = Menu2.some( i => i.precio <= 20 );
console.log(resultado3)


var resultado4 = Menu2.every( i => i.precio <= 60 ); 
console.log("¿Todos los platillos cuestan menos de 10? ", resultado4);





console.log("");
//TODO ------------> ENTENDIENDO EL DOM Y EL BOM <------------
console.log("--------> ENTENDIENDO EL DOM Y EL BOM  (find)<--------");

var Boton = document.getElementById("Boton");

Boton.addEventListener('click', () => {
    console.log(window.location.href)
    //window.location.href = "https://www.youtube.com/";
})

//* Obtener todos los elemento por su nombre de TAG
var todosLosParrafos = document.getElementsByTagName('p');

//* Obtener todos los elemento por su nombre de ETIQUETA
var parrafoPorClase = document.getElementsByClassName('principal')[0].textContent;

Boton.addEventListener('click', () => {
    console.log(todosLosParrafos);
    console.log(parrafoPorClase);
    //* Tambien podemos hacer que cambie el color del boton cuando es clickeado
    //* boton.style.color.background = "green;"
})

//TODO - PROPIEDADES Y MEOTODOS DE BOM

//TODO - TRABAHAR CON DATOS REMOROTOS O EXTERNOS (API)

//todo - Estructura de Datos


//todo - menojo de errores
console.log("--------> MANEJO DE ERRORES EN JAVASCRIPT  (try) <--------");

try{
    var x=y;
}catch (error){
    console.log(error.message);
    console.log(error.name);
}


