import { HTMLButton } from 'components/foundations/Html';
import { styled } from 'stitches.config';

export const StyledIconButton = styled(HTMLButton, {
  borderRadius: '$circle',
  backgroundColor: '$orange900',
  color: '$neutral0',
  border: 'none',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '$10',
  transition: '$standard',

  '&:hover, &:focus': {
    boxShadow: '$level2',
    transform: 'translateY(-1px)',

    '&:active': {
      transform: 'translateY(0px)',
    },
  },
});
