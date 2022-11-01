import { cx } from '@emotion/css';
import styled, { StyledComponent } from '@emotion/styled';

import { StyledFormField, StyledRequired } from 'components/form/Field';
import { StyledFormRowProps } from 'components/form/Row';

import { Shorthand, toEm, toPercent, toPixels } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { MQ } from 'styles/tokens/media-query';

export const StyledFormRow: StyledComponent<StyledFormRowProps> = styled(
    'div',
    styledTagOptions
)({
    width: toPercent(100),
    display: 'flex',
    marginTop: Shorthand.marginToEm(2.125),
    marginBottom: Shorthand.marginToEm(2.125),

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

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [StyledRequired as any]: {
                right: toPixels(8),
            },
        },

        [MQ.isMobile]: {
            paddingLeft: 0,
            paddingRight: 0,
        },

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [StyledRequired as any]: {
            right: 16,
        },
    },
});
