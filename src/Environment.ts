interface Iparamaters {
	port: number;
	databaseUrl: string;
	databaseDocument: string;
}

export default class Env {
	port: number;
	databaseUrl: string;
	databaseDocument: string;

	constructor(parameters: Iparamaters) {
		this.port = parameters.port;
		this.databaseUrl = parameters.databaseUrl;
		this.databaseDocument = parameters.databaseDocument;
	}
}
