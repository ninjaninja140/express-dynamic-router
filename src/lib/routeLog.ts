import texts from '../constants/texts.js';
import { Request, Response } from 'express';

type TextKeys = keyof typeof texts;
type Middleware = (req: Request, res: Response, next: Function) => void | string;

interface Route {
	key?: string | null;
	method: string;
	url: string;
	controller?: string | null;
	action: string | Middleware;
	middlewares: Middleware[];
}

class RouteLog {
	key: any;
	type: any;
	method: string;
	url: string;
	controller: any;
	action: any;
	middlewares: any;

	constructor(route: Route, type: TextKeys) {
		this.key = route.key || null;
		this.type = texts[type] || texts.unknown;
		this.method = route.method;
		this.url = route.url;
		this.controller = route.controller || null;
		this.action = typeof route.action === 'function' ? texts.inline_code : route.action;

		let middlewareTexts: string[] = route.middlewares.map((middleware: Middleware) => {
			return typeof middleware === 'function' ? `'${texts.inline_code}'` : middleware;
		});

		this.middlewares = middlewareTexts.length > 0 ? middlewareTexts.join(', ') : null;
	}
}

export default RouteLog;
