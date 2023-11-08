
const Server = require("./controllers/server.js");
const PORT = process.env.PORT;
const server = new Server(PORT);


server.listen();



