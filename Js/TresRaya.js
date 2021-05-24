/* VARIABLES DEL JUEGO */
var ctx, canvas;
var tiradas, gameOver;
var fichas_array;
var globalpont = 0;
var ancho       = 800;
var alto        = 480;
var COLUMNAS    = 3;
var RENGLONES   = 3;
var fichas_X    = 0;
var fichas_O    = 0;
var largo       = 120;
var colorGato   = "#838082";
var colorCanvas = "#08d9d6";

window.onload = iniciar;
document.getElementById('resultado').innerHTML = "Puntos: " + globalpont;

/* INICIAR EL JUEGO */
function iniciar(){
    canvas        = document.getElementById("miCanvas");
    canvas.width  = ancho;
    canvas.height = alto;
    if(canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
        if(ctx){
            canvas.removeEventListener("click",iniciar,false);
            fichas_array = [];
            gameOver     = false;
            tiradas      = 0;

            gato();
            mensaje("Usted inicia");
            canvas.addEventListener("click",selecciona,false);
        }else{
            document.write("Tu navegador no soporta canvas");
        }
    }
}

/* CREAR EL TABLERO */
function gato(){
    ctx.fillStyle   = colorCanvas;
    ctx.strokeStyle = colorGato;
    ctx.lineWidth   = 20;

    /* Dibujar el # */
    ctx.beginPath();
    ctx.moveTo(330,20);
    ctx.lineTo(330,420);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(470,20);
    ctx.lineTo(470,420);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200,150);
    ctx.lineTo(600,150);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(200,290);
    ctx.lineTo(600,290);
    ctx.stroke();

    /* Creacion de las cassillas para las fichas */
    fichas_array.push(new Ficha(200, 20,largo,largo,0,0,0));
    fichas_array.push(new Ficha(330, 20,largo,largo,1,0,1));
    fichas_array.push(new Ficha(470, 20,largo,largo,2,0,2));

    fichas_array.push(new Ficha(200,150,largo,largo,3,1,0));
    fichas_array.push(new Ficha(330,150,largo,largo,4,1,1));
    fichas_array.push(new Ficha(470,150,largo,largo,5,1,2));

    fichas_array.push(new Ficha(200,290,largo,largo,6,2,0));
    fichas_array.push(new Ficha(330,290,largo,largo,7,2,1));
    fichas_array.push(new Ficha(470,290,largo,largo,8,2,2));

}

/* CREA LAS FICHAS */
function Ficha(x,y,w,h,i,ren,col){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.i=i;
    this.ren=ren;
    this.col=col;
    this.peso=0;
    this.valor="";
    this.pinta=pintaFicha;
}
/* DIBUJAR LA FICHA */
function pintaFicha(valor){
    this.valor=valor;
    ctx.font="bold 100px Arial";
    ctx.fillStyle=colorCanvas;
    ctx.fillText(valor,this.x+30,this.y+100,this.w,this.h);
}

/* MOSTRAR MENJAES AL USUARIO */
function mensaje(cadena){
    var lon=(canvas.width-(25*cadena.length))/2;
    ctx.strokeStyle=colorGato;
    ctx.clearRect(0,420,canvas.width,100);
    ctx.font="bold 40px Courier";
    ctx.fillText(cadena,lon,470);
}

/* SELECCIONAR UNA CASILLA */
function selecciona(e){
    canvas.removeEventListener("click",selecciona,false);
    var pos = ajusta(e.clientX, e.clientY);
    var x = pos.x;
    var y = pos.y;
    var ficha;
    for(var i=0; i<fichas_array.length; i++){
        ficha=fichas_array[i];
        if( (x>ficha.x) && (x<ficha.x+ficha.w) && (y>ficha.y) && (y<ficha.y+ficha.h) ){
            if(ficha.valor==""){
                tiradas++;
                break;
            }
        }
    }
    if(i<fichas_array.length){
        console.log(i);
        if(ficha.valor==""){
            ficha.pinta("X");
            verifica(false);
            if(!gameOver){
                mensaje("Pensando...");
                setTimeout(tiraMaquina,1000);
            }

        }
    }else{
        canvas.addEventListener("click",selecciona,false);
    }
}
/* CONVERTIR LAS CORDENADAS DE LA VENTANA A CORDENADAS DENTRO DEL CANVAS */
function ajusta(xx,yy){
    var posCanvas = canvas.getBoundingClientRect();
    var x = xx-posCanvas.left;
    var y = yy-posCanvas.top;
    return {x:x,y:y}
}

