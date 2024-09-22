export interface TableColumn<T, Key extends keyof T> {
  name: Key;
  header: string;
};
