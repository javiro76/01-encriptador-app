import './style.css'
import encriptadorStore from './src/store/encriptador.store';
import { App } from './src/encriptador/app';

encriptadorStore.initStore();

App('#app');




