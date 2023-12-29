import { Request, Response } from "express";
import { Data } from "../utils/types";
import { randomUUID } from "node:crypto";
import { SurveyService } from "../services/surveys";

let data: Data[] = [];

export class SurveysController {
  private surveyService: SurveyService = new SurveyService();

  public read = (req: Request, res: Response) => {
    try {
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };

  public create = (req: Request, res: Response) => {
    const id: string = randomUUID();
    const { title }: Data = req.body;
    try {
      this.surveyService.createData(data, id, title);
      return res.status(201).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };

  public update = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title }: Data = req.body;
    try {
      this.surveyService.updateData(data, id, title);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };

  public remove = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      this.surveyService.removeData(data, id);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  };
}
