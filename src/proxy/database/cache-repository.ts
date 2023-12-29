import { PostgreSqlRepository } from "./postgres-repository";
import { SurveyRepository } from "./repository";

export class CacheSurveysRepository implements SurveyRepository {
  private cache: any[] = [];
  private postgreSqlRepository = new PostgreSqlRepository();

  findMany(): any[] | null {
    if (this.cache.length === 0) {
      const surveys = this.postgreSqlRepository.findMany();
      this.create(surveys);
      return surveys;
    }
    return this.cache;
  }

  create(data: any[]) {
    this.cache.push(data);
    return this.postgreSqlRepository.findMany();
  }
}
