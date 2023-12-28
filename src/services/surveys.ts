import { emptyDataError } from "../errors";
import { Data } from "../utils/types";

const EMPTY_DATA: number = -1;

const createData = (data: Data[], id: string, title: string): void => {
  const payload: Data = {
    id,
    title,
  };
  data.push(payload);
};

const updateData = (data: Data[], id: string, title: string): void => {
  const dataIndex = data.findIndex((element) => element.id === id);
  if (dataIndex === EMPTY_DATA) emptyDataError();
  data[dataIndex].title = title;
};

const removeData = (data: Data[], id: string): void => {
  const dataIndex = data.findIndex((element) => element.id === id);
  if (dataIndex === EMPTY_DATA) emptyDataError();
  data.splice(dataIndex, 1);
};

const surveysService = {
  createData,
  updateData,
  removeData,
};

export default surveysService;
