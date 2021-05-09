import {UserObj} from '@types';

export type ApiResponseT = UserObj[];

export type AxiosResponse = {
  config: {
    method: string;
    timeout: number;
    baseURL: string;
    url: string;
  };
  request: XMLHttpRequest;
  response: {
    data: ApiResponseT;
    headers: object;
    status: number;
    statusText: string;
  };
  isAxiosError: boolean;
  toJSON: Function;
  data: ApiResponseT;
  token: ApiResponseT;
}

export type ApiResponse = {
  success: boolean;
  error: string;
  token: string;
  hasLoggedIn: boolean;
  data: ApiResponseT;
}
