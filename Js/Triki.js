document.getElementById('puntos').innerHTML = localStorage.getItem('score');
const pintar = document.getElementById('puntos')
if (localStorage.getItem('score') >= 1) {
    var image1=new Image;image1.src="../Multimedia/X.png";var image2=new Image;image2.src="../Multimedia/O.png";var level=1,myway,mynextmove,tmp,done,iswon,content,pcwins=[0,0,0,0],playerwins=[0,0,0,0],draws=[0,0,0,0],playerstarts=!0,moves=new Array,game=new Array(9),choices=[11,12,13,21,22,23,31,32,33],corners=[11,13,31,33],ways=new Array;ways[1]=[0,11,12,13],ways[2]=[0,21,22,23],ways[3]=[0,31,32,33],ways[4]=[0,11,21,31],ways[5]=[0,12,22,32],ways[6]=[0,13,23,33],ways[7]=[0,11,22,33],ways[8]=[0,13,22,31];var w3c=!!document.getElementById,ns4=!!document.layers,ie4=!(!document.all||w3c),ie5=!(!document.all||!w3c),ns6=!!(w3c&&navigator.appName.indexOf("Netscape")>=0);function init(){for(oktoplay=!0,iswon=!1,done=0,writetext(4),moves[11]=0,moves[12]=0,moves[13]=0,moves[21]=0,moves[22]=0,moves[23]=0,moves[31]=0,moves[32]=0,moves[33]=0,i=0;i<=8;i++)document.images["rc"+choices[i]].src="../Multimedia/nothing.gif",document.images["rc"+choices[i]].alt="",game[i]=0;playerstarts||pcturn()}function writetext(e){switch(e){case 1:content="Este juego es un empate";break;case 2:content="La computadora ganó este round.";break;case 3:content="Ganas este round.";break;case 4:content="NIVEL: "+level+"\n\nComputadora gana:  Este nivel- "+pcwins[level]+"  (Total: "+(pcwins[0]+pcwins[1]+pcwins[2]+pcwins[3])+")\nJugador gana  :  Este nivel- "+playerwins[level]+"  (Total: "+(playerwins[0]+playerwins[1]+playerwins[2]+playerwins[3])+")\nEmpates        :  Este nivel- "+draws[level]+"  (Total: "+(draws[0]+draws[1]+draws[2]+draws[3])+")"}document.scores.scores2.value=content,e<4&&setTimeout("init(4)",1e3)}function setlevel(e){level!=e&&(level=e,init())}function setbutton(e){iswon||(0==moves[e]?(document.images["rc"+e].src="../Multimedia/X.png",document.images["rc"+e].alt=" X ",moves[e]=1,game[done]=e,done++,findwinner(!0)):alert("No puedes mover aqui!"))}function pcstrategy(e){if(level>0){var a=e?2:1;for(n=1;n<=8;n++)moves[ways[n][1]]==a&&moves[ways[n][2]]==a&&0==moves[ways[n][3]]&&(tmp=ways[n][3]),moves[ways[n][1]]==a&&moves[ways[n][3]]==a&&0==moves[ways[n][2]]&&(tmp=ways[n][2]),moves[ways[n][2]]==a&&moves[ways[n][3]]==a&&0==moves[ways[n][1]]&&(tmp=ways[n][1])}}function selecCorner(e){if("empty"==e)do{tmp=corners[Math.floor(4*Math.random())]}while(0!=moves[tmp]);else tmp=corners[Math.floor(4*Math.random())]}function pcdontlose(){if(playerstarts)3==level&&(1==done?11==game[0]||13==game[0]||31==game[0]||33==game[0]?(tmp=22,myway=1):22==game[0]?(selecCorner("any"),myway=2):(tmp=22,myway=3):3==done?1==myway?tmp=game[2]==44-game[0]?choices[1+2*Math.floor(4*Math.random())]:44-game[0]:2==myway?game[2]==44-game[1]&&selecCorner("empty"):3==myway&&(11!=game[2]&&13!=game[2]&&31!=game[2]&&33!=game[2]||(tmp=44-game[2]),game[2]==44-game[0]?(dlta=22-game[2],tmp=22+10/dlta,mynextmove=tmp+dlta):(dlta=22-game[0],op0=game[0]+10/dlta,op1=game[0]-10/dlta,op2=game[2]+dlta,tmp=eval("op"+Math.floor(3*Math.random())))):5==done&&3==myway&&(tmp=mynextmove));else if(0==done)tmp=choices[2*Math.floor(5*Math.random())],myway=22==tmp?1:2;else if(2==done)1==myway?11==game[1]||13==game[1]||31==game[1]||33==game[1]?tmp=44-game[1]:(dlta=22-game[1],op0=22+dlta+10/dlta,op1=22+dlta-10/dlta,tmp=eval("op"+Math.floor(2*Math.random()))):2==myway&&(22==game[1]?(tmp=44-game[0],myway=21):11==game[1]||13==game[1]||31==game[1]||33==game[1]?(selecCorner("empty"),myway=22):(tmp=22,myway=23));else if(4==done)if(22==myway)for(i=0;i<4;i++)0==moves[corners[i]]&&(tmp=corners[i]);else 23==myway?(dlta=game[1]-game[0],op0=44-(game[1]+dlta),op1=(op0+game[0])/2,tmp=eval("op"+Math.floor(2*Math.random()))):1==myway&&(tmp=44+game[2]-2*game[3])}
    function findwinner(e){
        const contador = localStorage.getItem('score')
        for(me=e?1:2,n=1;n<=8;n++)if(moves[ways[n][1]]==me&&moves[ways[n][2]]==me&&moves[ways[n][3]]==me){iswon=!0;break}iswon?e?(playerwins[level]++,playerstarts=!0,localStorage.setItem('score', parseInt(contador) + 1 ),writetext(3)):(pcwins[level]++,playerstarts=!1,localStorage.setItem('score', parseInt(contador) - 1 ),writetext(2)):done>8?(draws[level]++,playerstarts=!playerstarts,writetext(1)):e&&pcturn()
        pintar.innerText = localStorage.getItem('score')

    }
    function pcrandom(){do{tmp=choices[Math.floor(9*Math.random())]}while(0!=moves[tmp])}function pcturn(){tmp="00",pcstrategy(!0),"00"==tmp&&pcstrategy(!1),"00"==tmp&&level>1&&pcdontlose(),"00"==tmp&&pcrandom(),moves[tmp]=2,game[done]=tmp,document.images["rc"+tmp].src="../Multimedia/O.png",document.images["rc"+tmp].alt=" O ",done++,findwinner(!1)}window.onload=init,window.onresize=function(){ns4&&setTimeout("history.go(0)",400)};

}