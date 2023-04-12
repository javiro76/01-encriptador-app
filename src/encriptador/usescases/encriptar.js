
let texto = 'Hola mundo todas e';


const encriptar = (texto) => {

      const nuevaCandena = texto.replaceAll('a', '4');
      console.log(nuevaCandena);
      console.log(typeof(nuevaCandena));

}


//console.log('hola mundo');
encriptar(texto);