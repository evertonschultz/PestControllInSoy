import styled from 'styled-components/native';

interface ContentProps {
  isVisible: boolean;
}

export const ImageURL = styled.Image`
  margin-top: 20px;
  width: 290px;
  height: 200px;

  border-radius: 10px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 40px;
`;

export const ButtonFile = styled.TouchableOpacity`
  padding: 10px;
  background: #008000;
  border-radius: 10px;
  margin-top: 80px;
`;

export const ButtonFileText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Content = styled.View`
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  justify-content: center;
  text-align: center;
`;

export const Classifiers = styled.View`
  margin-top: 40px;
  background: #222;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const Class = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Store = styled.Text`
  font-size: 20px;
  color: #fff;
`;
