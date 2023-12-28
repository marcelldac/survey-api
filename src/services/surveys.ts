import { emptyDataError } from "../errors";
import { Data } from "../utils/types";

const EMPTY_DATA: number = -1;

export class SurveyService {
  public createData = (data: Data[], id: string, title: string): void => {
    const payload: Data = {
      id,
      title,
    };
    data.push(payload);
  };

  public updateData = (data: Data[], id: string, title: string): void => {
    const dataIndex = data.findIndex((element) => element.id === id);
    if (dataIndex === EMPTY_DATA) emptyDataError();
    data[dataIndex].title = title;
  };

  public removeData = (data: Data[], id: string): void => {
    const dataIndex = data.findIndex((element) => element.id === id);
    if (dataIndex === EMPTY_DATA) emptyDataError();
    data.splice(dataIndex, 1);
  };
}
