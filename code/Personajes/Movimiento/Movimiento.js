
var canvas = document.querySelector("#espacio");
var lienzo = canvas.getContext("2d");



	var movXp1 = 10;
	var movYp1 = 10;

	var movXp2 = 10;
	var movYp2 = 10;
	var velocidad = 10;
	var teclasEstado = {};

	function Dvinci()
	{
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight - 40;

		lienzo.clearRect(0,0,canvas.width,canvas.height)

	}
	function MovimientoP()
	{

		document.addEventListener("keydown",function(ev){
			teclasEstado[ev.keyCode || ev.which] = true;
		})
		document.addEventListener("keyup",function(ev){
		teclasEstado[ev.keyCode || ev.which] = false;
	})
	}


	function mover()
	{
		function colorP1()
		{
			lienzo.fillStyle = "#2f4786";
			lienzo.fillRect(movXp1,movYp1,20,20);
		}

		function colorP2()
		{
			lienzo.fillStyle = "#912c2c";
			lienzo.fillRect(movXp2,movYp2,20,20);
		}

		colorP1();
		colorP2();


		if(movXp1 <= canvas.width-20 && movYp1 <= canvas.height-20 && movXp1 >= 0+10 && movYp1 >= 0+10 )
		{
		if(teclasEstado[87]){movYp1-=velocidad;}
		if(teclasEstado[65]){movXp1-=velocidad;}
		if(teclasEstado[83]){movYp1+=velocidad;}
		if(teclasEstado[68]){movXp1+=velocidad;}
	}else {
			if(movXp1 >= canvas.width-20){movXp1-=velocidad;}
			if(movYp1 >= canvas.height-20){movYp1-=velocidad;}
			if(movXp1 <= 0+10){movXp1 +=velocidad;}
			if(movYp1 <= 0+10){movYp1 +=velocidad;}
	}

	if(movXp2 <= canvas.width-20 && movYp2 <= canvas.height-20 && movXp2 >= 0+10 && movYp2 >= 0+10)
	{
		if(teclasEstado[38]){movYp2-=velocidad;}
		if(teclasEstado[37]){movXp2-=velocidad;}
		if(teclasEstado[40]){movYp2+=velocidad;}
		if(teclasEstado[39]){movXp2+=velocidad;}
	}else {
			if(movXp2 >= canvas.width-20){movXp2-=velocidad;}
			if(movYp2 >= canvas.height-20){movYp2-=velocidad;}
			if(movXp2 <= 0+10){movXp2 +=velocidad;}
			if(movYp2 <= 0+10){movYp2 +=velocidad;}
	}
	}

	MovimientoP()
