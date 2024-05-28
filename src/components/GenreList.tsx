import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Image
                boxSize={'32px'}
                borderRadius={8}
                objectFit={'cover'}
                src={genre.image_background}
              />
              <Button
                variant={'link'}
                fontSize={'lg'}
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace={'normal'}
                textAlign={'left'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