/* REALIZA LA JUGADA DE LA MAQUINA */
function tiraMaquina(){
    tiradas++;
    console.log("Tirada numero: "+tiradas);
    if(gameOver==false){
        verifica(true);

        var mejorJugada=0;
        var posibilidades=[];
        for(var i=0; i<fichas_array.length; i++){
            ficha=fichas_array[i];
            if(ficha.peso > mejorJugada){
                mejorJugada=ficha.peso;
                posibilidades=[];
                posibilidades.push(i);

                //ii=i;
            }else if (ficha.peso==mejorJugada){
                posibilidades.push(i);
            }
        }


        elegir = Math.floor(Math.random()*(posibilidades.length-1));
        ii=posibilidades[elegir];
        ficha= fichas_array[ii];
        ficha.pinta("O");

        console.log("Jugada :"+ficha.ren+", "+ficha.col+" "+ficha.i);
        console.log("-----------------");

        verifica(false);
        if(!gameOver){
            canvas.addEventListener("click",selecciona,false);
        }
    }
}
/* ASIGNA PUNTAJE A LAS CASILLAS PARA ELEGIR LA MEJOR JUGADA */
function pesoFicha(i,fichas_O,fichas_X){
    ficha = fichas_array[i];
    if(ficha.valor==""){
        // Para ganar
        if(fichas_O==2 && fichas_X==0){
            if(ficha.peso<10) ficha.peso =10;
        }
        // Para no perder
        else if(fichas_O == 0 && fichas_X==2){
            if(ficha.peso< 6) ficha.peso =6;
        }
        // Para intentar ganar
        else if (fichas_O == 1 && fichas_X==0){
            if(ficha.peso< 3) ficha.peso =3;
        // Para poner ficha sin importancia.
        }else{
            if(ficha.peso< 1) ficha.peso =1;
        }
    }else{
        ficha.peso =0;
    }
}

/* COMPROBAR TODO EN UNO */
function verifica(calculaPeso){
    verificaRenglones(calculaPeso);
    verificaColumnas(calculaPeso);
    verificaDiagonal1(calculaPeso);
    verificaDiagonal2(calculaPeso);
}

/* COMPROBAR - SI HAY 3 */
function verificaRenglones(calculaPeso){
    if(gameOver==false){
        for(i=0; i<RENGLONES; i++){
            fichas_X=0;
            fichas_O=0;
            for(j=0; j<COLUMNAS; j++){
                ficha = buscarFicha(i,j);
                fichas_X += (ficha.valor=="X"?1:0);
                fichas_O += (ficha.valor=="O"?1:0);
            }
            if(calculaPeso){
                for(j=0; j<COLUMNAS; j++){
                    ficha=buscarFicha(i,j);
                    pesoFicha(ficha.i,fichas_O,fichas_X);
                }
            }
            gameOver=verificaFin(fichas_O,fichas_X);
            if(gameOver) break;
        }
    }
}
/* COMPROBAR | SI HAY 3 */
function verificaColumnas(calculaPeso){
    if(gameOver==false){
        for(j=0; j<COLUMNAS; j++){
            fichas_X=0;
            fichas_O=0;
            for(i=0; i<RENGLONES; i++){
                ficha = buscarFicha(i,j);
                fichas_X += (ficha.valor=="X"?1:0);
                fichas_O += (ficha.valor=="O"?1:0);
            }
            if(calculaPeso){
                for(i=0; i<RENGLONES; i++){
                    ficha=buscarFicha(i,j);
                    pesoFicha(ficha.i,fichas_O,fichas_X);
                }
            }
            gameOver=verificaFin(fichas_O,fichas_X);
            if(gameOver) break;
        }
    }
}
/* COMPROBAR \ SI HAY 3 */
function verificaDiagonal1(calculaPeso){
    if(gameOver==false){
        fichas_X=0;
        fichas_O=0;
        for(var i=0; i<RENGLONES; i++){
            ficha=buscarFicha(i,i);
            fichas_X += (ficha.valor=="X"?1:0);
            fichas_O += (ficha.valor=="O"?1:0);
        }
        console.log("D1:X"+fichas_X+", O:"+fichas_O);
        if(calculaPeso){
            for(i=0; i<RENGLONES; i++){
                ficha=buscarFicha(i,i);
                pesoFicha(ficha.i,fichas_O,fichas_X);
                console.log("Ficha: "+ficha.i+" peso: "+ficha.peso);
            }
        }
        gameOver=verificaFin(fichas_O,fichas_X);
    }
}
/* COMPROBAR / SI HAY 3 */
function verificaDiagonal2(calculaPeso){
    if(gameOver==false){
        fichas_X=0;
        fichas_O=0;
        j=2;
        for(var i=0; i<RENGLONES; i++){
            ficha=buscarFicha(i,j);
            fichas_X += (ficha.valor=="X"?1:0);
            fichas_O += (ficha.valor=="O"?1:0);
            j--;
        }
        console.log("D1:X"+fichas_X+", O:"+fichas_O);
        if(calculaPeso){
            j=2;
            for(i=0; i<RENGLONES; i++){
                ficha=buscarFicha(i,j);
                pesoFicha(ficha.i,fichas_O,fichas_X);
                console.log("Ficha: "+ficha.i+" peso: "+ficha.peso);
                j--;
            }
        }
        gameOver=verificaFin(fichas_O,fichas_X);
    }
}

