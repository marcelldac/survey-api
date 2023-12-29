import { SurveyRepository } from "./repository";

export class PostgreSqlRepository implements SurveyRepository {
  public findMany(): any {
    return new Array();
  }
}
