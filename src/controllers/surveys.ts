import { Request, Response } from "express";
import { Data } from "../utils/types";
import { randomUUID } from "node:crypto";
import { SurveyService } from "../services/surveys";

let data: Data[] = [];

export class SurveysController {
  public read = (req: Request, res: Response) => {
    try {
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };

  public create = (req: Request, res: Response) => {
    const id: string = randomUUID();
    const { title }: Data = req.body;

    try {
      new SurveyService().createData(data, id, title);
      return res.status(201).json(data);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };

  public update = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
      new SurveyService().updateData(data, id, title);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };

  public remove = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      new SurveyService().removeData(data, id);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };
}
