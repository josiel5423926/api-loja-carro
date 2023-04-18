import { server } from "./server/Server";

const port = 3333;

server.listen(port, () => console.log("listening on port ", port));
