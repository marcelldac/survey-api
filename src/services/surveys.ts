import { emptySurveyError } from "../errors";
import { Survey } from "../utils/types";

type SurveyIndex = { SurveyIndex: number };

export class SurveyService {
  private findSurveyIndex = (Survey: Survey[], id: string): SurveyIndex => {
    const EMPTY_Survey: number = -1;
    const SurveyIndex = Survey.findIndex((element) => element.id === id);
    if (SurveyIndex === EMPTY_Survey) emptySurveyError();
    return { SurveyIndex };
  };

  public createSurvey = (Survey: Survey[], id: string, title: string): void => {
    const payload: Survey = {
      id,
      title,
    };
    Survey.push(payload);
  };

  public updateSurvey = (Survey: Survey[], id: string, title: string): void => {
    const { SurveyIndex } = this.findSurveyIndex(Survey, id);
    Survey[SurveyIndex].title = title;
  };

  public removeSurvey = (Survey: Survey[], id: string): void => {
    const { SurveyIndex } = this.findSurveyIndex(Survey, id);
    Survey.splice(SurveyIndex, 1);
  };
}
