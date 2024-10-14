import PropTypes from 'prop-types';

import { ContainerButton } from './styles';

export function ButtonPoppins({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}

ButtonPoppins.propTypes = {
  children: PropTypes.string,
};
