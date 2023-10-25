let producto = {
    nombre : "tablet",
    precio:500
}

// OBJECT CONSTRUCTOR 
// CLASES --- EMPIEZAN CON MAYUSCULA (COMO BUENA PRACTICA)
function ProductoClase(nombre, precio, disponibilidad=false, categoria="play"){   // ()argumentos que pasan a ser mis propiedades / =false -- ME INDICA QUE ESTA INICIALIZADA EN FALSE
    this.nombreObjeto = nombre;
    this.precioObjeto= precio;   // this.dasdas son mis propiedades =fafad parametro
    this.categoria= categoria;
    this.disponibilidad = disponibilidad;
}

//CREAMOS UNA INSTANCIA (llamar y evaluar)

let producto2 = new ProductoClase("Monitor curvo", 800,true, "tech"); //EL ORDEN ES POR LOS PARAMETROS
let producto3= new ProductoClase("PC", 1800);
let producto4= new ProductoClase("Reloj", 800);

console.log(producto2);



// EJERCICIO 
// CREAR UN OBJETO OBJECT CONSTRUCTO
// LLAMADO FECHA CON PROPIEDADES AÑO,MES, DIA , DAR 4 VALORES DISTINTOS

let fecha ={};
function FechaClase(año,mes,dia){
    this.añoObjeto= año;
    this.mesObjeto=mes;
    this.diaObjeto=dia
}

let fechaX = new FechaClase(2023,"Octubre",25);
console.log(fechaX);
let fechaY = new FechaClase(2023,"Octubre",25);
console.log(fechaX);
let fechaZ = new FechaClase(2023,"Octubre",25);
console.log(fechaX);

// .PROTOTYPE me premite crear funciones en el CONSTRUCTOR DE OBJETO ej PRODUCTOCLASE

ProductoClase.prototype.formatearProducto = function(){
    console.log(`El producto ${this.nombreaObjeto} tiene un precio de ${this.precioObjeto}`)
};

let producto5 = new ProductoClase("Movil", 500,true, "tech"); //EL ORDEN ES POR LOS PARAMETROS
let producto6= new ProductoClase("Notebook", 1500, false, "tech");
let producto7= new ProductoClase("Tostadora", 500, true, "electrodomesticos");

console.log(producto5);
console.log(producto6);
console.log(producto7);

// OTRA FORMA DE CREAR OBJETOS MEDIANTES CONTRUCTORES

class ProductoClase2{
    constructor(nombre, precio){
        this.nombreObjeto2 = nombre;
        this.precioObjeto2= precio;
    }
    formatearProducto2(){  //METODO
    return(`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2}`)
}
descuento(){
    return(`El precio final con el descuento ${this.precioObjeto2*(1-0.2)}`)
}
}

//INSTANCIAS
let producto8 = new ProductoClase2("TV nueva", 900);
console.log(producto8.formatearProducto2());
// EJERCICIO DESCUENTO 20%
console.log(producto8.descuento())
// 


// HERENCIA 

class Libro{
    constructor (nombre, precio, isbn){  //ES UNA FUNCION EN SI 
    this.nombre1 = nombre;
    this.precio1 = precio;
    this.isbn1= isbn;
}
}



let libro1 = new Libro("Martin Fierro", 200 , 122234324); //NEW para crear OBJETOS a partir de la CLASE
console.log(libro1);

//HERENCIA de PROPIEDADES --- REUTILIZAR UNA CLASE
// EXTENDS === HEREDA
//PONGO TODAS LAS PROPIEDADES, NUEVAS Y HEREDADAS 
//TODAS LAS QUE VAN HEREDADAS VAN DENTRO DE LA PALABRA SUPER
class Biblioteca extends Libro{    
    constructor(nombre,precio,isbn,categoria){   
        super(nombre,precio,isbn);  
        this.categoria = categoria;
    }
    formatearProducto3(){
        console.log(`El producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}

let libro2 = new Biblioteca("1Q84" , 20 , 231231 , "Fantasia");
console.log(libro2);

// EJERCICIO 

class Coche{
    constructor(marca, añoCompra, motor, matricula){
        this.marca1=marca;
        this.añoCompra=añoCompra;
        this.motor1=motor;
        this.matricula1=matricula;
    }
    numeroDeAños(){
        return(`Los años que tiene el coche: ${2023 - this.añoCompra}`)
    }
}

let coche1 = new Coche ("Fort", 2010, "asdjakd", "1233L");
console.log(coche1.numeroDeAños());
let cochePadre = new Coche ("Toyota", 2005, "asdjakd", "1233L");
console.log(cochePadre.numeroDeAños());

//EJERCICIO HERENCIA

class Itv extends Coche{
    constructor(añoCompra,matricula, añoItv){
        super (undefined, añoCompra, undefined ,matricula);
        this.añoItv = añoItv;
    }
    proximaItv(){
        return(`El tiempo que me falta para la proxima ITV ${this.añoItv - 2023}`)
    }
}

let coche3= new Itv (2016, "dasdas", 2026);
console.log(coche3.proximaItv())
