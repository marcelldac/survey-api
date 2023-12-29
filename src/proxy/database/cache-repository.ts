import { findManyError } from "../../errors";
import { Survey } from "../../utils/types";
import { PostgreSqlRepository } from "./postgres-repository";
import { SurveyRepository } from "./repository";

export class CacheSurveysRepository implements SurveyRepository {
  private cache: Survey[] = [];
  private postgreSqlRepository = new PostgreSqlRepository();

  findMany(): Survey[] | any {
    try {
      this.postgreSqlRepository.connect();
      if (this.cache.length === 0) {
        const surveys = this.postgreSqlRepository.findMany();
        this.create(surveys);
        return surveys;
      }
      this.postgreSqlRepository.disconnect();
      return this.cache;
    } catch (error) {
      console.error(error);
      findManyError();
    } finally {
      this.postgreSqlRepository.disconnect();
    }
  }

  create(data: any) {
    this.cache.push(data);
    return this.postgreSqlRepository.findMany();
  }
}
