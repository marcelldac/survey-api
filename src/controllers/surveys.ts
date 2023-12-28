import { Request, Response } from "express";
import { Data } from "../utils/types";
import { randomUUID } from "node:crypto";
import surveysService from "../services/surveys";

let data: Data[] = [];

const read = (req: Request, res: Response) => {
  try {
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

const create = (req: Request, res: Response) => {
  const id: string = randomUUID();
  const { title }: Data = req.body;

  try {
    surveysService.createData(data, id, title);
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

const update = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    surveysService.updateData(data, id, title);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    surveysService.removeData(data, id);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

const surveysController = {
  read,
  create,
  update,
  remove,
};

export default surveysController;
