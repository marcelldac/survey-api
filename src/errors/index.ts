export const emptyDataError = (message?: string): Error => {
  throw new Error(message || "Data is Empty");
};
