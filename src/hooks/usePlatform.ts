import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: async () => {
      const res = await apiClient.get<FetchResponse<Platform>>(
        '/platforms/lists/parents'
      );
      return res.data;
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};

export default usePlatform;
