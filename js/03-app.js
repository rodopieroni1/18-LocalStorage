localStorage.removeItem('nombre');

// LocalStorage no posee Update, por ende se debe obtener el valor agregar o sacar y subir nuevamente
const mesesArray = JSON.parse(localStorage.getItem('meses'));
localStorage.setItem('meses', JSON.stringify( mesesArray));
localStorage.clear();