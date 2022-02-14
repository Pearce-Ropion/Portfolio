import { cx } from '@emotion/css';
import styled, { StyledComponent } from '@emotion/styled';

import { StyledFormField } from 'components/form/Field';
import { StyledFormRowProps } from 'components/form/Row';

import { Shorthand, toPercent, toPixels } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { MQ } from 'styles/tokens/media-query';

export const StyledFormRow: StyledComponent<StyledFormRowProps> = styled(
    'div',
    styledTagOptions
)({
    display: 'flex',
    marginTop: Shorthand.marginToEm(1.125),
    marginBottom: Shorthand.marginToEm(1.125),

    '&:first-of-type': {
        marginTop: 0,
    },

    '&:last-of-type': {
        marginBottom: 0,
    },

    [MQ.isMobile]: {
        flexDirection: 'column',
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [StyledFormField as any]: {
        width: toPercent(100),
        minWidth: toPixels(140),
        flex: cx('1', '1', 'auto'),
        paddingLeft: Shorthand.paddingToPx(8),
        paddingRight: Shorthand.paddingToPx(8),

        '&:first-of-type': {
            paddingLeft: 0,
        },

        '&:last-of-type': {
            paddingRight: 0,
        },

        [MQ.isMobile]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
});
