//Con Palabra, Sin Diseño
//var palabra = prompt ("Ingresa Una Palabla");
//var palabraSeparada = palabra.split("");
//console.log(palabraSeparada);

//function palabras(length)
//{
//var result           = '';
//var characters       = 'abcdefghijklmnopqrstuvwxyz';
//var charactersLength = characters.length;
//for ( var i = 0; i < length; i++)
//{
//result += characters.charAt(Math.floor(Math.random() * charactersLength));
//}
//return result;
//}
//console.log("Numero", "|", "Letra", "|", "Palabra");
//for (var z = 0; z<=palabraSeparada.length-1; z++)
//{
//console.log("   " + (z+1) + "      " + palabraSeparada[z] + "        " + palabraSeparada[z] + palabras(z) + "\n");
//}


//Con Numero, Sin Diseño
//var palabra = prompt ("Ingresa Una Numero");
//function palabras(length)
//{
//var result           = '';
//var characters       = 'abcdefghijklmnopqrstuvwxyz';
//var charactersLength = characters.length;
//for ( var i = 0-1; i < length; i++)
//{
//result += characters.charAt(Math.floor(Math.random() * charactersLength));
//}
//return result;
//}
//console.log("Numero", "|", "Palabra");
//for (var z = 0; z<=palabra-1; z++)
//{
//console.log("   " + (z+1) + "        " + palabras(z) + "\n");
//}

//Con Numero, Con Diseño
Swal.fire({
    title: 'Ingresa Un Numero',
    input: 'text',
    backdrop: `
    rgba(0,0,123,0.4)`,
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
})
    .then((result) => {
        var numero = result.value.split();
        console.log(numero);
        if (result.value == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Tienes Que Ingresar Un Numero!',
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `rgba(0,0,123,0.4) 
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat`,
                confirmButtonText: 'Intentar De Nuevo',
            })
                .then((result) => {
                    location.reload();
                })
        }
        else{
            Swal.fire({
                title: 'Resultado',
                icon: 'success',
                html: '<center><table style="border: 1px solid "><tr><td><b>Numero</b></td><td><b>Palabra</b></td></tr><tr><td id="Nu1"></td><td id="Pa2"></td></tr></table></center>',
                backdrop: `
            rgba(0,0,123,0.4)`,
                confirmButtonText: '¿De Nuevo?',
            })
                .then((result) => {
                    location.reload();
                })

            function palabras(length) {
                var result = '';
                var characters = 'abcdefghijklmnopqrstuvwxyz';
                var charactersLength = characters.length;
                for (var i = 0 - 1; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            console.log("Numero", "|", "Palabra");
            for (var z = 0; z <= numero - 1; z++) {
                document.getElementById('Nu1').innerHTML += (z + 1) + '<br>';
                document.getElementById('Pa2').innerHTML += palabras(z) + '<br>';
                console.log("   " + (z + 1) + "        " + palabras(z) + "\n");
            }
        }
    })