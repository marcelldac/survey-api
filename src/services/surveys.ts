import { emptyDataError } from "../errors";
import { Data } from "../utils/types";

type DataIndex = { dataIndex: number };

export class SurveyService {
  private findDataIndex = (data: Data[], id: string): DataIndex => {
    const EMPTY_DATA: number = -1;
    const dataIndex = data.findIndex((element) => element.id === id);
    if (dataIndex === EMPTY_DATA) emptyDataError();
    return { dataIndex };
  };

  public createData = (data: Data[], id: string, title: string): void => {
    const payload: Data = {
      id,
      title,
    };
    data.push(payload);
  };

  public updateData = (data: Data[], id: string, title: string): void => {
    const { dataIndex } = this.findDataIndex(data, id);
    data[dataIndex].title = title;
  };

  public removeData = (data: Data[], id: string): void => {
    const { dataIndex } = this.findDataIndex(data, id);
    data.splice(dataIndex, 1);
  };
}
