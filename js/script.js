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
};


// 3. Solicitar la cantidad de billetes de 5, 10, 20, 50 y 100 mil pesos COP.
const cargarCajero = () => {
    alert("El administador va a depositar dinero");
    let totalDinero = 0;

    // 4. Almacenar esta información en un array de objetos.
    // Necesito recorrer el arreglo para solicitar la cantidad de billetes por denominación que el usuario desea.
    dineroCajero.forEach((billete) => {
        const cantidadBilletes = parseInt(prompt(`Por favor ingrese la cantidad de billetes de ${billete.denominacion} que necesitas depositar: `));
        const cantitadEnteraDeBilletes = Number(cantidadBilletes);

        // Acumulo la cantidad de billetes por denominación.
        billete.cantidad += cantitadEnteraDeBilletes;
        // Se hace el total por denominación ingresada.
        const totalPorDenominacion = (billete.denominacion * billete.cantidad);
        // Sumo el total de todas las denominaciones para hallar el total general que hay en el cajero.
        totalDinero += totalPorDenominacion;
        //Se muestra la cantidad total de dinero por denominación que hay en el cajero
        console.log(`Hay ${totalDinero} en billetes de ${billete.denominacion} pesos.`);
    });

    // 5. Una vez tenga la información, debe mostrar en consola la suma por cada denominación y el total general.
    console.log("El dinero que hay por denominación es: ", dineroCajero);
    console.log("El total del dinero que actualmente hay en el cajero es de: "+totalDinero);
};

// 6. Una vez el cajero esté cargado, debe volver a solicitar usuario y 
// contraseña, si es administrador, se repite el mismo proceso, sumar a la 
// cantidad actual, si es cliente debe proseguir de la siguiente manera:
// 7. Si el cajero no tiene dinero cargado, debe aparecer un mensaje en 
// consola: “Cajero en mantenimiento, vuelva pronto.” Y reiniciar desde el 
// inicio.

const retirarDinero = (arrayDineroCajero) => {

    let totalDineroCajero = 0;
    arrayDineroCajero.forEach((billete) => {
        totalDineroCajero += billete.denominacion * billete.cantidad;
    });

    console.log("Total de dinero que tiene el cajero: "+totalDineroCajero);

    const cantidadARetirarStr = prompt("Ingresa la cantidad de dinero que deseas retirar: ");
    const cantidadARetirar = Number(cantidadARetirarStr);

    const diferencia = totalDineroCajero - cantidadARetirar;
    console.log("Diferencia: ", diferencia);

    if(diferencia < 0){
        return {
            mensaje: "El cajero no tiene suficiente dinero para darle al cliente",
            devuelta: [],
        };
    } else if(diferencia === 0){
        return {
            mensaje: "",
            devuelta: [],
        };
    } else if(diferencia > 0){
        const arrayDevueltas = [];
        let devueltas = diferencia;

        // Cuando el cajero tiene suficiente sencillo para entregarle al cliente la cantidad total del retiro.
        dineroCajero.forEach((billete) => {
            const billetesADevolver = Math.floor(devueltas / billete.denominacion);
            if(billetesADevolver > 0){
                if(billetesADevolver <= billete.cantidad){
                    const billetes = {
                        denominacion: billete.denominacion,
                        cantidad: billetesADevolver,
                    };
                    arrayDevueltas.push(billetes);
                    billete.cantidad -= billetesADevolver;
                    devueltas -= billete.denominacion * billetesADevolver;
                } else{
                    const billetes = {
                        denominacion: billete.denominacion,
                        cantidad: billete.cantidad,
                    };
                    arrayDevueltas.push(billetes);
                    devueltas -= billete.denominacion * billetes.cantidad;
                    billete.cantidad = billete.cantidad > 0 ? 0 : 0;
                }
            }
        });

        // Cuando en el cajero no hay sencillo.
        if(devueltas){
            return {
                mensaje: "El cajero no tiene suficiente sencillo para completar el cambio.",
                devuelta: arrayDevueltas
            };
        } else {
            return {
                mensaje: "COMPLETADO",
                devuelta: arrayDevueltas
            };
        }
    }
};

const iniciarCajero = () =>{
    const usuarioEncontrado = validarCredenciales();
    if(usuarioEncontrado){
        // Acción que puede realizar el administrador
        if(usuarioEncontrado.tipoUsuario === 1){
            cargarCajero();
        } else {
            // Acción que puede realizar el cliente
            retirarDinero(dineroCajero);
        }
    }
};

// Se lanza el cajero
iniciarCajero();