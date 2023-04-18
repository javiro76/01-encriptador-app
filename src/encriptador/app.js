import html from './app.html?raw';
import encriptadorStore from '../store/encriptador.store';


export const App = ( elementId ) => {  

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();

};


