import { Api } from ".";

const PORT: number = parseInt(process.env.PORT!) || 8000;

const api = new Api();

api.start(PORT);
