import express, { Express } from "express";
import surveysController from "./controllers/surveys";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT!) || 8000;

app.use(express.json());

app.get("/surveys", surveysController.read);
app.post("/surveys", surveysController.create);
app.put("/surveys/:id", surveysController.update);
app.delete("/surveys/:id", surveysController.remove);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
