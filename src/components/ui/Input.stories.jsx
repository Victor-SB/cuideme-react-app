
import Input from './Input';

export default {
  title: 'Componentes/Input',
  component: Input,
};

export const Email = () => <Input label="Email" type="email" />;
export const Senha = () => <Input label="Senha" type="password" />;
