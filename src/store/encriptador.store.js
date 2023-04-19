const initStore = () => {
    console.log('InitStore is running ...😁 ');

};  



let enter = 'enter',
imes  = 'imes', 
ai   = 'ai',
ober = 'ober',
ufat = 'ufat';



const encriptar = (texto) => {
    
    const nuevaCandena = texto.replaceAll('e', enter).
    replaceAll('i', imes).
    replaceAll('a', ai).
    replaceAll('o', ober).
    replaceAll('u', ufat);
    //console.log(nuevaCandena);
    return nuevaCandena;
}


export default {
    encriptar,
    initStore,
};

