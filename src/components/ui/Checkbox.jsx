
import styled from 'styled-components';
import { colors, typography, spacing } from '../../design-system/tokens';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.md};
  color: ${colors.text};
`;

const Checkbox = ({ label, ...props }) => (
  <Wrapper>
    <input type="checkbox" {...props} />
    {label}
  </Wrapper>
);

export default Checkbox;
