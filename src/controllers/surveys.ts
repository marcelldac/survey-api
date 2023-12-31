import { NextFunction, Request, Response } from "express";
import { Survey } from "../utils/types";
import { randomUUID } from "node:crypto";
import { SurveyService } from "../services/surveys";

let data: Survey[] = [];

export class SurveysController {
  private surveyService: SurveyService = new SurveyService();

  public read = (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
      next(error);
    }
  };

  public create = (req: Request, res: Response, next: NextFunction) => {
    const id: string = randomUUID();
    const { title }: Survey = req.body;
    try {
      this.surveyService.createSurvey(data, id, title);
      return res.status(201).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
      next(error);
    }
  };

  public update = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title }: Survey = req.body;
    try {
      this.surveyService.updateSurvey(data, id, title);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
      next(error);
    }
  };

  public remove = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      this.surveyService.removeSurvey(data, id);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
      next(error);
    }
  };
}
