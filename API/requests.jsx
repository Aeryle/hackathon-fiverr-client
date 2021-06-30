import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; //  || 'http://localhost:5000/api/v1'

export const user = {
  getAll: () => axios.get(`${API_URL}/users`).then((res) => res.data),
  getOne: (id) => () => axios.get(`${API_URL}/users/${id}`).then((res) => res.data),
  create: async ({ user }) => axios.post(`${API_URL}/users`, user).then((res) => res.data),
};

export const attachment = {
  getAll: (userId) => () => axios.get(`${API_URL}/attachments${userId ? `?userId=${userId}` : ''}`).then((res) => res.data),
  getOne: (id) => axios.get(`${API_URL}/attachments/${id}`).then((res) => res.data),
  create: async ({ attachment }) => axios.post(`${API_URL}/attachments`, attachment).then((res) => res.data),
  delete: (id) => axios.delete(`${API_URL}/attachments/${id}`).then((res) => res.data),
  getOneFromOneUser: (id, userId) => () => axios.get(`${API_URL}/attachments/${id}${userId ? `?userId=${userId}` : ''}`).then((res) => res.data),
};

export const tag = {
  getAll: () => () => axios.get(`${API_URL}/tags`).then((res) => res.data),
  getOne: (id) => axios.get(`${API_URL}/tags/${id}`).then((res) => res.data),
};
