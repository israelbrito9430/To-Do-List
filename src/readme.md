Componente List => renderizando una lista de todos, click en cada todo => 

emitir un evento al componente padre

El componente padre va a escuchar ese evento, 

y como ya tenemos el elemento que usuario le dio click, lo eliminamos de la variable todost
<!-- Blue esta en la posicion 1 -->
let colors = ['red','blue']

cuando me pasen el todo, quiero encontrar la posicion de ese todo especifico en el array, para despues eliminar


Componente list, escucho cuando le den click al todo, y le emito al padre que "todo" quiero poner en el search

EL padre pasa la informacion a su hijo <Search>

Y el hijo search pone en valor en caja de formulario