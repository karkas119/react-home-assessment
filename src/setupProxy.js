const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/documents',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_DEVELOPMENT_API_ENDPOINT}`,
      changeOrigin: true,
    })
  );
};