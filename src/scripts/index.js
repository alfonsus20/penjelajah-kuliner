import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import scrollToTop from './utils/util';

const app = new App({
  button: document.querySelector('#burger'),
  drawer: document.querySelector('#navlist'),
  navItems: document.querySelectorAll('.nav__list__item'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  scrollToTop();
  app.renderPage();
});

window.addEventListener('load', () => {
  scrollToTop();
  app.renderPage();
  swRegister();
});
