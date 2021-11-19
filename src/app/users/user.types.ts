export interface User {
  email: string;
  gender: string;
  id?: number;
  name: string;
  status: string;
}

export interface UserResponse {
  data: User[];
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
