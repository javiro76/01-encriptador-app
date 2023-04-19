
/**
 * 
 * @param {idHTML} noMostrar Selector para ocultar la tarjeta
 * @param {idHTML} mostrar Selector para mostrar la tarjeta
 */

export const mostrarTarjeta = ( noMostrar,mostrar) => {

    
    noMostrar = document.querySelector(noMostrar).style.display = "none";
    mostrar = document.querySelector(mostrar).style.display = "block";
    

};



