import { useParams } from 'react-router-dom';
import useGetGame from '../hooks/useGetGame';
import { Heading, Spinner, Text } from '@chakra-ui/react';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGetGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
