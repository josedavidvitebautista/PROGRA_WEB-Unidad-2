//Arreglos Que Se Usan Pa' Funcionar, Obvio Jajaja :v
var alumnosTodos = [];
var GrupoTodos = [];
var MatriculaTodos = [];
var SexoTodos = [];
var CalificacionTodos = [];
var newarralumnos = [];

//Hace La Agregacion :v De Los Alumnos
function Agregar() {
    var LooL1 = prompt("Nombre");
    alumnosTodos.push(LooL1);
    var LooL2 = prompt("Grupo");
    GrupoTodos.push(LooL2);
    var LooL3 = prompt("Matricula");
    MatriculaTodos.push(LooL3);
    var LooL4 = prompt("Sexo");
    SexoTodos.push(LooL4);
    var LooL5 = prompt("Calificacion ");
    CalificacionTodos.push(LooL5);

    //Implementacion De Una Parte Del Codigo Profe Para Que Funcione El Punto 5 y 6 Jaja :'v
    var alumno = {
        nombre: LooL1,
        grupo: LooL2,
        matricula: LooL3,
        sexo: LooL4,
        calificacion: LooL5
    }
    newarralumnos.push(alumno);

    //Imprime Total De Alumnos
    document.getElementById('Pt1').innerHTML = alumnosTodos.length;

    //Imprime La Lista De Alumnos
    document.getElementById('Nom').innerHTML += alumno.nombre + "<br>";
    document.getElementById('Gru').innerHTML += alumno.grupo + "<br>";
    document.getElementById('Matr').innerHTML += alumno.matricula + "<br>";
    document.getElementById('Sex').innerHTML += alumno.sexo + "<br>";
    document.getElementById('Cali').innerHTML += alumno.calificacion + "<br>";

    //Mediana
    var Promedio = 0;
    for (var i = 0; i < CalificacionTodos.length; i++) {
        Promedio += CalificacionTodos[i] / CalificacionTodos.length;
    }
    var doscifras = Math.round((Promedio + Number.EPSILON) * 100) / 100;
    document.getElementById('Pt4').innerHTML = doscifras;

    //Contar Mujeres Y Hombres
    //Hombres
    let SexHomb = [];
    let idxHomb = SexoTodos.indexOf("M");
    while (idxHomb != -1) {
        SexHomb.push(idxHomb);
        idxHomb = SexoTodos.indexOf("M", idxHomb + 1);
    }

    //Mujeres
    let SexMuje = [];
    let idxMuje = SexoTodos.indexOf("F");
    while (idxMuje != -1) {
        SexMuje.push(idxMuje);
        idxMuje = SexoTodos.indexOf("F", idxMuje + 1);
    }

    //Creacion De La Grafica
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ['Hombres: ' + SexHomb.length, 'Mujeres: ' + SexMuje.length],
            datasets: [{
                label: 'Num datos',
                data: [SexHomb.length, SexMuje.length],
                backgroundColor: [
                    'rgba(54,51,255,0.5)',
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

//Buscar Alumnos Por Matricula
function Buscar() {
    Swal.fire({
        title: 'Ingresa La Matricula',
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
                var datobuscar = result.value;

                //Busca La Posicion De La Matricula Ingresada
                var Posicion = MatriculaTodos.findIndex(function (Matricula) {
                    return Matricula === datobuscar;
                })
                Swal.fire('Informacion Del Alumno', "Nombre: " + alumnosTodos[Posicion] + "<br>" + "Grupo: " + GrupoTodos[Posicion] + "<br>" + "Matricula: " + MatriculaTodos[Posicion] + "<br>" + "Sexo: " + SexoTodos[Posicion] + "<br>" + "Calificacion: " + CalificacionTodos[Posicion]);

            } else if (result.isDenied) {

                Swal.close();
            }
        })
}

//Seleccionar Alumnos
function Seleccionar() {
    var SeleMatri = [];
    var posiMatri = [];
    var SexSelect = [];
    var CalifiSelect = [];

    //Solicita La Imformacion
    var seccion = prompt("¿Cuantos Serian?")
    for (var i = 0; i < seccion; i++) {
        var LooL6 = prompt("Ingrese La Matricula")
        SeleMatri.push(LooL6);
    }

    //Busca La Posicion De La Matricula De Los Alumnos Seleccionados
    for (var i = 0; i < SeleMatri.length; i++) {
        var posicionS = MatriculaTodos.findIndex(function (Matricula) {
            return Matricula === SeleMatri[i];
        })
        posiMatri.push(posicionS);
    }

    //Agrega Las Calificaciones De Los Alumnos Seleccionados A Un Nuevo Arreglo
    for (var i = 0; i < posiMatri.length; i++) {
        CalifiSelect.push(newarralumnos[posiMatri[i]].calificacion);
    }

    //Agrega Las Generos De Los Alumnos Seleccionados A Un Nuevo Arreglo
    for (var i = 0; i < posiMatri.length; i++) {
        SexSelect.push(newarralumnos[posiMatri[i]].sexo);
    }

    Swal.fire({
        title: 'Alumnos Seleccionados',
        html: '<center><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><style type="text/css">.rwd-table {background: #34495E;color: #fff;border-radius: .4em;overflow: hidden;border-color: #34495E;}</style><div class="container"><div class="row g-2"><div class="col-lg-12 col-sm-12"><div class="p-3 border bg-light text-center"><table class="rwd-table" width="100%"><tr><th style="color:#dd5">Nombre</th><th style="color:#dd5">Grupo</th><th style="color:#dd5">Matricula</th><th style="color:#dd5">Sexo</th><th style="color:#dd5">Calificacion</th></tr><tr><th id="Nom3"></th><th id="Gru3"></th><th id="Matr3"></th><th id="Sex3"></th><th id="Cali3"></th></tr></table></div></div><div class="col-lg-12 col-sm-6"><div class="p-3 border bg-light"><div class="col-lg-12"><div class="row g-2"><div class="col-lg-4 col-md-4 col-sm-12"><div class="p-3 border bg-light text-center"><h5>Total De Alumnos</h5><br><h3 id="Tota1"></h3></div></div><div class="col-lg-4 col-md-4 col-sm-12"><div class="p-3 border bg-light text-center"><h5>Hombres</h5><h3 id="Masculino2"></h3><br><h5>Mujeres</h5><h3 id="Femenino2"></h3><br></div></div><div class="col-lg-4 col-md-4 col-sm-12"><div class="p-3 border bg-light text-center"><h5>Mediana</h5><h3 id="Media2"></h3></div></div></div></div></div></div></div></div></center>',
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonText: 'Aceptar',
    })
        .then((result) => {
            Swal.close();
        })

    //Imprime La Mediana De Alumnos Seleccionados
    var promedioSelect = 0;
    for (var i = 0; i < posiMatri.length; i++) {
        promedioSelect += CalifiSelect[i] / CalifiSelect.length;
    }
    var doscifraSelect = Math.round((promedioSelect + Number.EPSILON) * 100) / 100;
    document.getElementById('Media2').innerHTML = doscifraSelect;

    //Imprime El Numero De Hombres Y Mujeres De Los Alumnos Seleccionados
    //Hombres
    let SexHomb2 = [];
    let idxHomb2 = SexSelect.indexOf("M");
    while (idxHomb2 != -1) {
        SexHomb2.push(idxHomb2);
        idxHomb2 = SexSelect.indexOf("M", idxHomb2 + 1);
    }
    document.getElementById('Masculino2').innerHTML = SexHomb2.length;

    //Mujeres
    let SexMuje2 = [];
    let idxMuje2 = SexSelect.indexOf("F");
    while (idxMuje2 != -1) {
        SexMuje2.push(idxMuje2);
        idxMuje2 = SexSelect.indexOf("F", idxMuje2 + 1);
    }
    document.getElementById('Femenino2').innerHTML = SexMuje2.length;

    //Imprime El Total De Alumnos Seleccionados
    for (var i = 0; i < seccion; i++) {
        document.getElementById('Tota1').innerHTML = seccion;
    }

    //Imprime Los Alumnos Seleccionados
    for (var i = 0; posiMatri.length; i++) {
        document.getElementById('Nom3').innerHTML += newarralumnos[posiMatri[i]].nombre + "<br>";
        document.getElementById('Gru3').innerHTML += newarralumnos[posiMatri[i]].grupo + "<br>";
        document.getElementById('Matr3').innerHTML += newarralumnos[posiMatri[i]].matricula + "<br>";
        document.getElementById('Sex3').innerHTML += newarralumnos[posiMatri[i]].sexo + "<br>";
        document.getElementById('Cali3').innerHTML += newarralumnos[posiMatri[i]].calificacion + "<br>";
    }
}

//Seleccionar Por Grupo
function SelectGrupo() {
    //Busca Los Grupos Existentes
    var result = GrupoTodos.filter((item, index) => {
        return GrupoTodos.indexOf(item) === index;
    })
    Swal.fire({
        title: 'Grupos',
        icon: 'info',
        html: '<center><h3 id="GruExi"></h3></center>',
        showDenyButton: true,
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonText: 'Aceptar',
        denyButtonText: `Cancelar`,
    })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Seleccione El Grupo',
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
                            var resulta = result.value

                            //Encontrar Las Posiciones Del Grupo Seleccionado
                            let posiciones = [];
                            let idx = GrupoTodos.indexOf(resulta);
                            while (idx != -1) {
                                posiciones.push(idx);
                                idx = GrupoTodos.indexOf(resulta, idx + 1);
                            }

                            Swal.fire({
                                title: 'Grupo Seleccionado',
                                icon: 'success',
                                html: '<center><style type="text/css">.rwd-table {background: #34495E;color: #fff;border-radius: .4em;overflow: hidden;border-color: #34495E;}</style><h3 id="title"></h3><br><table class="rwd-table" width="100%"><tr><th style="color:#dd5">Nombre</th><th style="color:#dd5">Grupo</th><th style="color:#dd5">Matricula</th><th style="color:#dd5">Sexo</th><th style="color:#dd5">Calificacion</th></tr><tr><th id="Nom2"></th><th id="Gru2"></th><th id="Matr2"></th><th id="Sex2"></th><th id="Cali2"></th></tr></table></center>',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                confirmButtonText: 'Aceptar',
                            })
                                .then((result) => {
                                    Swal.close();
                                })

                            //Imprimir El Grupo Seleccionado Y Los Alumnos De Este
                            for (var i = 0; i < posiciones.length; i++) {
                                document.getElementById('title').innerHTML = resulta;
                                document.getElementById('Nom2').innerHTML += newarralumnos[posiciones[i]].nombre + "<br>";
                                document.getElementById('Gru2').innerHTML += newarralumnos[posiciones[i]].grupo + "<br>";
                                document.getElementById('Matr2').innerHTML += newarralumnos[posiciones[i]].matricula + "<br>";
                                document.getElementById('Sex2').innerHTML += newarralumnos[posiciones[i]].sexo + "<br>";
                                document.getElementById('Cali2').innerHTML += newarralumnos[posiciones[i]].calificacion + "<br>";
                            }
                        } else if (result.isDenied) {
                            Swal.close();
                        }
                    })
            } else if (result.isDenied) {
                Swal.close();
            }
        })

    //Imprime Los Grupos Encontrados
    for (var i = 0; i < result.length; i++) {
        document.getElementById('GruExi').innerHTML += result[i] + '<br>';
    }
}

//Recarga La Pagina
function Again() {
    location.reload();
}




