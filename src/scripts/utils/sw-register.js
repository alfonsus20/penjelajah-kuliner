import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  /* eslint-disable no-console */
  console.log('Browser Anda tidak mendukung Service Worker');
};

export default swRegister;
