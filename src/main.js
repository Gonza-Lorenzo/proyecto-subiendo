import './style.css'


const texto1 = () => {
  console.log("Soy el texto 1")
}

console.log(texto1); // REFERENCIA DE LA FUNCION -> Mostrando referencia de la funcion
texto1() // Ejecuntando, invocando, llamando a la funcion

const prueba = (callback) => {
  console.log(callback) // La referencia de la funcion texto1
  console.log('Otra cosa')
  console.log('------')
  console.log('------')
  console.log('Otra cosa mas')
  callback()
}

//prueba(texto1)

console.warn('// ! Callbacks')
// Una funcion que se pasa como argumento a otra funcion