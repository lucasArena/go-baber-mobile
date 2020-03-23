import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

export default function SignIn() {
  return (
    <Background>
      <Text>SIGNIN</Text>
      <Input icon="call" placeholder="Digite seu nome" />
      <Button>Entrar</Button>
    </Background>
  );
}
