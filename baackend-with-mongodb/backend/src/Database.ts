import mongoose from "mongoose";

export default class Database {
	url: string = "127.0.0.1";
	document: string = "";
	uri: string = `mongodb://${this.url}/${this.document}`;
	constructor(url: string, document: string) {
		this.url = url;
		this.document = document;
		this.listen().catch(this.error);
	}
	listen = async () => {
		mongoose.connect(this.uri);
	};
	error = (error: Error) =>
		console.error(
			`Database Failed To Start Due to the following Error ${error}`
		);
}
