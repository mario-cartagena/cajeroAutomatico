// //  PROYECTO FINAL SPRINT 1

// // 1. Escribir una lista de usuarios con los siguientes datos: nombre, número
// // de documento, contraseña y tipo de usuario. El tipo de usuario será: 1:
// // administrador, 2: cliente. Guardarla en un array de objetos.

//1. Se crea el arreglo de objetos que contiene los distintos usuarios del sistema.
const listaUsuarios = [
  {
    nombre: "Mario Cartagena",
    documento: "1120387266",
    contrasena: "mario123",
    tipoUsuario: 1, // Administrador
  },
  {
    nombre: "Jefferson Perez",
    documento: "1120387654",
    contrasena: "jefferson123",
    tipoUsuario: 2, // Cliente
  },
  {
    nombre: "Camilo Varon",
    documento: "1120387999",
    contrasena: "camilo123",
    tipoUsuario: 2, // Cliente
  },
];

//2. Se crea el arreglo de objetos para el dinero que hay en el cajero, con su respectiva denominación y cantidad.
const dineroCajero = [
  {
    denominacion: 100000,
    cantidad: 0,
  },
  {
    denominacion: 50000,
    cantidad: 2,
  },
  {
    denominacion: 20000,
    cantidad: 2,
  },
  {
    denominacion: 10000,
    cantidad: 3,
  },
  {
    denominacion: 5000,
    cantidad: 2,
  },
];

// // 2. Realizar un programa que al inicio solicite ingresar documento y
// // contraseña, si el usuario no existe debe indicar que no existe y volver a
// // preguntar usuario y contraseña, si el usuario es administrador, debe
// // permitir cargar el cajero de la siguiente manera:

const loginCajero = () => {
  const documento = prompt("Ingresa tu número de documento: ");
  const contrasena = prompt("Ingresa tu contraseña: ");
  return {
    documento,
    contrasena
  };
};

const validarCredenciales = () => {
    // Esta variable me guarda los datos de la sesión con la que el usuario se auntenticó.
    let sesionIniciada = loginCajero();

    // Se realiza la validación
    let usuarioEncontrado = listaUsuarios.find((usuario) => 
        usuario.documento === sesionIniciada.documento && usuario.contrasena === sesionIniciada.contrasena
    );

        while (!usuarioEncontrado) {
            alert("Error: ¡El usuario ingresado no existe!");
            sesionIniciada = loginCajero();

            usuarioEncontrado = listaUsuarios.find((usuario) => 
                usuario.documento === sesionIniciada.documento && usuario.contrasena === sesionIniciada.contrasena
            );
        }

        return usuarioEncontrado;

            for (let i = 0; i < arrayUsers.length; i++) {
                if (arrayUsers[i].documento == documento && arrayUsers[i].contrasena == password) {
                usuarioEncontrado = true;
                // console.log("Entraste");
                if (arrayUsers[i].tipoUsuario === 1) {
                    console.log("Bienvenido Administrador: " + arrayUsers[i].nombre);
                    cargarCajero();
                    //mostrarTotales();
                } else {
                    console.log("Bienvenido Cliente: " + arrayUsers[i].nombre);
                }
                break;
                }
            }

            if (!usuarioEncontrado) {
                console.log("Usuario no encontrado. Intente nuevamente.");
            }
};


// 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
const cargarCajero = () => {
    alert("El administrador "+listaUsuarios.nombre+ "va a depositar dinero.");
    let totalDinero = 0;

    // 4. Almacenar esta información en un array de objetos.
    // Necesito recorrer el arreglo para solicitar la cantidad de billetes por denominación que el usuario desea.
    dineroCajero.forEach((billete) => {
        const cantidadBilletes = parseInt(prompt(`Por favor ingrese la cantidad de billetes de ${billete.denominacion} que necesitas depositar: `));

        // Acumulo la cantidad de billetes por denominación.
        billete.cantidad += cantidadBilletes;
        // Se hace el total por denominación ingresada.
        const totalPorDenominacion = (billete.cantidad * billete.denominacion);
        // Sumo el total de todas las denominaciones para hallar el total general que hay en el cajero.
        totalDinero += totalPorDenominacion;
        //Se muestra la suma por cada denominación que hay en el cajero
        console.log(`Hay ${totalPorDenominacion} billetes de ${billete.denominacion} pesos.`);
    });

    // 5. Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
    console.log("El dinero que hay por denominación es: "+dineroCajero);
    console.log("El total del dinero que actualmente hay en el cajero es de: "+totalDinero);
};

// 6. Una vez el cajero esté cargado, debe volver a solicitar usuario y 
// contraseña, si es administrador, se repite el mismo proceso, sumar a la 
// cantidad actual, si es cliente debe proseguir de la siguiente manera:
// 7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en 
// consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el 
// inicio.

const retirarDinero = () =>{
    const cantidadARetirarStr = prompt("Ingresa la cantidad de dinero que deseas retirar: ");
    const cantidadARetirar = Number(cantidadARetirarStr);
};


// function cargarCajero (){

//     let cajero = {
//         billetes5: 0,
//         billetes10: 0,
//         billetes20: 0,
//         billetes50: 0,
//         billetes100: 0
//     };

//     cajero.billetes5 = parseInt(prompt("Ingrese cantidad de billetes de 5 mil pesos"));
//     cajero.billetes10 = parseInt(prompt("Ingrese cantidad de billetes de 10 mil pesos"));
//     cajero.billetes20 = parseInt(prompt("Ingrese cantidad de billetes de 20 mil pesos"));
//     cajero.billetes50 = parseInt(prompt("Ingrese cantidad de billetes de 50 mil pesos"));
//     cajero.billetes100 = parseInt(prompt("Ingrese cantidad de billetes de 100 mil pesos"));

//     console.log("Cajero cargado correctamente:");
//     console.log(cajero);

//     let total5 = cajero.billetes5 * 5000;
//     let total10 = cajero.billetes10 * 10000;
//     let total20 = cajero.billetes20 * 20000;
//     let total50 = cajero.billetes50 * 50000;
//     let total100 = cajero.billetes100 * 100000;
//     let totalGeneral = total5 + total10 + total20 + total50 + total100;

//     console.log(`Total de billetes de 5 mil pesos: ${cajero.billetes5} (total: ${total5})`);
//     console.log(`Total de billetes de 10 mil pesos: ${cajero.billetes10} (total: ${total10})`);
//     console.log(`Total de billetes de 20 mil pesos: ${cajero.billetes20} (total: ${total20})`);
//     console.log(`Total de billetes de 50 mil pesos: ${cajero.billetes50} (total: ${total50})`);
//     console.log(`Total de billetes de 100 mil pesos: ${cajero.billetes100} (total: ${total100})`);
//     console.log(`Total general: ${totalGeneral}`);

// }

// if(arrayUsers[i].tipoUsuario === documento && arrayUsers[i].contrasena === pasword){

// }else{
//     alert("¡El usuario no existe!");
//     // Volver a preguntar credenciales
// }

// const arrayBilletes = [
//   {
//     denominacion: 5000,
//     cantidad: 3,
//     tipo: [1, 2],
//   },
//   {
//     denominacion: 10000,
//     cantidad: 4,
//     tipo: [1, 2],
//   },
//   {
//     denominacion: 2000,
//     cantidad: 2,
//     tipo: [1, 2],
//   },
// ];

// const billete10mil = arrayBilletes.find((item) => item.denominacion == 10000);
// console.log("Billetes de 10 mil: ", billete10mil);
