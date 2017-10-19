var LoboZombie = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {

  Enemigo.call ( this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

LoboZombie.prototype = Object.create(Enemigo.prototype);
LoboZombie.prototype.constructor = LoboZombie;


LoboZombie.prototype.mover = function() {
  /* Utiliza el mismo patrón de movimiento ondulante que el zombie caminante*/
  if (Math.random() < 0.5) {
    this.x -= this.velocidad;
    this.y -= this.velocidad;
  } else {

    this.y += this.velocidad;
    this.x -= this.velocidad;
  }

  /*Si llega al limite izquierdo del rango de movimiento, se invierte su dirección
  hacia la derecha y se carga la imagen 'lobo_der.png' */
  if (this.x < this.rangoMov.desdeX){
    this.velocidad *= -1;
    this.sprite = 'imagenes/lobo_der.png';
  }
   /*Si llega al limite derecho del rango de movimiento, se invierte su dirección
  hacia la izquierda y se carga la imagen 'lobo_izq.png' */
  if (this.x > this.rangoMov.hastaX){
    this.velocidad *= -1;
    this.sprite = 'imagenes/lobo_izq.png';
  }

  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }
}


LoboZombie.prototype.atacar = function (jugador) {
  jugador.perderVidas(3);
}