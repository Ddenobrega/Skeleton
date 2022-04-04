interface Iparamaters {
	port: number;
}

export default class Env {
	port: number;

	constructor(parameters: Iparamaters) {
		this.port = parameters.port;
	}
}
