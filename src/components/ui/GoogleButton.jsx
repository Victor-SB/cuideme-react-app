
import styled from 'styled-components';
import { colors, spacing, typography } from '../../design-system/tokens';
import googleIcon from '../../Images/google-icon.svg';

const GoogleBtn = styled.button`
  display: flex;
  align-items: center;
  padding: ${spacing.sm} ${spacing.lg};
  gap: ${spacing.sm};
  background-color: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 24px;
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.lg};
  cursor: pointer;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const GoogleButton = () => (
  <GoogleBtn>
    <Icon src={googleIcon} alt="Google Icon" />
    Continue With Google
  </GoogleBtn>
);

export default GoogleButton;
