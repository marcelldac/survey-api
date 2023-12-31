import { Survey } from "../../utils/types";

export abstract class SurveyRepository {
  abstract findMany(): Survey[];
}
