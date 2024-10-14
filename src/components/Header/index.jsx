import { useNavigate, useLocation } from 'react-router-dom';

import cartIcon from '../../assets/CartIcon.png';
import personIcon from '../../assets/person.png';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  LeftContainer,
  PageLink,
  RightContainer,
  ContainerText,
  Line,
  LogoutLink,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { logout, userData } = useUser();

  const logoutUser = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container>
      <LeftContainer>
        <PageLink onClick={() => navigate('/')} isActive={pathname == '/'}>
          Home
        </PageLink>
        <Line></Line>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </LeftContainer>

      <RightContainer>
        <PageLink
          onClick={() => navigate('/carrinho')}
          isActive={pathname == '/carrinho'}
        >
          <img src={cartIcon} alt="imagem do carrinho" />
        </PageLink>

        <Line></Line>
        <PageLink>
          <img src={personIcon} alt="imagem da pessoa" />
        </PageLink>

        <ContainerText>
          <p>
            Olá, <span>{userData.name}</span>
          </p>
          <LogoutLink onClick={logoutUser}>Sair</LogoutLink>
        </ContainerText>
      </RightContainer>
    </Container>
  );
}
