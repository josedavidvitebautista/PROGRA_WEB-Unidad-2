<?php
$Usuario='admin';
$Contraseña = 'admin';
$UsuIngresado='';
$ConIngresado='';

if(isset($_POST["usuario"])){
    $UsuIngresado = $_POST["usuario"];
}

if(isset($_POST["contraseña"])){
    $ConIngresado = $_POST["contraseña"];
}

if($Usuario != $UsuIngresado){
    header('Location: Error1.html');
    }else {
    if($Contraseña!= $ConIngresado) {
        header('Location: Error2.html');
        }else {
        header ('Location: Desk.html');
        //header ('Location: https://www.youtube.com/watch?v=NS404lBJnKE');
    }
}