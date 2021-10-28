var alumnosTodos = [];
var GrupoTodos = [];
var MatriculaTodos = [];
var SexoTodos = [];
var CalificacionTodos = [];
//var MedianaCali = [];
var ContaMuje = 0;
var ContaHomb = 0;

//Numero De Alumnos A Agregar
var datos = prompt("¿Cuantos Alumnos Deseas Agregar?");

//Solicitud De Los Datos
for (var i = 0; i < datos; i++) {
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
    //MedianaCali.push(LooL5);
}

//Imprimir La Lista De Alumnos
//Por Consola
console.log("Nombre");
console.log(alumnosTodos);
console.log("Grupo");
console.log(GrupoTodos);
console.log("Matricula");
console.log(MatriculaTodos);
console.log("Sexo");
console.log(SexoTodos);
console.log("Calificacion");
console.log(CalificacionTodos);

//En HTML
for(var i=0; i<datos; i++)
{
    document.getElementById('Nom').innerHTML += alumnosTodos[i] + "<br>";
}
for(var i=0; i<datos; i++)
{
    document.getElementById('Gru').innerHTML += GrupoTodos[i] + "<br>";
}
for(var i=0; i<datos; i++)
{
    document.getElementById('Matr').innerHTML += MatriculaTodos[i] + "<br>";
}
for(var i=0; i<datos; i++)
{
    document.getElementById('Sex').innerHTML += SexoTodos[i] + "<br>";
}
for(var i=0; i<datos; i++)
{
    document.getElementById('Cali').innerHTML += CalificacionTodos[i] + "<br>";
}


//Contar Mujeres Y Hombres
for (var i = 0; i < SexoTodos.length; i++) {
    if (SexoTodos[i] == "F") {
        ContaMuje++;
    }
    if (SexoTodos[i] == "M") {
        ContaHomb++;
    }
}
document.getElementById('Pt1').innerHTML = datos;
document.getElementById('Pt2').innerHTML = ContaHomb;
document.getElementById('Pt3').innerHTML = ContaMuje;

//Media
function  Media()
{
    var Promedio = 0;
    for (var i=0; i<CalificacionTodos.length; i++)
    {
        Promedio += CalificacionTodos[i]/CalificacionTodos.length;
    }
    document.getElementById('Pt4').innerHTML= Promedio;
    console.log(Promedio);
}

//Mediana
//function Mediana()
//{
    //MedianaCali.sort((x, y) => {
        //return x - y;
//})
    //console.log(MedianaCali);
    //var Mitad = Math.floor(MedianaCali.length / 2);
    //console.log(MedianaCali[Mitad]);
//}

//Buscar Alumnos
function Buscar() {
    var elemento = document.getElementById('Bu').value;
    var Posicion = MatriculaTodos.findIndex(function (Matricula){
        return Matricula === elemento;
    })

    //En Consola
    console.log("----------------------------------------------");
    console.log(Posicion);
    console.log("El Alumno Es:");
    console.log("Nombre: " + alumnosTodos[Posicion]);
    console.log("Grupo: " + GrupoTodos[Posicion]);
    console.log("Matricula: " + MatriculaTodos[Posicion]);
    console.log("Sexo: " + SexoTodos[Posicion]);
    console.log("Calificacion: " + CalificacionTodos[Posicion]);
    console.log("----------------------------------------------");

    //En HTML
    Swal.fire('Informacion Del Alumno', "Nombre: " + alumnosTodos[Posicion] +  "<br>" + "Grupo: " + GrupoTodos[Posicion] + "<br>" + "Matricula: " + MatriculaTodos[Posicion] + "<br>" + "Sexo: " + SexoTodos[Posicion] + "<br>" + "Calificacion: " + CalificacionTodos[Posicion]);
}

//Recargar Pagina
function Again() {
    location.reload();
}

