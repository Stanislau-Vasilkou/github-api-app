import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { BASE_API_URL } from '../constants/config'

const instance: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/vnd.github.v3+json',
  },
})

export const get = <T>(url: string, config?: AxiosRequestConfig) =>
  instance.get<T>(url, config)
