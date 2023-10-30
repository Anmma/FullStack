// Base de datos contenedor de tablas 
//toda tabla necesita un ID un identificador unico

//acesso al archivo donde tengo la base de datos fetch(url con la api)
function obtenerEmpleados(){
    fetch("empleados.json") 
        .then(resultado =>{
            return resultado.json()  //respuesta tipo Json
        })
        .then(datos =>{
            let{empleados} = datos; //  DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES --- hay que ponerle el nombre de la tabla
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)
            });
        })
}

obtenerEmpleados();

//--------------------------------------------- 
//OTRA FORMA DE REALIZARLO 

async function obtenerEmpleados2(){
    let resultado = await fetch("empleados.json");
    let datos = await resultado.json();

    let{empleados} = datos; //  DESTRUCTURING 
    console.log(empleados);

    empleados.forEach(empleado => {
        console.log(empleado)
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.puesto)
    });

}

obtenerEmpleados2();

