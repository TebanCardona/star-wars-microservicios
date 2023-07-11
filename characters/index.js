const server = require("./src/server");
const port = 8001;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
