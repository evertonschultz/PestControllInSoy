import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';

import {
  Container,
  Title,
  TitleText,
  Description,
  Button,
  ButtonText,
} from './styles';

const Welcome: React.FC = () => {
  const {navigate} = useNavigation();

  const navigateToDasboard = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <Container>
      <Title>
        <TitleText>Bem vindo ao Controle de pragas na soja</TitleText>
      </Title>

      <Description>
        Neste aplicatico é possivel identificar pragas presentes na lavoura de
        soja.
      </Description>

      <Button onPress={navigateToDasboard}>
        <ButtonText>Utilizar ferramenta</ButtonText>
      </Button>
    </Container>
  );
};
export default Welcome;
