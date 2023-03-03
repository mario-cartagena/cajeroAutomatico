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

const cajeroIniciado = () => {
  const documento = prompt("Ingrese su documento");
  const constrasena = prompt("Ingrese su contraseña");
  return {
    documento,
    constrasena
  };
};

const validarCredenciales = () => {
    let sesionIniciada = cajeroIniciado();

    let usuarioEncontrado = listaUsuarios.find((usuario) => {
        usuario.documento
    });
};

  
// // 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
// // 4. Almacenar esta información en un array de objetos.
// // 5. Una vez tenga la información, debe mostrar en consola la suma por cada
// // denominación y el total general.

// let usuarioEncontrado = false;

// while (!usuarioEncontrado) {
//   let documento = prompt("Ingrese su documento");
//   let password = prompt("Ingrese su contraseña");

//   for (let i = 0; i < arrayUsers.length; i++) {
//     if (arrayUsers[i].documento == documento && arrayUsers[i].contrasena == password) {
//       usuarioEncontrado = true;
//       // console.log("Entraste");
//       if (arrayUsers[i].tipoUsuario === 1) {
//         console.log("Bienvenido Administrador: " + arrayUsers[i].nombre);
//         cargarCajero();
//         //mostrarTotales();
//       } else {
//         console.log("Bienvenido Cliente: " + arrayUsers[i].nombre);
//       }
//       break;
//     }
//   }

//   if (!usuarioEncontrado) {
//     console.log("Usuario no encontrado. Intente nuevamente.");
//   }
// }

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

const arrayBilletes = [
  {
    denominacion: 5000,
    cantidad: 3,
    tipo: [1, 2],
  },
  {
    denominacion: 10000,
    cantidad: 4,
    tipo: [1, 2],
  },
  {
    denominacion: 2000,
    cantidad: 2,
    tipo: [1, 2],
  },
];

const billete10mil = arrayBilletes.find((item) => item.denominacion == 10000);
console.log("Billetes de 10 mil: ", billete10mil);
