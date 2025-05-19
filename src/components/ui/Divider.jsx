
import styled from 'styled-components';
import { colors, typography, spacing } from '../../design-system/tokens';

const Line = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid ${colors.border};
`;

const Text = styled.span`
  margin: 0 ${spacing.sm};
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.md};
  color: ${colors.text};
`;

const Divider = () => (
  <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
    <Line />
    <Text>ou registre-se</Text>
    <Line />
  </div>
);

export default Divider;
