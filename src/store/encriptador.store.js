const initStore = () => {
    console.log('InitStore is running ...😁 ');

};  



let enter = 'enter',
    imes  = 'imes', 
    ai   = 'ai',
    ober = 'ober',
    ufat = 'ufat';


let e = 'e',
    i = 'i', 
    a = 'a',
    o = 'o',
    u = 'u';

const encriptar = (texto) => {
    
    const nuevaCandena = texto.replaceAll('e', enter).
    replaceAll('i', imes).
    replaceAll('a', ai).
    replaceAll('o', ober).
    replaceAll('u', ufat);
    //console.log(nuevaCandena);
    return nuevaCandena;
}


const desencriptar = (texto) => {

      const nuevaCandena = texto.replaceAll( 'enter',e).
                                 replaceAll( 'imes',i).
                                 replaceAll( 'ai',a).
                                 replaceAll( 'ober',o).
                                 replaceAll( 'ufat',u);
      //console.log(nuevaCandena);
      return nuevaCandena;
}

const copyToClipboard = (texto) => { 

    texto.select();
    document.execCommand('copy');

};   







export default {
    copyToClipboard,
    desencriptar,
    encriptar,
    initStore,
};

