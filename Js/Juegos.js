document.getElementById('puntos').innerHTML = localStorage.getItem('score');

function Ahorcado(){
    if (localStorage.getItem('score') >= 1){
         const pintar = document.getElementById('puntos')
        function aleatorio(inferior,superior){
            numPosibilidades = superior - inferior + 1
            aleat = Math.random() * numPosibilidades
            aleat = Math.floor(aleat)
            return parseInt(inferior) + aleat
            }
            
            function esta(caracter, miarray){
            //console.log("buscando ", caracter, " en ", miarray)
            for(var j=0;j<miarray.length;j++){
            if (caracter==miarray[j]){
                  return true;
            }else{
                  //console.log("el caracter ", caracter, " no es el valor del array ",miarray[j] )
               }
            }
            return false;
            }
            
            function estanTodas(arrayAciertos, mipalabra){
               for(var i=0; i<mipalabra.length; i++){
                  if(!esta(mipalabra.charAt(i),arrayAciertos))
                     return false;
               }
               return true;
            }
            
            ////////////////////////////////////////////////////////////////////////////////
            // PALABRAS
            ////////////////////////////////////////////////////////////////////////////////
            var palabras = ['reglamentarias', 'informativas', 'pare', 'doble_via', 'ceda_el_paso', 'glorieta', 'difurcacion_derecha', 'bifurcacion_en_y', 'croquis', 'aeropuerto', 'zona_militar', 'banderillo', 'equipo_pesado', 'material_radiactivo'];
            var palabraEscogida = palabras[aleatorio(0,palabras.length-1)]
            var aciertos = [];
            
            //console.log(palabraEscogida);
            
            function escribePalabra(palabra, arrayAciertos){
               //console.log("estoy en escribePalabra y arrat de aciertos es: " , arrayAciertos);
               var texto = '';
               for(var i=0; i<palabra.length; i++){
                  texto += "<span>";
                  var cActual = palabra.charAt(i);
                  if(esta(cActual,arrayAciertos)){
                     texto += cActual;
                  }else{
                     texto += '_';
                  }
                  texto += "</span>";
                  //console.log(cActual)
               }
               $("#letras").html(texto);
            }
            
            
            
            ////////////////////////////////////////////////////////////////////////////////
            //// inicio todo!!!
            ////////////////////////////////////////////////////////////////////////////////
            $(document).ready(function(){
               
               //creo los botones con las letras
               var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', '&#209;', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_'];
               for(i=0; i<letras.length; i++){
                  //creo el span de la letra
                  letraActual = $('<span class="botonletra">' + letras[i] + '</span>');
                  letraActual.data("letra",letras[i]);
                  //lo convierto en un bot�n
                  letraActual.button();
                  letraActual.click(function(){
                     //traigo la letra pulsada
                     var miletra = $(this).data("letra").toLowerCase()
                     //miro si esa letra est� en la palabra
                     if(palabraEscogida.indexOf(miletra)!=-1){
                        //si est�, va para aciertos
                        aciertos.push(miletra);
                        escribePalabra(palabraEscogida, aciertos);
                        //miro si ha ganado
                        if(estanTodas(aciertos,palabraEscogida)){
                           Swal.fire({
                              icon: 'success',
                              title: 'Felicidades. has ganado, Si deseas puedes volver a jugar',
                              text: '¡CAMPEON!',
                              customClass: {
                                 popup: 'popFon',
                                 title: 'Titulo',
                                 text: 'Texto' 
                              },
                              footer: 'Reftresca la pagina para jugar mas!!'
                           });
                           const contador = localStorage.getItem('score');
                           localStorage.setItem('score', parseInt(contador) + 1);
                           pintar.innerText = localStorage.getItem('score');
                        }
                     }else{
                        //no estaba
                        numFallos++;
                        dibujaAhorado(numFallos);
                        //miro si se ha perdido
                        if(numFallos==6){
                            //
                                 Swal.fire({
                                    icon: 'error',
                                    title: 'Lo lamento la palabra era: ' + palabraEscogida,
                                    text: 'Suerte a la proxima!!',
                                    customClass: {
                                       popup: 'popFon',
                                       title: 'Titulo',
                                       text: 'Texto' 
                                    },
                                    footer: 'Reftresca la pagina para jugar mas!!'
                                 });
                                 const contador = localStorage.getItem('score');
                                 localStorage.setItem('score', parseInt(contador) - 1);
                                 pintar.innerText = localStorage.getItem('score');
                            //} 
                        }
                     }
                     //una vez pulsado el bot�n, lo desabilito y quito su evento click
                     $(this).button("disable");
                     $(this).unbind( "click" );
                     
                  })
                  $("#botonesletras").append(letraActual);
               }
               
               //inicio el canvas
               dibujaAhorado(numFallos);
               
               //inicio las palabras
               escribePalabra(palabraEscogida, aciertos);
               
            });
            
            /////////////////////////////////
            //CANVAS
            /////////////////////////////////
            function cargaContextoCanvas(idCanvas){
               var elemento = document.getElementById(idCanvas);
               if(elemento && elemento.getContext){
                  var contexto = elemento.getContext('2d');
                  if(contexto){
                     return contexto;
                  }
               }
               return false;
            }
            function borrarCanvas(contexto, anchura, altura){
               contexto.clearRect(0,0,anchura,anchura);
            }
            function dibujaHorca(ctx){
               ctx.fillStyle = '#462501';
               ctx.fillRect(64,9,26,237);
               ctx.fillRect(175,193,26,53);
               ctx.fillRect(64,193,136,15);
               ctx.fillRect(64,9,115,11);
               ctx.beginPath();
               ctx.moveTo(64,65);
               ctx.lineTo(64,80);
               ctx.lineTo(133,11);
               ctx.lineTo(118,11);
               ctx.fill();
            }
            function dibujaCabeza(ctx){
               var img = new Image(); 
               img.onload = function(){
                  ctx.fillStyle = '#f2d666';
                  ctx.drawImage(img,150,38);
                  ctx.fillRect(172,12,4,28);
               } 
               img.src = '../Multimedia/cara.png'; 
            }
            function dibujaCuerpo(ctx){
               ctx.beginPath();
               ctx.fillStyle = '#000000';
               ctx.moveTo(171,82);
               ctx.lineTo(168,119);
               ctx.lineTo(162,147);
               ctx.lineTo(189,149);
               ctx.lineTo(185,111);
               ctx.lineTo(183,83);
               ctx.fill()
            }
            function dibujaBrazoIzq(ctx){
               ctx.beginPath();
               ctx.moveTo(173,102);
               ctx.lineTo(140,128);
               ctx.lineTo(155,133);
               ctx.lineTo(178,114);
               ctx.fill()
            }
            function dibujaBrazoDer(ctx){
               ctx.beginPath();
               ctx.moveTo(180,99);
               ctx.lineTo(222,121);
               ctx.lineTo(209,133);
               ctx.lineTo(183,110);
               ctx.fill()
            }
            function dibujaPiernaIzq(ctx){
               ctx.beginPath();
               ctx.moveTo(166,142);
               ctx.lineTo(139,175);
               ctx.lineTo(164,178);
               ctx.lineTo(175,144);
               ctx.fill()
            }
            function dibujaPiernaDer(ctx){
               ctx.beginPath();
               ctx.moveTo(178,145);
               ctx.lineTo(193,178);
               ctx.lineTo(212,170);
               ctx.lineTo(188,142);
               ctx.fill()
            }
            ////////////////////////////////////////////////////////
            // GESTION DE FALLOS
            ////////////////////////////////////////////////////////
            var numFallos = 0;
            function dibujaAhorado(numerrores){
               var contexto = cargaContextoCanvas('canvasahorcado');
               if(contexto){
                    dibujaHorca(contexto);
                    if(numFallos>0){
                       dibujaCabeza(contexto)
                    }
                    contexto.fillStyle = '#1f3e18';
                    if(numFallos>1){
                       dibujaCuerpo(contexto)
                    }
                    if(numFallos>2){
                       dibujaBrazoIzq(contexto)
                    }
                    if(numFallos>3){
                       dibujaBrazoDer(contexto)
                    }
                    if(numFallos>4){
                       dibujaPiernaIzq(contexto)
                    }
                    if(numFallos>5){
                       dibujaPiernaDer(contexto)
                    }
               }
            }
    }else{
        document.write("Lo sentimos no cuntas con score suficiente")
    }
};

