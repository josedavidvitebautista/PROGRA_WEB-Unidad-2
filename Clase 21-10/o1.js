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
        var separador = result.value.split("");
        if (result.isConfirmed) {
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 1) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Uno`,
                        backdrop: `
                        rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 2) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Dos`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 3) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Tres`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 4) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Cuatro`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 5) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Cinco`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 6) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Seis`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 7) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Siete`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 8) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Ocho`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 9) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Nueve`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
            for (var i = 0; i < separador.length; i++) {
                if (separador[i] == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'El Numero Es',
                        text: `Cero`,
                        backdrop: `
                            rgba(0,0,123,0.4)`,
                        confirmButtonText: '¿De Nuevo?',
                    })
                        .then((result) => {
                            location.reload();
                        })
                }
            }
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

            if (result.value == "uno") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `1`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "dos") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `2`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "tres") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `3`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "cuatro") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `4`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "cinco") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `5`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "seis") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `6`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "siete") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `7`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "ocho") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `8`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "nueve") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `9`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
            if (result.value == "cero") {
                Swal.fire({
                    icon: 'success',
                    title: 'El Numero Es',
                    text: `0`,
                    backdrop: `
                        rgba(0,0,123,0.4)`,
                    confirmButtonText: '¿De Nuevo?',
                })
                    .then((result) => {
                        location.reload();
                    })
            }
        }
    })


//Codigo Sin Diseño
//var numero = prompt("Ingresa Un Numero");
//var Separador = numero.split("");
//console.log(Separador);

//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 1) {
//console.log("Uno");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 2) {
//console.log("Dos");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 3) {
//console.log("Tres");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 4) {
//console.log("Cuatro");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 5) {
//console.log("Cinco");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 6) {
//console.log("Seis");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 7) {
//console.log("Siete");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 8) {
//console.log("Ocho");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 9) {
//console.log("Nueve");
//}
//}
//for (var i = 0; i < Separador.length; i++) {
//if (Separador[i] == 0) {
//console.log("Cero");
//}
//}

//if (numero == "uno") {
//console.log("1");
//}
//if (numero == "dos") {
//console.log("2");
//}
//if (numero == "tres") {
//console.log("3");
//}
//if (numero == "cuatro") {
//console.log("4");
//}
//if (numero == "cinco") {
//console.log("5");
//}
//if (numero == "seis") {
//console.log("6");
//}
//if (numero == "siete") {
//console.log("7");
//}
//if (numero == "ocho") {
//console.log("8");
//}
//if (numero == "nueve") {
//console.log("9");
//}
//if (numero == "cero") {
//console.log("0");
//}


