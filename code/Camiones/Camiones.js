var camionHorizontal = {
  posX: -canvas.width - 500,//ancho
  posY: 300,
  posDerecha: canvas.width + 500,//ancho
  posIzquierda: -canvas.width - 500,//ancho
  ancho: 500,
  alto: 280,
  velocidad: 10,
  salirIzquierda: false,
  salirDerecha: false,
  color:"#5a5d62"
}

var camionVertical = {
  posX: 100,
  posY: canvas.height + 500,//alto
  posArriba: canvas.height + 500,//alto
  posAbajo: -canvas.height - 500,//alto
  ancho: 280,
  alto: 500,
  velocidad: 10,
  salirArriba: true,
  salirAbajo: false,
  color:"#5a5d62"
}

var numeroC = 0;

function moverCamiones()
{

  function lolCamiones()
  {

    //Sumar velocidad de camiones y sumar puntaje
    numeroC++;
    if(p1.colicion === false)
    {
      p1.puntaje++;
      puntajeP1.innerHTML = p1.puntaje;
      puntajeFinal.innerHTML = p1.puntaje;

      //Si el puntaje es mayor a puntos maximos
      if(p1.puntaje > puntosMaximos){
        puntosMaximos = p1.puntaje;
        document.querySelector("#puntosMaximos").innerHTML = "puntaje maximo: " + puntosMaximos;
      }
    }

    if(p2.colicion === false && p2.vasAjugar === true)
    {
      p2.puntaje++;
      puntajeP2.innerHTML = p2.puntaje;
      puntajeFinal.innerHTML = `${p1.puntaje} - ${p2.puntaje}`;
    }

    if(p2.colicion === true && p1.colicion === true || p1.colicion === true && p2.vasAjugar === false)
    {
      //Si pierdes, aparece el modal y se guarda en localStorage
      perder = true;
      if(perder)
      {
        localStorage.setItem("maximunPoints",puntosMaximos);
        animacionEntradaOSalida(ModalPerdiste,ModalPuntaje,1)
      }


    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }   

    camionVertical.posX = Math.floor(Math.random() * canvas.width - 10 );
    camionHorizontal.posY = Math.floor(Math.random() * canvas.height - 10);

    var numeroAleatorio = getRandomInt(1, 4);

    //Sube
    if(numeroAleatorio === 1)
    {
      camionVertical.salirArriba = true;
      camionVertical.salirAbajo = false;

      camionHorizontal.salirDerecha = false;
      camionHorizontal.salirIzquierda = false;

      camionVertical.posY = camionVertical.posArriba;
    }

    //Baja
    if(numeroAleatorio === 2)
    {
      camionVertical.salirArriba = false;
      camionVertical.salirAbajo = true;

      camionHorizontal.salirDerecha = false;
      camionHorizontal.salirIzquierda = false;

      camionVertical.posY = camionVertical.posAbajo;
    }

    //Avanza
    if(numeroAleatorio === 3)
    {
      camionVertical.salirArriba = false;
      camionVertical.salirAbajo = false;

      camionHorizontal.salirDerecha = false;
      camionHorizontal.salirIzquierda = true;

      camionHorizontal.posX = camionHorizontal.posIzquierda;
    }

    //Retrocede
    if(numeroAleatorio === 4)
    {
      camionVertical.salirArriba = false;
      camionVertical.salirAbajo = false;

      camionHorizontal.salirDerecha = true;
      camionHorizontal.salirIzquierda = false;

      camionHorizontal.posX = camionHorizontal.posDerecha;
    }

  }


  //Sube
  if(camionVertical.salirArriba === true)
  {
    if(camionVertical.posY > -canvas.height - camionVertical.alto)
    {
      camionVertical.posY -= camionVertical.velocidad;
    } else {
      lolCamiones()
    }
  }

  //Baja
  if(camionVertical.salirAbajo === true)
  {
    if(camionVertical.posY < canvas.height + camionVertical.alto)
    {
      camionVertical.posY += camionVertical.velocidad;
    } else {
      lolCamiones()
    }
  }

  //Avanza
  if(camionHorizontal.salirIzquierda === true)
  {
    if(camionHorizontal.posX < canvas.width + camionHorizontal.ancho)
    {
      camionHorizontal.posX += camionHorizontal.velocidad;
    } else {
      lolCamiones()
    }
  }

    //Retrocede
    if(camionHorizontal.salirDerecha === true)
    {
      if(camionHorizontal.posX > -canvas.width - camionHorizontal.ancho)
      {
        camionHorizontal.posX -= camionHorizontal.velocidad;
      } else {
        lolCamiones()
      }
    }


  dibujar(camionVertical.posX,camionVertical.posY,camionVertical.ancho,camionVertical.alto,camionVertical.color)
  dibujar(camionHorizontal.posX,camionHorizontal.posY,camionHorizontal.ancho,camionHorizontal.alto,camionHorizontal.color)

  if(numeroC === 5)
  {
    numeroC = 0;
    camionVertical.velocidad+=2;
    camionHorizontal.velocidad+=2;
  }

}
