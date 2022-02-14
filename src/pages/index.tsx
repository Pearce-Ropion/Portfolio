import { VFC } from 'react';
import { HomePageData } from 'content/home';
import { PageProps } from 'gatsby';
import { useForm } from 'react-hook-form';

import { CardProject } from 'components/CardProject';
import { CardSkills } from 'components/CardSkills';
import { Container } from 'components/Container';
import { Input } from 'components/inputs/Input';
import { Layout } from 'components/Layout';
import { Section } from 'components/Section';
import {
    SkillBubble,
    SkillBubbleProps,
    SkillBubbleSizes,
} from 'components/SkillBubble';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { Shorthand, toEm, toPercent, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';
import { ZIndex } from 'styles/tokens/layout';

const HomePage: VFC<PageProps> = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <Layout>
            <div
                css={{
                    position: 'relative',
                    height: toPixels(600),
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1780 600"
                    css={{ position: 'absolute', zIndex: ZIndex.negative }}
                >
                    <defs>
                        <clipPath id="hero">
                            <path d="M 0 0 H 1780 V 600 C 1243 604 598.3 527.873 401.5 475.206 C 204.7 422.54 51.8333 136.458 0 0 Z" />
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
                {/* <div
                    role="presentation"
                    css={{
                        position: 'absolute',
                        zIndex: ZIndex.negative,
                        width: toPixels(1051.88),
                        height: toPixels(1013.02),
                        background:
                            'radial-gradient(55.92% 55.92% at 102.33% 0%, #7D91AF 0%, rgba(196, 196, 196, 0) 100%);',
                        transform: 'matrix(0.5, -0.78, 1.01, 0.41, 0, 0);',
                        borderRadius: toPercent(100),
                        right: toPixels(-350),
                        top: toPixels(30),
                    }}
                />
                <div
                    role="presentation"
                    css={{
                        position: 'absolute',
                        zIndex: ZIndex.negative,
                        width: toPixels(1243.04),
                        height: toPixels(836),
                        background:
                            'radial-gradient(55.92% 55.92% at 102.33% 0%, #7D91AF 0%, rgba(196, 196, 196, 0) 100%)',
                        transform: 'rotate(-15deg)',
                        borderRadius: toPercent(100),
                        top: toPixels(200),
                        left: toPixels(-200),
                    }}
                /> */}
                <Container
                    css={{
                        height: toPercent(100),
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div css={{ position: 'relative' }}>
                        <div
                            css={{
                                backgroundColor: Colors.neutral0,
                                clipPath: 'circle(42% at 50% 50%)',
                            }}
                        >
                            <img
                                src="/images/profile.jpeg"
                                css={{
                                    maxWidth: toPixels(374),

                                    clipPath: `circle(40% at 47% 48%)`,
                                    transform: 'scaleX(-1)',
                                    border: Shorthand.borderToPx(
                                        10,
                                        'solid',
                                        Colors.neutral0
                                    ),
                                }}
                            />
                        </div>
                    </div>
                    <div css={{ maxWidth: toPixels(480), marginTop: toEm(5) }}>
                        <Title
                            inverted
                            tag="h1"
                            variant="title"
                            css={{ marginBottom: toPixels(32) }}
                        >
                            {HomePageData.sectionHero.title}
                        </Title>
                        <Text
                            inverted
                            weight={Weights.light}
                            css={{
                                fontSize: toPixels(24),
                                paddingLeft: Shorthand.paddingToPx(32),
                                position: 'relative',
                                lineHeight: toPixels(28),

                                '&::before': {
                                    position: 'absolute',
                                    content: '""',
                                    height: toPercent(100),
                                    width: toPixels(4),
                                    backgroundColor: Colors.orange900,
                                    left: 0,
                                    borderRadius: toPixels(3),
                                },
                            }}
                        >
                            {HomePageData.sectionHero.description}
                        </Text>
                    </div>
                </Container>
            </div>
            <Section size="large">
                <Container>
                    <Title alignCenter variant="header">
                        {HomePageData.sectionSkills.header}
                    </Title>
                    <div css={{ display: 'flex', flexWrap: 'wrap' }}>
                        {HomePageData.sectionSkills.skills.map(
                            ({ skill, subSkill, size }) => (
                                <SkillBubble
                                    key={skill}
                                    skill={skill}
                                    subSkill={subSkill}
                                    size={
                                        size as typeof SkillBubbleSizes[number]
                                    }
                                    bordered={['large', 'large-x'].includes(
                                        size
                                    )}
                                />
                            )
                        )}
                    </div>
                </Container>
            </Section>
            <Section size="large" css={{ backgroundColor: Colors.navy900 }}>
                <Container>
                    <div
                        css={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        {HomePageData.sectionSkills.cards.map(
                            ({ header, icon, skills }) => (
                                <CardSkills
                                    key={header}
                                    header={header}
                                    icon={icon}
                                    skills={skills}
                                />
                            )
                        )}
                    </div>
                </Container>
            </Section>
            <Section size="large">
                <Container>
                    <Title alignCenter variant="header">
                        {HomePageData.sectionProjects.header}
                    </Title>
                </Container>
                <div>
                    {HomePageData.sectionProjects.projects.map(
                        ({ header, description, tags, actions }) => (
                            <div
                                key={header}
                                css={{
                                    position: 'relative',
                                    height: toPixels(828.5),
                                    width: toPixels(1512),
                                    margin: Shorthand.marginToPx(160, 0),
                                }}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        height: toPixels(828.5),
                                        width: toPixels(1512),
                                        clipPath: `polygon(0 17%, 100% 0%, 100% 83%, 0% 100%)`,
                                        backgroundColor: Colors.neutral500,
                                        zIndex: ZIndex.negative,
                                    }}
                                />
                                <Container
                                    css={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <CardProject
                                        header={header}
                                        description={description}
                                        tags={tags}
                                        actions={actions}
                                        css={{
                                            maxWidth: toPixels(872),
                                        }}
                                    />
                                </Container>
                            </div>
                        )
                    )}
                </div>
            </Section>
            <Section size="large">
                <Container>
                    <form>
                        <Input {...register('name')} />
                    </form>
                </Container>
            </Section>
        </Layout>
    );
};

export default HomePage;
