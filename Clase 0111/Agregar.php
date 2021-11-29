<?php
require ("Conexion.php");
$nombre='';
$edad = '';

if(isset($_POST["nombre"])){
    $nombre = $_POST["nombre"];
}

if(isset($_POST["edad"])){
    $edad = $_POST["edad"];
}

echo "Tu Nombre Es: ", $nombre, ", Y Tu Edad Es: ", $edad;

$sql = "INSERT INTO personas (id, nombre, edad) VALUES ('', '$nombre', '$edad')";
if(mysqli_query($conn, $sql)){
    echo "Se Agrego Correctamente!";
}else{
    "Error: " .$sql . "<br>" .mysqli_error($conn);
}


