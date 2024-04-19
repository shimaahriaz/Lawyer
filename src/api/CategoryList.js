import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCategories = async () => {
  const response = await axios.get('https://ymtaz.sa/api/client/digital-guide/categories');
  console.log(response.data)
  if (response.status !== 200) {
    throw new Error('Failed to fetch categories');
  }
  return response.data.data.categories;
};

const useCategories = () => {
  return useQuery('categories', fetchCategories);
};

export default useCategories;
