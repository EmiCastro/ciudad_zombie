/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,

}

// Métodos del objeto Jugador
Jugador.perderVidas = function (cant) {
  this.vidas -= cant;
}

Jugador.mover = function (x, y, tecla) {
  this.x += x;
  this.y += y;
}

Jugador.girar = function (alto, ancho, imagen) {
  Jugador.ancho = ancho;
  Jugador.alto = alto;
  Jugador.sprite = imagen;
}
