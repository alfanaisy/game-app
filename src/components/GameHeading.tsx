import { Heading } from '@chakra-ui/react';
import useGetGenre from '../hooks/useGetGenre';
import useGetPlatform from '../hooks/useGetPlatform';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGetGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useGetPlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as={'h1'} fontSize={'4xl'} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
