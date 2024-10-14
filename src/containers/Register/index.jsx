import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import brabosBurgerImg from '../../assets/pitbull-logo.png';
import { Button } from '../../components';
import api from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('O seu nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter pelo menos 6 caracteres')
        .required('Digite uma senha'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true },
      );

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso!');
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar');
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={brabosBurgerImg} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          <span>Criar Conta</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              {...register('name')}
              error={errors?.name?.message}
            />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">CONFIRMAR CADASTRO</Button>
        </Form>
        <p>
          Já possui conta?{' '}
          <Link style={{ color: '#fff' }} to="/login">
            {' '}
            Clique aqui.{' '}
          </Link>
        </p>
      </RightContainer>
    </Container>
  );
}
