import {UserObj} from '@types';

export type Data = UserObj[] | UserObj | null;
export type ApiResponseT = {success: boolean; data: Data};

export type AxiosResponse = {
  config: {
    method: string;
    timeout: number;
    baseURL: string;
    url: string;
  };
  request: XMLHttpRequest;
  response: {
    data: Data;
    headers: object;
    status: number;
    statusText: string;
  };
  isAxiosError: boolean;
  toJSON: Function;
  data: Data;
}

export type ApiResponse = {
  success: boolean;
  error: string;
  token: string;
  hasLoggedIn: boolean;
  data: Data;
}
