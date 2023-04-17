import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
  key: '35351990-3e649bebcbf749a8e0f23b980',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  isImageModalOpen: false,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`/?q=${query}&page=${page}`, { params });
  return data;
};
