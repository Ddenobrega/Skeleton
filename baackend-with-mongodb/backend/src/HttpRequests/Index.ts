import { Request, Response, Router } from "express";

class Index {
	router = Router();
	constructor() {
		this.router.get("/", this.index);
	}
	index = (request: Request, response: Response) => {
		response.send("Test");
	};
}

export default new Index().router;
