const server = require("./src/server");
const port = 8003;
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
