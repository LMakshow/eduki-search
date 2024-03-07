import { Env } from '@env';
import axios from 'axios';
export const client = axios.create({
  baseURL: Env.API_URL,
  headers: { Authorization: `Bearer ${Env.ACCESS_TOKEN}` },
});
