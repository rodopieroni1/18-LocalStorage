localStorage.setItem('nombre', 1);
//localStorage.setItem('nombre', 1); no se guardara como entero ya que localStorage almacena solo String
const producto ={
    nombre: "Monitor de 24 Pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto); // convirte un type objeto a String para poder uardar en localStorage
//ya que no se puede guardar si no es String
localStorage.setItem('producto',  productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));