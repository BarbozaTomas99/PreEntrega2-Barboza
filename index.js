/*Pre Entrega 2 - Calculadora de pago de cuotas - (La calculadora solicita ingresar los datos del producto/servicio (nombre, valor, coutas) y
 despues de terminar de ingresar todos los productos pregunta si se quiere ordenar, en caso de que no, muestra la lista con todos los productos y al final el pago mensual total*/

let productos = [];
let pagoTotalMensual = 0;

function pedirProducto() {
  let producto = prompt("Ingrese un producto/servicio");
  let valor = parseInt(prompt("Ingrese el valor del producto/servicio"));
  let cuotas = parseInt(prompt("Ingrese a cuántas cuotas se va a pagar"));
  let pagoMensual = valor / cuotas;

  pagoTotalMensual += pagoMensual;

  let productoObjeto = {
    nombre: producto,
    valor: valor,
    cuotas: cuotas,
    pagoMensual: pagoMensual
  };

  productos.push(productoObjeto);
}

function mostrarProductos() {
    productos.sort((a, b) => a.pagoMensual - b.pagoMensual);
    let mensaje = "";
    for (let i = 0; i < productos.length; i++) {
      mensaje += "Producto #" + (i + 1) + ": " + productos[i].nombre + 
                 "\nValor: $" + productos[i].valor + 
                 "\nCuotas: " + productos[i].cuotas + 
                 "\nPago mensual: $" + productos[i].pagoMensual + "\n\n";
    }
    mensaje += "Pago total mensual: $" + pagoTotalMensual;
    alert(mensaje);
}

function continuar() {
    let seguir = prompt("¿Desea ingresar otro producto/servicio? (s/n)");
    switch (seguir) {
        case "n":
            preguntarOrdenar();
            mostrarProductos();
            break;
        case "s":
            pedirProducto();
            continuar();
            break;
        default:
            alert("No se reconoce el comando, por favor ingresar solo S/N");
            continuar();
            break;
    }
}

function preguntarOrdenar() {
    let ordenar = prompt("¿Desea ordenar los valores? (s/n)");
    switch (ordenar) {
        case "s":
            let opcionOrdenar = prompt("1: ordenar de mayor a menor por valor de los productos\n" + 
                                       "2: ordenar de menor a mayor por valor de los productos\n" + 
                                       "3: ordenar por mayor cantidad de cuotas\n" + 
                                       "4: ordenar por menor cantidad de cuotas");
            switch (opcionOrdenar) {
                case "1":
                    productos.sort((a, b) => b.valor - a.valor);
                    break;
                case "2":
                    productos.sort((a, b) => a.valor - b.valor);
                    break;
                case "3":
                    productos.sort((a, b) => b.cuotas - a.cuotas);
                    break;
                case "4":
                    productos.sort((a, b) => a.cuotas - b.cuotas);
                    break;
                default:
                    alert("No se reconoce el comando, por favor ingresar solo números del 1 al 4");
                    preguntarOrdenar();
                    break;
            }
            break;
        case "n":
            break;
        default:
            alert("No se reconoce el comando, por favor ingresar solo S/N");
            preguntarOrdenar();
            break;
    }
}

pedirProducto();
continuar();

