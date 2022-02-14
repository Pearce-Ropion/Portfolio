import { FC } from 'react';

import { Container } from 'components/Container';
import { HeroElement, HeroProps } from 'components/Hero';
import { Section } from 'components/Section';

import { Shorthand, toPercent, toPixels } from 'utils/styles';
import { validHTMLProps } from 'utils/valid-props';

import { Colors } from 'styles/tokens/colors';

export const Hero: FC<HeroProps> = ({
    children,
    bubbles = true,
    curve = true,
    inverted,
    ...props
}) => {
    // const htmlProps = validHTMLProps<HTMLDivElement, HeroElement>(props);

    return (
        <Section
            {...props}
            size="large"
            css={{
                position: 'relative',
                // backgroundColor: Colors.navy900,
                // padding: Shorthand.marginToPx(150, 0),
                // borderBottomLeftRadius: `${toPercent(250)} ${toPercent(200)}`,

                // '&::before': {
                //     content: '""',
                //     display: 'block',
                //     position: 'absolute',
                //     borderRadius: '100% 50%',
                //     width: '50%',
                //     height: '100%',
                // },
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1780 600">
                <defs>
                    <clipPath id="hero">
                        <path
                            // transform="scale(0 1.5)"
                            d="M 0 0 H 1780 V 600 C 1243 604 598.3 527.873 401.5 475.206 C 204.7 422.54 51.8333 136.458 0 0 Z"
                        />
                    </clipPath>
                </defs>

                <rect
                    x="0"
                    y="0"
                    width="1780"
                    height="600"
                    fill="#223249"
                    clipPath="url(#hero)"
                />
            </svg>
            {/* <img src="/images/hero.svg" /> */}
            <Container>
                {bubbles && (
                    <>
                        <div role="presentation" />
                        <div role="presentation" />
                    </>
                )}
                {children}
            </Container>
        </Section>
    );
};
