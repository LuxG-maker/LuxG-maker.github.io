function Preguntas(){
    var puntos = 0;
    (async () => {
        const {value:rta} = await Swal.fire({
            title: 'Pregunta',
            text: 'Como se llama esta señal',
            imageUrl: '../Multimedia/Reglamentarias/sr14.png',
            imageHeight: 100,
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'Peatones a la izquierda',
                nopase: 'Prohibido el cambio de calzada',
                conos: 'Ceda el paso'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 1',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'nopase') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta1} = await Swal.fire({
            title: 'Pregunta',
            text: 'Cual es la funcion de las señales reglamentarias?',
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                U: 'limitar y prohibir algunos comportamientos',
                D: 'avisar de posibles riesgos.',
                T: 'informan sobre el destino y sus sitios de interés',
                C: 'informar y señalizar los cambios en las vías'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 2',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'U') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta2} = await Swal.fire({
            title: 'Pregunta',
            text: 'Cual es la funcion de las señales preventivas?',
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'limitar y prohibir algunos comportamientos',
                nopase: 'avisar de posibles riesgos',
                conos: 'informan sobre el destino y sus sitios de interés',
                quinta: 'informar y señalizar los cambios en las vías'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 3',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'nopase') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        /////////////////////////////////
        const {value:rta3} = await Swal.fire({
            title: 'Pregunta',
            text: 'Como se llama esta señal',
            imageUrl: '../Multimedia/Reglamentarias/sp11.png',
            imageHeight: 100,
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'curvas secesivas',
                nopase: 'Prohibido el cambio de calzada',
                conos: 'Interseccion de vias'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 4',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'conos') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta4} = await Swal.fire({
            title: 'Pregunta',
            text: 'Cual es la funcion de las señales informativas?',
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'limitar y prohibir algunos comportamientos',
                nopase: 'avisar de posibles riesgos.',
                conos: 'informan sobre el destino y sus sitios de interés',
                quinta: 'informar y señalizar los cambios en las vías'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 5',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'conos') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO Señales//////////////////
        /////////////////////////////////
        const {value:rta5} = await Swal.fire({
            title: 'Pregunta',
            text: 'Como se llama esta señal',
            imageUrl: '../Multimedia/Reglamentarias/si11.png',
            imageHeight: 100,
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'Pare',
                nopase: 'Sitio de parqueo',
                conos: 'croquis'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 6',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'nopase') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta6} = await Swal.fire({
            title: 'Pregunta',
            text: 'Cual es la funcion de las señales transitorias?',
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'limitar y prohibir algunos comportamientos',
                nopase: 'avisar de posibles riesgos.',
                conos: 'informan sobre el destino y sus sitios de interés',
                quinta: 'informar y señalizar los cambios en las vías'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 7',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'quinta') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta7} = await Swal.fire({
            title: 'Pregunta',
            text: 'Cual es la funcion de esta señal',
            imageUrl: '../Multimedia/Reglamentarias/st06.jpg',
            imageHeight: 100,
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'Trabajadores situados en la banquina del camino',
                nopase: 'Indican una separacion de espacios',
                conos: 'Indican la presencia de material radioactivo'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 8',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'conos') {
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta8} = await Swal.fire({
            title: 'Pregunta',
            text: 'te gusto la pagina?',
            input: 'select',
            inputPlaceholder: 'Respuesta',
            confirmButtonText: 'Confirmar',
            inputOptions: {
                pare: 'Si',
                nopase: 'No',
                conos: 'Aceptable'
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 9',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'pare') {
                        alert('Gracias esto te da un punto psicologico :D')
                        puntos++
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        ///////////////////////////////////
        //////////CAMBIO//////////////////
        //////////////////////////////////
        const {value:rta9} = await Swal.fire({
            title: 'Pregunta',
            text: 'Sabias que en boton Contacto hay una forma para agregar comentarios que puede ver mas personas. Increible no?',
            input: 'select',
            inputPlaceholder: 'Respuesta',
            inputOptions: {
                pare: 'Si',
                nopase: 'No',
                conos: 'Me da igual'
            },
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
                title: 'Titulo',
                text: 'Texto' 
            },
            footer: 'Pregunta 10',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'pare') {
                        puntos++
                        alert("Genial vere tu comentario luego");
                        resolve()
                    }else{
                        resolve()
                    }
                })
            }
        });
        if (puntos >= 9){
            document.getElementById('Leyenda').innerHTML = 'Puntos: ' + puntos + ' Felicidades eres todo un genio';
        }else if (puntos >= 4 && puntos <= 8){
            document.getElementById('Leyenda').innerHTML = 'Puntos: ' + puntos + ' Genial lo has echo bastante bien :D';
        }else{
            document.getElementById('Leyenda').innerHTML = 'Puntos: ' + puntos + ' Lo lamento. Seguro has tenido mala suerte, Intentalo de nuevo';
        };
        if (puntos >= 9){
            document.getElementById('SebreNom').innerHTML = 'MASTER';
        }else if (puntos >= 4 && puntos <= 8){
            document.getElementById('SebreNom').innerHTML = 'COMUN';
        }else{
            document.getElementById('SebreNom').innerHTML = 'LUCKY DOWN';
        };
    })();
    
}