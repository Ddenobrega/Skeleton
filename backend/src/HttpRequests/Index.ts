import { Router } from "express";
import { Request, Response } from "express";

class Index<IHttp> {
	router = Router();
	constructor() {
		this.router.get("/", (request: Request, response: Response) =>
			this.index(request, response)
		);
	}
	index = (request: Request, response: Response) => {};
}

export default new Index().router;
