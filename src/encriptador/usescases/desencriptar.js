

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


let e = 'e',
    i = 'i', 
    a = 'a',
    o = 'o',
    u = 'u';



let texto = 'gaitober';


const desencriptar = (texto) => {

      const nuevaCandena = texto.replaceAll( 'enter',e).
                                 replaceAll( 'imes',i).
                                 replaceAll( 'ai',a).
                                 replaceAll( 'ober',o).
                                 replaceAll( 'ufat',u);
      console.log(nuevaCandena);
}


desencriptar(texto);