export interface Page<T> {
  items: T[];
  page: number;
  total: number;
}
