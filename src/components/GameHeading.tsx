import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGetGenre from '../hooks/useGetGenre';
import useGetPlatform from '../hooks/useGetPlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGetGenre(gameQuery.genreId);
  const platform = useGetPlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as={'h1'} fontSize={'4xl'} marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
