import html from './app.html?raw';
import encriptadorStore from '../store/encriptador.store';
import { mostrarTarjeta } from './usescases/mostrarTarjeta';




export const App = ( elementId ) => {  

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

    //Referencias HTML

    const encriptarBtn = document.querySelector('#encriptarBtn');
    const desencriptarBtn = document.querySelector('#desencriptarBtn');
    const myInput = document.querySelector('#myInput');
    const myOutput = document.querySelector('#myOutput');
    

    // listeners

    encriptarBtn.addEventListener('click', () => {
        
        const textoEncriptado = encriptadorStore.encriptar(myInput.value);
        //myOutput.value = encriptadorStore.encriptar(myInput.value);
        //myOutput.value = textoEncriptado;
        myOutput.innerText = textoEncriptado;
        //console.log(myOutput);
    });

    myInput.addEventListener('click', () => {
        mostrarTarjeta('#dibujoInicial','#resultado');
    });

    desencriptarBtn.addEventListener('click', () => {
        const textoDesencriptado = encriptadorStore.desencriptar(myInput.value);
        myOutput.innerText = textoDesencriptado;
    });









};









