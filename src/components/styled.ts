import isPropValid from '@emotion/is-prop-valid';
import emStyled, {
    CreateStyled,
    StyledComponent,
    StyledOptions as EmStyledOptions,
} from '@emotion/styled';
import { CreateStyled as BaseCreateStyled } from '@emotion/styled/types/base';
import { htmlTagNames } from 'html-tag-names';

export { StyledComponent };

export type ShouldForwardProps = (propName: PropertyKey) => boolean;
export interface StyledOptions<P>
    extends Omit<EmStyledOptions<P>, 'shouldForwardProp'> {
    shouldForwardProp?: ShouldForwardProps;
}

const baseShouldForwardProp: ShouldForwardProps = propName => {
    return isPropValid(propName) && propName !== 'state';
};

const baseStyled: BaseCreateStyled = <P>(
    tagOrComponent: Parameters<BaseCreateStyled>[0],
    styledOptions: StyledOptions<P> = {}
) => {
    return emStyled(tagOrComponent, {
        ...styledOptions,
        shouldForwardProp:
            styledOptions.shouldForwardProp || baseShouldForwardProp,
    });
};

const styled = baseStyled.bind({});

htmlTagNames.forEach((tagName: string): void => {
    // @ts-ignore: The exposed type is defined on the default export
    styled[tagName] = styled(tagName);
});

export default styled as CreateStyled;
