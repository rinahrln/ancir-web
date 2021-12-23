import 'regenerator-runtime';

import '../styles/main.css';
import '../styles/custom.css';
import App from './views/app';

const app = new App({
    button: document.querySelector('#menuButton'),
    drawer: document.querySelector('#navbarResponsive'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
