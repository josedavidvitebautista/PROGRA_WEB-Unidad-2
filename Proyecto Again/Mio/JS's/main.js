//Prestamo
//var lolnombre=[];
//var lolmonto=[];
//var lolprestamo=[];
//var Contador = 0;

//Fecha
var Fecha = new Date();

function Login() {
    window.open("Mio/HTML's/Login.html", "_self");
}

function Verificar() {
    Swal.fire({
        icon: 'error',
        title: '¡Error!.',
        text: '¡Usuario Incorrecto!',
    })
}

function agregarCliente() {
    var UnoNombre = document.getElementById("UnoNom").value;
    var UnoNumeroCliente = document.getElementById("UnoNdC").value;
    var UnoEdad = document.getElementById("UnoEda").value;
    var UnoNumero = document.getElementById("UnoNum").value;

    //Verificar Si Los Input's Estan Vacios
    if (UnoNombre == "") {
        Swal.fire({
            icon: 'error',
            title: '¡Campo Vacio!',
            text: '¡Agregue Un Nombre!',
        })
    } else {
        if (UnoNumeroCliente == "") {
            Swal.fire({
                icon: 'error',
                title: '¡Campo Vacio!',
                text: '¡Agregue Un Numero De Cliente!',
            })
        } else {
            if (UnoEdad == "") {
                Swal.fire({
                    icon: 'error',
                    title: '¡Campo Vacio!',
                    text: '¡Agregue La Edad!',
                })
            } else {
                if (UnoNumero == "") {
                    Swal.fire({
                        icon: 'error',
                        title: '¡Campo Vacio!',
                        text: '¡Agregue Un Numero!',
                    })
                } else {
                    document.getElementById("1-1").innerHTML += UnoNombre + "<br>";
                    document.getElementById("1-2").innerHTML += UnoNumeroCliente + "<br>";
                    document.getElementById("1-3").innerHTML += UnoEdad + "<br>";
                    document.getElementById("1-4").innerHTML += UnoNumero + "<br>";
                }
            }
        }

        //Agregar Los Nombres Al Select
        var selectUno = document.getElementById('selectElementUno');
        var selectDos = document.getElementById('selectElementDos');
        var optUno = document.createElement('option');
        var optDos = document.createElement('option');
        optUno.innerHTML = UnoNombre;
        optDos.innerHTML = UnoNombre;
        selectUno.appendChild(optUno);
        selectDos.appendChild(optDos);
    }
}

function agregarPrestamos() {
    var DosNombre = document.getElementById("selectElementUno").value;
    var DosMonto = document.getElementById("DosMon").value;
    var DosPlazo = document.getElementById("DosPla").value;
    var DosPagos = document.getElementById("DosPag").value;

    if (DosMonto == "") {
        Swal.fire({
            icon: 'error',
            title: '¡Campo Vacio!',
            text: '¡Ingrese Monto!',
        })
    } else {
        document.getElementById("2-1").innerHTML += DosNombre + "<br>";
        document.getElementById("2-2").innerHTML += "$" + DosMonto + "<br>";
        document.getElementById("2-3").innerHTML += Fecha.getDate() + "/" + (Fecha.getMonth() + 1) + "/" + Fecha.getFullYear() + "<br>";
        document.getElementById("2-4").innerHTML += "%15<br>";
        document.getElementById("2-5").innerHTML += DosPlazo + "<br>";
        document.getElementById("2-6").innerHTML += "Activo <br>";
        document.getElementById("2-7").innerHTML += DosPagos + "<br>";
    }
}

function agregarPago() {
    var TresNombre = document.getElementById("selectElementDos").value;
    var TresMonto = document.getElementById("TresMon").value;

    if (TresMonto == "") {
        Swal.fire({
            icon: 'error',
            title: '¡Campo Vacio!',
            text: '¡Ingresa El Monto A Pagar!',
        })
    } else {
        document.getElementById("3-1").innerHTML += TresNombre + "<br>";
        document.getElementById("3-2").innerHTML += Fecha.getDate() + "/" + (Fecha.getMonth() + 1) + "/" + Fecha.getFullYear() + "<br>";
        document.getElementById("3-3").innerHTML += "$" + TresMonto + "<br>";
    }

    //Funciona// Pero Sobra...
    //lolmonto.push(TresMonto);
    //Contador++;
    //for (var i = 0; i < lolnombre.length; i++) {
    //var posicion = lolnombre.findIndex(function (Nombre) {
    //return Nombre === lolnombre[i];
    //})
    //}
    //var contador = (lolprestamo[posicion] - TresMonto);
    //lolprestamo[posicion] = contador;
    //document.getElementById('2-2').innerHTML = " "
    //document.getElementById('2-2').innerHTML = contador + "<br>";
}

