var NombreEqui = [];
var CodigoEqui = [];
var CantidadEqui = [];
var Cuenta = 0;
var NombreClie = [];
var NombreEquPres = [];
var equipos = [];
var clientes = [];

function LlenarInventario() {
    var uno = prompt("Nombre Del Equipo");
    NombreEqui.push(uno);
    var dos = prompt("Codigo");
    CodigoEqui.push(dos);
    var tres = prompt("Cantidad");
    CantidadEqui.push(tres);

    equipo = {
        Nombre: uno,
        Codigo: dos,
        Cantidad: tres,
    }
    equipos.push(equipo);

    document.getElementById('Nombre').innerHTML += equipo.Nombre + "<br>";
    document.getElementById('Codigo').innerHTML += equipo.Codigo + "<br>";
    document.getElementById('Cantidad').innerHTML += equipo.Cantidad + "<br>";
}

function Prestar() {
    var uno2 = prompt("Nombre Del Cliente");
    NombreClie.push(uno2);
    if(NombreClie.length > 2) {
        for (var i = 0; i < NombreClie.length-2; i++) {
            console.log(NombreClie[1]);
            if (NombreClie[i] = NombreClie[NombreClie.length-1]) {
                NombreClie.splice(NombreEqui.length, 1);
                return Swal.fire({
                    icon: 'error',
                    title: 'Lo Sentimos',
                    text: '¡Tienes Un Equipo En Uso, Devuelevlo Para Poder Prestarte Otro!',
                })
            }else
            {
                break;
            }
        }
    }

    var dos2 = prompt("Elija Un Equipo");
    NombreEquPres.push(dos2);

    cliente = {
        Nombre: uno2,
        Equipo: dos2,
    }
    clientes.push(cliente);

    for (var i = 0; i < NombreEqui.length; i++) {
        for (var i = 0; i < NombreEquPres.length; i++) {
            var posicion = NombreEqui.findIndex(function (Nombre) {
                return Nombre === NombreEquPres[i];
            })
        }
    }

    Cuenta++;

    for (var i = 0; i < CantidadEqui.length; i++) {
        var posicioncero = CantidadEqui.findIndex(function (Nombre) {
            return Nombre === 0;
        })
    }

    if(CantidadEqui[i] == 0)
    {
        return Swal.fire({
            icon: 'error',
            title: 'Lo Sentimos',
            text: '¡Ya No Hay Equipos Disponibles De Este Equpo!',
        })

    }else {
        var contador = (CantidadEqui[posicion] - 1);
        CantidadEqui[posicion] = contador;
        document.getElementById('Cantidad').innerHTML = " "

        for (var i = 0; i < CantidadEqui.length; i++) {
            document.getElementById('Cantidad').innerHTML += CantidadEqui[i] + "<br>"
        }
        document.getElementById('NomUsu').innerHTML += cliente.Nombre + "<br>";
        document.getElementById('EquUsu').innerHTML += cliente.Equipo + "<br>";
        document.getElementById('StaUsu').innerHTML += "En Uso" + "<br>";
    }
}

function Regresar() {
    var NombreClie2 = NombreClie;
    var NombreEquPres2 = NombreEquPres;

    Cuenta--;

    Swal.fire({
        title: 'Nombre Del Cliente',
        input: 'text',
        showDenyButton: true,
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
    })
        .then((result) => {
            if (result.isConfirmed) {
                var posicion = NombreClie.findIndex(function (Nombre) {
                    return Nombre === result.value;
                })
                document.getElementById('NomUsu').innerHTML = "";
                document.getElementById('EquUsu').innerHTML = " ";
                document.getElementById('StaUsu').innerHTML = " ";

                var contador = (CantidadEqui[posicion] + 1);
                CantidadEqui[posicion] = contador;
                document.getElementById('Cantidad').innerHTML = " "

                NombreClie2.splice(posicion, 1);
                NombreEquPres2.splice(posicion, 1);

                for (var i = 0; i < CantidadEqui.length; i++) {
                    document.getElementById('Cantidad').innerHTML += CantidadEqui[i] + "<br>"
                }

                for (var i = 0; i < NombreClie2.length; i++) {
                    document.getElementById('NomUsu').innerHTML += NombreClie2[i] + "<br>";
                    document.getElementById('EquUsu').innerHTML += NombreEquPres2[i] + "<br>";
                    document.getElementById('StaUsu').innerHTML += "En Uso" + "<br>";
                }

            } else if (result.isDenied) {
                Swal.close();
            }
        })
}

function Calcular() {
    var Total = 0;
    for (var i = 0; i < CantidadEqui.length; i++) {
        Total += CantidadEqui[i] / 1;
    }

    var total = Total + Cuenta

    document.getElementById('TotalEqu').innerHTML = total;

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ['Disponibles:  ' + Total, 'En Uso: ' + Cuenta],
            datasets: [{
                label: 'Num datos',
                data: [Total, Cuenta],
                backgroundColor: [
                    'rgba(63,255,51,0.5)',
                    'rgba(255,51,51,0.5)',
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}