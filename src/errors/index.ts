export const emptySurveyError = (message?: string): Error => {
  throw new Error(message || "Data is Empty");
};

export const databaseConnectionError = (message?: string): Error => {
  throw new Error(message || "Database connection error");
};

export const findManyError = (message?: string): Error => {
  throw new Error(message || "Failed to find surveys");
};
