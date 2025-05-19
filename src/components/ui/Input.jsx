
import styled from 'styled-components';
import { colors, spacing, typography } from '../../design-system/tokens';

const Label = styled.label`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.md};
  color: ${colors.text};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${spacing.sm} ${spacing.md};
  border: 1px solid ${colors.border};
  border-radius: 24px;
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.lg};
  margin-top: ${spacing.xs};
`;

const Input = ({ label, id, ...props }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <StyledInput id={id} {...props} />
  </div>
);

export default Input;
