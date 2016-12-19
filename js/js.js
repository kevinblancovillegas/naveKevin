var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;
var altura=70;

//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
		document.getElementById("pause").innerHTML="REINICIAR";
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
		document.getElementById("pause").innerHTML="PAUSEE";
	}
	//Botón de reinicar
	document.getElementById("pause").onclick = function() {
		window.location.reload();
	}

	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();
}

//Definición de funciones
function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	v +=a*dt;
	document.getElementById("velocidad").innerHTML=v.toFixed(0);
	y +=v*dt;
	document.getElementById("altura").innerHTML=altura-y.toFixed(0);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
		if (v>6) {
			document.getElementById("nave-img").src='img/explosion.gif';
			setTimeout(function() {
			  document.getElementById('nave-img').style.display='none';
			}, 900);	
		}else{
			alert("¡¡¡¡FELICITACIONES!!! \n HAS ATERRIZADO SIN PROBLEMAS");
		}
	}	
}
function motorOn(){
	a=-g;
	if (timerFuel==null)
		timerFuel=setInterval(function(){ actualizarAltura(); }, 100);

	document.getElementById("nave-img").src='img/nave-on.png';		
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;

	document.getElementById("nave-img").src='img/nave-off.png';	
}
function actualizarAltura(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	fuel-=1;
	document.getElementById("fuel").innerHTML=fuel;
	/*document.getElementById("fuel").style.width=fuel;*/
}