function Triki(){
    if (localStorage.getItem('score') >= 1) {
        var image1=new Image;image1.src="../Multimedia/X.png";
        var image2=new Image;image2.src="../Multimedia/O.png";
        var level=1,myway,mynextmove,tmp,done,iswon,content,pcwins=[0,0,0,0],playerwins=[0,0,0,0],draws=[0,0,0,0],playerstarts=!0,moves=new Array,game=new Array(9),choices=[11,12,13,21,22,23,31,32,33],corners=[11,13,31,33],ways=new Array;ways[1]=[0,11,12,13],ways[2]=[0,21,22,23],ways[3]=[0,31,32,33],ways[4]=[0,11,21,31],ways[5]=[0,12,22,32],ways[6]=[0,13,23,33],ways[7]=[0,11,22,33],ways[8]=[0,13,22,31];
        var w3c=!!document.getElementById,ns4=!!document.layers,ie4=!(!document.all||w3c),ie5=!(!document.all||!w3c),ns6=!!(w3c&&navigator.appName.indexOf("Netscape")>=0);function init(){for(oktoplay=!0,iswon=!1,done=0,writetext(4),moves[11]=0,moves[12]=0,moves[13]=0,moves[21]=0,moves[22]=0,moves[23]=0,moves[31]=0,moves[32]=0,moves[33]=0,i=0;i<=8;i++)document.images["rc"+choices[i]].src="../Multimedia/nothing.gif",document.images["rc"+choices[i]].alt="",game[i]=0;playerstarts||pcturn()}
        function writetext(e){switch(e){
            case 1:
                content="Este juego es un empate";
            break;
            case 2:
                content="La computadora ganó este round.";
            break;
            case 3:
                content="Ganas este round.";
            break;
            case 4:
                content="NIVEL: "+level+"\n\nComputadora gana:  Este nivel- "+pcwins[level]+"  (Total: "+(pcwins[0]+pcwins[1]+pcwins[2]+pcwins[3])+")\nJugador gana  :  Este nivel- "+playerwins[level]+"  (Total: "+(playerwins[0]+playerwins[1]+playerwins[2]+playerwins[3])+")\nEmpates        :  Este nivel- "+draws[level]+"  (Total: "+(draws[0]+draws[1]+draws[2]+draws[3])+")"}
            document.scores.scores2.value=content,e<4&&setTimeout("init(4)",1e3)}
            function setlevel(e){level!=e&&(level=e,init())}

            function setbutton(e){
                iswon||(0==moves[e]?(document.images["rc"+e].src="../Multimedia/X.png",document.images["rc"+e].alt=" X ",moves[e]=1,game[done]=e,done++,findwinner(!0)):alert("No puedes mover aqui!"))
            }

            function pcstrategy(e){if(level>0){var a=e?2:1;for(n=1;n<=8;n++)moves[ways[n][1]]==a&&moves[ways[n][2]]==a&&0==moves[ways[n][3]]&&(tmp=ways[n][3]),moves[ways[n][1]]==a&&moves[ways[n][3]]==a&&0==moves[ways[n][2]]&&(tmp=ways[n][2]),moves[ways[n][2]]==a&&moves[ways[n][3]]==a&&0==moves[ways[n][1]]&&(tmp=ways[n][1])}}

            function selecCorner(e){
                if("empty"==e)do{tmp=corners[Math.floor(4*Math.random())]}while(0!=moves[tmp]);else tmp=corners[Math.floor(4*Math.random())]}function pcdontlose(){if(playerstarts)3==level&&(1==done?11==game[0]||13==game[0]||31==game[0]||33==game[0]?(tmp=22,myway=1):22==game[0]?(selecCorner("any"),myway=2):(tmp=22,myway=3):3==done?1==myway?tmp=game[2]==44-game[0]?choices[1+2*Math.floor(4*Math.random())]:44-game[0]:2==myway?game[2]==44-game[1]&&selecCorner("empty"):3==myway&&(11!=game[2]&&13!=game[2]&&31!=game[2]&&33!=game[2]||(tmp=44-game[2]),game[2]==44-game[0]?(dlta=22-game[2],tmp=22+10/dlta,mynextmove=tmp+dlta):(dlta=22-game[0],op0=game[0]+10/dlta,op1=game[0]-10/dlta,op2=game[2]+dlta,tmp=eval("op"+Math.floor(3*Math.random())))):5==done&&3==myway&&(tmp=mynextmove));else if(0==done)tmp=choices[2*Math.floor(5*Math.random())],myway=22==tmp?1:2;else if(2==done)1==myway?11==game[1]||13==game[1]||31==game[1]||33==game[1]?tmp=44-game[1]:(dlta=22-game[1],op0=22+dlta+10/dlta,op1=22+dlta-10/dlta,tmp=eval("op"+Math.floor(2*Math.random()))):2==myway&&(22==game[1]?(tmp=44-game[0],myway=21):11==game[1]||13==game[1]||31==game[1]||33==game[1]?(selecCorner("empty"),myway=22):(tmp=22,myway=23));else if(4==done)if(22==myway)for(i=0;i<4;i++)0==moves[corners[i]]&&(tmp=corners[i]);else 23==myway?(dlta=game[1]-game[0],op0=44-(game[1]+dlta),op1=(op0+game[0])/2,tmp=eval("op"+Math.floor(2*Math.random()))):1==myway&&(tmp=44+game[2]-2*game[3])}function findwinner(e){for(me=e?1:2,n=1;n<=8;n++)if(moves[ways[n][1]]==me&&moves[ways[n][2]]==me&&moves[ways[n][3]]==me){iswon=!0;break}iswon?e?(playerwins[level]++,playerstarts=!0,writetext(3)):(pcwins[level]++,playerstarts=!1,writetext(2)):done>8?(draws[level]++,playerstarts=!playerstarts,writetext(1)):e&&pcturn()}function pcrandom(){do{tmp=choices[Math.floor(9*Math.random())]}while(0!=moves[tmp])}function pcturn(){tmp="00",pcstrategy(!0),"00"==tmp&&pcstrategy(!1),"00"==tmp&&level>1&&pcdontlose(),"00"==tmp&&pcrandom(),moves[tmp]=2,game[done]=tmp,document.images["rc"+tmp].src="../Multimedia/O.png",document.images["rc"+tmp].alt=" O ",done++,findwinner(!1)}window.onload=init,window.onresize=function(){ns4&&setTimeout("history.go(0)",400)};
    }else{
        document.write("Lo sentimos no cuntas con score suficiente")
    }
};