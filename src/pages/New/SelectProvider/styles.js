import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListProviders = styled.FlatList.attrs({
  showsVerticalIndicator: false,
  contentContainerStyle: { padding: 30 },
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  padding: 20px;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Name = styled.Text`
  font-weight: bold;
  margin-top: 15px;
  color: #333;
  font-size: 14px;
  text-align: center;
`;
