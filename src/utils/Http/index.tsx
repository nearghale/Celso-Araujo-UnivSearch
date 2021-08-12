/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'http://universities.hipolabs.com';
class HttpService {
  httpService: AxiosInstance;

  constructor() {
    this.httpService = axios.create({
      baseURL: BASE_URL,
    });
  }
}

export const {httpService} = new HttpService();
