import Server from "./src/Server";
import Database from "./src/Database";
import Env from "./src/Environment";

class Index {
	environment = new Env({
		port: 3000,
		databaseUrl: "127.0.0.1",
		databaseDocument: "/test",
	});

	constructor() {
		this.initalize();
	}

	initalize = () => {
		new Server(this.environment.port);
		new Database(
			this.environment.databaseUrl,
			this.environment.databaseDocument
		);
	};
}

new Index();
