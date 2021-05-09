import axios, {AxiosInstance} from 'axios';
import {AxiosResponse, ApiResponseT} from '@types';

class API {
  static axios: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 1000 * 60, // one minute
  });

  /**
   * This is the app's main get method.
   * @method GET
   * @param endpoint - The API endpoint
   * @returns return data from strapi
   */
  static async get(endpoint: string): Promise<ApiResponseT> {
    try {
      return this.handleSuccess(
        await this.axios.get(endpoint)
      );
    } catch (err) {
      return this.handleError(err);
    }
  }

  /**
   * This is the app's main post method.
   * @method POST
   * @param endpoint - The API endpoint
   * @param data - The data being sent with the post.
   * @returns {ApiResponseT} An object containing success and the data
   */
  static async post(
    endpoint: string,
    data: object = {}
  ): Promise<ApiResponseT> {
    try {
      return this.handleSuccess(
        (await this.axios.post(endpoint, data)) as AxiosResponse);
    } catch (err) {
      return this.handleError(err);
    }
  }

  /**
   * This is the app's main put method.
   * @method PUT
   * @param endpoint - The API endpoint
   * @param data - The data being sent with the post.
   * @returns {ApiResponseT} An object containing success and the data
   */
  static async put(endpoint: string, data: object = {}): Promise<ApiResponseT> {
    try {
      return this.handleSuccess(
        (await this.axios.put(endpoint, data)) as AxiosResponse);
    } catch (err) {
      return this.handleError(err);
    }
  }

  /**
   * This is the app's main delete method.
   * @method DELETE
   * @param endpoint - The API endpoint
   * @param data - The data being sent with the post.
   * @returns {ApiResponseT} An object containing success and the data
   */
  static async delete(endpoint: string): Promise<ApiResponseT> {
    try {
      return this.handleSuccess(
        (await this.axios.delete(endpoint)) as AxiosResponse);
    } catch (err) {
      return this.handleError(err);
    }
  }

  /**
   * Handle the API Success
   * @param response - The Axios response
   */
  static handleSuccess(res: AxiosResponse) {
    return {success: true, data: res.data};
  }

  /**
   * Handle the error
   * @param error - the error that was caught
   */
  static handleError(err: any): any {
    return {success: false, data: null};
  }
}

export default API;
