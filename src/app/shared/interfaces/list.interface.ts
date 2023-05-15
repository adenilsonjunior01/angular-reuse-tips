export interface List<T, P> {
  filter(list: T): any;
  orderBy(list: T, param: P): T;
}
