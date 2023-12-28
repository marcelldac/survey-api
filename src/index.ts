import express, { Express } from "express";
import { SurveysController } from "./controllers/surveys";

export class Api {
  private app: Express;

  constructor() {
    this.app = express();
    this.setupMiddewares();
    this.setupRoutes();
  }

  private setupMiddewares() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    this.app.get("/surveys", new SurveysController().read);
    this.app.post("/surveys", new SurveysController().create);
    this.app.put("/surveys/:id", new SurveysController().update);
    this.app.delete("/surveys/:id", new SurveysController().remove);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App running on ${port}`);
    });
  }
}
