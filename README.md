# lunar-landing-javascript
Versión 2.0.0
creador: Kevin Blanco Villegas
fecha: 14/12/2016

* Html con los elementos básicos del juego
* Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla (pruébalo!)
* Js: con el javascript necesario para dejar caer la nave y parar cuando llega a un límite. Actualiza la velocidad y la altura en %/s y % (1% de pantalla = 1 metro).
* Imagenes: nave echo en png para la transparencia
fondo de estrellas que mide 200px pero que se repite como patrón de fondo estelar.
luna sacada de internet y con transparencia.


Previsualización: https://rawgit.com/urbinapro/lunar-landing-javascript/master/index.html

Tareas desarrolladas:
* Fondo de estrellas repetido ya que es un fondo estrellado y que siempre se repite.
* menú: Es un menú que en escritorio se vosualiza a la derecha pero en dispositivos móviles cambia a pantalla completa pero en la parte superior para no congestionar mucho el campo de la nave.
* Al pulsar una tecla o bien hacer click en la pantalla la nave cambia de aspecto a *nave con motor encendido* el truco consiste en cambiar una nave con moteres apagados a una nave con motores encendidos. Se añade fuego de motores con photoshop en la misma posición para que no se note mucho el cambio de una imagen a la otra
* Al pulsar una tecla o bien hacer click en la pantalla se vacia el tanque de combustible de forma proporcional al tiempo que mantenemos pulsado el propulsor. Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego, pero esto se implementará en futuras versiones ya que se tiene que completar el juego con diversas dificultades, naves y ecenarios.
* Al tocar fondo se mira si la velocidad de impacto es inferior a 6 m/s, en caso afirmativo se muestra un mensaje de felicitación, y en caso negativo explotar la nave. En ambos casos el juego puede finalizar y puede reiniciarse con la opción del menú *reiniciar*
* Valores umbrales: 1m/s en modo difícil, 5m/s en modo muy fácil (los modos de dificultad son opcionalmente implementables)
* Existe una página de cómo jugar y otro de acerca de nosotros.