/* DEVUELVE LA FICHA DE LA CASILLA SOLICITADA */
function buscarFicha(ren,col){
    for(var i=0; i<fichas_array.length; i++){
        ficha=fichas_array[i];
        if(ficha.ren==ren && ficha.col==col){
            break;
        }
    }
    return ficha;
}

/* COMPROBAR SI GANA, PIERDE O EMPATA */
function verificaFin(O,X){
    var fin=false;
    if(X==3){
        fin=true;
        mensaje("!GANASTE!");
        globalpont ++;
        document.getElementById('resultado').innerHTML = "Puntos: " + globalpont;
    }
    if(O==3){
        fin=true;
        mensaje("¡Perdiste!");
        var Num = parseInt(Math.random()*5+1);
        switch (Num) {
            case 1:
                (async () => {
                    const {value:rta} = await Swal.fire({
                        title: 'Pregunta',
                        text: 'Cuantos tipos de señales hay?',
                        input: 'text',
                        inputPlaceholder: 'Respuesta',
                        confirmButtonText: 'Confirmar',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        customClass: {
                            title: 'Titulo',
                            text: 'Texto' 
                        },
                        footer: 'Pregunta 1'
                    });
                
                    if (rta == 4){
                    }else{
                        globalpont --;
                        document.getElementById('resultado').innerHTML = "Puntos: " + globalpont;
                    };
                })()
            break;
            case 2:
                (async () => {
                    const {value:rta} = await Swal.fire({
                        title: 'Pregunta',
                        text: 'Como se llama esta señal',
                        imageUrl: '../Multimedia/Reglamentarias/sr01.png',
                        input: 'select',
                        inputPlaceholder: 'Respuesta',
                        inputOptions: {
                            pare: 'Pare',
                            nopase: 'No pase',
                            conos: 'Conos'
                        },
                        confirmButtonText: 'Confirmar',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        customClass: {
                            title: 'Titulo',
                            text: 'Texto' 
                        },
                        footer: 'Pregunta 2'
                    });
                
                    if (rta == 'Pare'){
                    }else{
                        globalpont --;
                        document.getElementById('resultado').innerHTML = "Puntos: " + globalpont;
                    };
                })()
              break;
            case 3:
                (async () => {
                    const {value:rta} = await Swal.fire({
                        title: 'Pregunta',
                        text: 'Cual es la funcion de las señales reglamentarias',
                        input: 'select',
                        inputOptions: {
                            a: 'Limitar y prohibir',
                            b: 'Avisar de riesgos',
                            c: 'Informar y señalizar'
                        },
                        inputPlaceholder: 'Respuesta',
                        confirmButtonText: 'Confirmar',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        customClass: {
                            title: 'Titulo',
                            text: 'Texto' 
                        },
                        footer: 'Pregunta 3'
                    });
                
                    if (rta == 'Limitar y prohibir'){
                    }else{
                        globalpont --;
                        document.getElementById('resultado').innerHTML = "Puntos: " + globalpont;
                    };
                })()
            break;
            case 4:
                (async () => {
                    const {value:rta} = await Swal.fire({
                        title: 'Pregunta',
                        text: 'Te gsuto la pagina?',
                        input: 'text',
                        inputPlaceholder: 'Respuesta',
                        confirmButtonText: 'Confirmar',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        customClass: {
                            title: 'Titulo',
                            text: 'Texto' 
                        },
                        footer: 'Pregunta 4'
                    });
                })()
            break;
            case 5:
                (async () => {
                    const {value:rta} = await Swal.fire({
                        title: 'Pregunta',
                        text: 'Como se llama esta señal?',
                        input: 'select',
                        imageUrl: '../Multimedia/Reglamentarias/sp11.png',
                        inputOptions: {
                            a: 'Interseccion de vías',
                            b: 'Glorieta',
                            c: 'BIFURCACIÓN EN “T”'
                        },
                        inputPlaceholder: 'Respuesta',
                        confirmButtonText: 'Confirmar',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,
                        customClass: {
                            title: 'Titulo',
                            text: 'Texto' 
                        },
                        footer: 'Pregunta 1'
                    });
                
                    if (rta == 'Interseccion de vías'){
                    }else{
                        globalpont --;
                        document.getElementById('resultado').innerHTML = "Puntos: " + globalpont;
                    };
                })()
            break;
            default:
            break;
        }
    }

    if(!fin){
        if(tiradas<9){
            mensaje("Su turno");
        }else{
            fin=true;
            mensaje("¡Empate!");
        }
    }

    if(fin){
        canvas.addEventListener("click",iniciar,false);
    }
    return fin;
}