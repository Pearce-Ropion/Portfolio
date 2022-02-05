import { memo, VFC } from 'react';

import { Container } from 'components/Container';
import { HrProps, HrStateProps, StyledHr } from 'components/Hr';

export const Hr: VFC<HrProps> = memo(
    ({ fullBleed, inverted, componentState = {}, ...props }) => {
        const hrState: HrStateProps = {
            fullBleed,
            inverted,
            ...componentState,
        };

        if (fullBleed) {
            return <StyledHr componentState={hrState} {...props} />;
        } else {
            return (
                <Container>
                    <StyledHr componentState={hrState} {...props} />
                </Container>
            );
        }
    }
);
