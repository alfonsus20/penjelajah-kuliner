import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#burger'),
  drawer: document.querySelector('#navlist'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  window.scroll({ top: 0, left: 0, behavior: 'auto' });
  app.renderPage();
});

window.addEventListener('load', () => {
  window.scroll({ top: 0, left: 0, behavior: 'auto' });
  app.renderPage();
  swRegister();
});
