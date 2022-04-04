import { Router } from "express";
import { Request, Response } from "express";

class Index {
	router = Router();
	constructor() {
		this.router.get("/", this.index);
	}
	index = (request: Request, response: Response) => {};
}

export default new Index().router;
