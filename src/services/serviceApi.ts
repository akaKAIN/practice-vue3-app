import { AxiosInstance } from 'axios';
import axios from 'axios';

export default class ServiceApi {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.VUE_APP_FB_URL
    });
  }
}
