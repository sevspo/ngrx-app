export interface ResponseBase<T> {
  data: T;
  meta: {
    pagination: {
      limit: number;
      links: {
        current: string;
        next: string;
        previous: string;
      };
      page: number;
      pages: number;
      total: number;
    };
  };
}
