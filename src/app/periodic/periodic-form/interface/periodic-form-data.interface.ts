
export interface PeriodicFormData<T> {
  index: number;
  field: keyof T;
  row: T;
};
