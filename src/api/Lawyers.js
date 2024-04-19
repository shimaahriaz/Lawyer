import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCategoriesLawyer = async () => {
  const response = await axios.get('/lawyers.json');
  if (response.status !== 200) {
    throw new Error('Failed to fetch categories');
  }
  return response.data.lawyers;
};

const useCategoriesLawyer = () => {
  return useQuery('lawyers', fetchCategoriesLawyer);
};

export default useCategoriesLawyer;
