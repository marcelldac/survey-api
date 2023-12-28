import { body } from "express-validator";

export const validations = [
  body("id").exists().isString().notEmpty(),
  body("title").exists().isString().notEmpty(),
];
