//TODO: Toda rota que voce criar no app, vc tem que referenciar aqui no código da vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        checkout: "./checkout.html",
        //Example:
        pedidos: "./pedidos.html",
      },
    },
  },
};
