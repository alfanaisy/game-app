import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} marginY={2}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              variant={'link'}
              fontSize={'lg'}
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(genre)}
              overflow={'hidden'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
