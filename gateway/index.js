const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(morgan("dev"));
app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);
app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);
app.use(
  "/databases",
  createProxyMiddleware({
    target: "http://databases:8004",
    pathRewrite: { "^/databases": "" },
    changeOrigin: true,
  })
);
app.listen(8000, () => {
  console.log("Gateway in port 8000");
});
