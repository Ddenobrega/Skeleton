import express from "express";
import http from "http";

import HttpRequests from "./HttpRequests";

export default class Server {
	app = express();
	server = http.createServer(this.app);
	port: number;

	constructor(port: number) {
		this.port = port;
		this.routes();
		this.listen();
	}

	routes() {
		this.app.use("/", HttpRequests);
	}

	callback = () => console.log(`Backend Running on port: ${this.port}`);

	listen = () =>
		this.port === undefined
			? console.error("Error No Port Supplied")
			: this.server.listen(this.port, this.callback);
}
