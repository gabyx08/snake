var serpiente = document.getElementById("serpiente");
document.addEventListener("keydown", moverSerpiente);

var reiniciar = document.getElementById("reiniciar");
document.addEventListener("click", reiniciarJuego);


var x = 0;
var y = 0;

function moverSerpiente(event){
	var tecla = event.keyCode;
	var movimiento = 100;

	switch(tecla){
		case 37: //izquierda
		x = x-100;
		if(x<0){
			terminaJuego();
		}
		serpiente.style.marginLeft = x + "px";
		break;

		case 38: //arriba
		y = y-100;
		if(y<0){
			terminaJuego();
		}
		serpiente.style.marginTop = y + "px";
		break;

		case 39: //derecha
		x = x+100;
		if(x>400){
			terminaJuego();
		}
		serpiente.style.marginLeft = x + "px";
		break;

		case 40: //abajo
		y = y+100;
		if(y>400){
			terminaJuego();
		}
		serpiente.style.marginTop = y + "px";
		break;

		default:
		alert("La serpiente solo se mueve con las fechas");
		break;
	}
}


function terminaJuego(){
	alert("Game Over")
	document.removeEventListener("keydown",moverSerpiente);
}

function reiniciarJuego(){
	x=0
	y=0
	serpiente.style.marginLeft = x + "px";
	serpiente.style.marginTop = y + "px";
	document.addEventListener("keydown",moverSerpiente);
}