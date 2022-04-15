const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/pokemon',
    createProxyMiddleware({
      target: 'http://[::1]:8080',
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    '/model/model.json',
    createProxyMiddleware({
      target: 'http://[::1]:8080',
      secure: false,
      changeOrigin: true
    })
  );
};