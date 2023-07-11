const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(morgan("dev"));
app.use(
  "/characters",
  createProxyMiddleware({
    target: "htpp://characters:8001",
    changeOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: "htpp://films:8002",
    changeOrigin: true,
  })
);
app.use(
  "/planets",
  createProxyMiddleware({
    target: "htpp://planets:8003",
    changeOrigin: true,
  })
);
app.use(
  "/databases",
  createProxyMiddleware({
    target: "htpp://databases:8004",
    pathRewrite: { "^/databases": "" },
    changeOrigin: true,
  })
);
app.listen(8000, () => {
  console.log("Gateway in port 8000");
});
