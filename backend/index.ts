import Server from "./src/Server";
import Env from "./src/Environment";

const environment = {
	port: 3000,
};

const Port: number = new Env(environment).port;

new Server(Port);
