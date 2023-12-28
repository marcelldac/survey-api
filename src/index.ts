import express, { Express } from "express";
import { SurveysController } from "./controllers/surveys";

export class Api {
  private app: Express;
  private surveyController: SurveysController = new SurveysController();

  constructor() {
    this.app = express();
    this.setupMiddewares();
    this.setupRoutes();
  }

  private setupMiddewares() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    this.app.get("/surveys", this.surveyController.read);
    this.app.post("/surveys", this.surveyController.create);
    this.app.put("/surveys/:id", this.surveyController.update);
    this.app.delete("/surveys/:id", this.surveyController.remove);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App running on ${port}`);
    });
  }
}
