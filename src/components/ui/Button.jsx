
import styled from 'styled-components';
import { colors, spacing, typography } from '../../design-system/tokens';

const StyledButton = styled.button`
  background-color: ${colors.primary};
  color: white;
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 24px;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;
