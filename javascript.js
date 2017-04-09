var serpiente = document.getElementById("serpiente");
document.addEventListener("keydown", moverSerpiente);

var x = 0;
var y = 0;

function moverSerpiente(event){
	var tecla = event.keyCode;
	var movimiento = 100;

	switch(tecla){
		case 37: //izquierda
		x = x-100;
		if(x<0){
			alert("borde");
		}
		serpiente.style.marginLeft = x + "px";
		break;

		case 38: //arriba
		y = y-100;
		if(y<0){
			alert("borde");
		}
		serpiente.style.marginTop = y + "px";
		break;

		case 39: //derecha
		x = x+100;
		if(x>400){
			alert("borde");
		}
		serpiente.style.marginLeft = x + "px";
		break;

		case 40: //abajo
		y = y+100;
		if(y>400){
			alert("borde");
		}
		serpiente.style.marginTop = y + "px";
		break;

		default:
		alert("La serpiente solo se mueve con las fechas");
		break;
	}
}
