import useGenres from './useGenres';

const useGetGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres.results.find((g) => g.id === id);
};

export default useGetGenre;
