
import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../design-system/tokens';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Checkbox from '../components/ui/Checkbox';
import Divider from '../components/ui/Divider';
import GoogleButton from '../components/ui/GoogleButton';

import logo from '../Images/logo-cuide-me.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  align-items: center;
`;

const LogoImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

const Logo = styled.div`
  font-size: ${typography.fontSize.xl};
  font-family: ${typography.fontFamily};
  color: ${colors.primary};
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImage src={logo} alt="Logo Cuide.Me" />
        <Logo>Cuide.Me</Logo>

        <Input label="Email" type="email" id="email" />
        <Input label="Senha" type="password" id="senha" />

        <Checkbox label="Mantenha-me conectado" />

        <Button>ENTRAR</Button>

        <Divider />

        <GoogleButton />
      </Wrapper>
    </Container>
  );
};

export default Login;
