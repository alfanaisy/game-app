import usePlatform from './usePlatform';

const useGetPlatform = (id?: number) => {
  const { data: platforms } = usePlatform();

  return platforms.results.find((p) => p.id === id);
};

export default useGetPlatform;
