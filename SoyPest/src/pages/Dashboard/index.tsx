import React, {useState} from 'react';
import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import api from '../../services/api';

import {ActivityIndicator} from 'react-native';

import {
  Container,
  ButtonFile,
  ButtonFileText,
  Content,
  Classifiers,
  Title,
  Class,
  ImageURL,
} from './styles';

const Dashboard: React.FC = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleFile() {
    ImagePicker.showImagePicker(
      {
        title: 'Seleciona um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escoher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao realizar o upload.');
          return;
        }

        const data = new FormData();

        data.append('file', {
          name: 'image.jpg',
          type: 'image/jpg',
          uri: response.uri,
        });

        setLoading(true);

        api.post('/app', data).then((res) => {
            if (!res.data[0]) {
              return (
                setName(''),
                setScore(0),
                setUrl(response.uri),
                setLoading(false)
              );
            }

            setName(res.data[0].class);
            setScore(res.data[0].score);
            setUrl(response.uri);
            setLoading(false);
          });
      },
    );
    
  }

  return (
    <Container>
      <ButtonFile onPress={handleFile}>
        <ButtonFileText>Adicionar imagem</ButtonFileText>
      </ButtonFile>

      {loading ? (
        <Content>
          <ActivityIndicator size="large" color="#008000" />
        </Content>
      ) : (
        false
      )}

      {name ? (
        <Content>
          <Title>
            De acordo com modelo treinado, o resultado obtido foi:
          </Title>
          <Classifiers>
            <Class>{name}</Class>
          { // <Class>Com: {score} de acurácia</Class>
          }
            <ImageURL
              source={{
                uri: url
                  ? url
                  : `http://api.adorable.io/avatar/50/${name}`,
              }}
            />
          </Classifiers>
        </Content>
      ) : url ? (
        <Content>
          <Title>
            De acordo com modelo treinado, essa imagem não foi reconhecida.
          </Title>
          <Classifiers>
            <Class>
              Tente novamente com outra imagem. Obs. Outro agulo pode resolver o
              problema.
            </Class>
            <ImageURL
              source={{
                uri: url
                  ? url
                  : `http://api.adorable.io/avatar/50/${url}`,
              }}
            />
          </Classifiers>
        </Content>
      ) : (
        false
      )}
    </Container>
  );
};

export default Dashboard;
