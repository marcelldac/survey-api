import { findManyError } from "../../errors";
import { Survey } from "../../utils/types";
import { PostgreSqlRepository } from "./postgres-repository";
import { SurveyRepository } from "./repository";

export class CacheSurveysRepository implements SurveyRepository {
  private cache: Survey[] = [];
  private postgreSqlRepository = new PostgreSqlRepository();

  findMany(): Survey[] | any {
    try {
      if (this.cache.length === 0) {
        const surveys = this.postgreSqlRepository.findMany();
        this.create(surveys);
        return surveys;
      }
      return this.cache;
    } catch (error) {
      console.error(error);
      findManyError();
    }
  }

  create(data: any) {
    this.cache.push(data);
    return this.postgreSqlRepository.findMany();
  }
}
