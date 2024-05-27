import { FetchResponse } from '../services/api-client';
import apiClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: async () => {
      return (await apiClient.get<FetchResponse<Genre>>('/genres')).data;
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
};

export default useGenres;
