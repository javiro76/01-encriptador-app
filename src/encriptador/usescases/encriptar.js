

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


let enter = 'enter',
    imes  = 'imes', 
    ai   = 'ai',
    ober = 'ober',
    ufat = 'ufat';



let texto = 'gato';


const encriptar = (texto) => {

      const nuevaCandena = texto.replaceAll('e', enter).
                                 replaceAll('i', imes).
                                 replaceAll('a', ai).
                                 replaceAll('o', ober).
                                 replaceAll('u', ufat);
      console.log(nuevaCandena);
    return nuevaCandena;

}


encriptar(texto);