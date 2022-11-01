import emStyled, { CreateStyled } from '@emotion/styled';
import { CreateStyled as BaseCreateStyled } from '@emotion/styled/types/base';
import { htmlTagNames } from 'html-tag-names';

import { startCamelCase } from 'utils/string';

import {
    baseShouldForwardProp,
    shouldForwardTagProp,
    StyledOptions,
} from 'styles/styled';

const baseStyled: BaseCreateStyled = <P>(
    tagOrComponent: Parameters<BaseCreateStyled>[0],
    styledOptions: StyledOptions<P> = {}
) => {
    let label: string | undefined;
    if (typeof tagOrComponent === 'string') {
        label = startCamelCase(tagOrComponent);
    } else if ('displayName' in tagOrComponent) {
        // @ts-ignore: Typescript is choosing the wrong override. There exists an ovverride where tagOrComponent is a react element with a displayName property
        label = tagOrComponent.displayName;
    }

    return emStyled(tagOrComponent, {
        label: styledOptions.label || label,
        // target: '',
        shouldForwardProp:
            styledOptions.shouldForwardProp || baseShouldForwardProp,
    });
};

const styled = baseStyled.bind({});

htmlTagNames.forEach((tagName: string): void => {
    // @ts-ignore: The exposed type is defined on the default export
    styled[tagName] = styled(tagName, {
        shouldForwardProp: shouldForwardTagProp,
    });
});

export default styled as CreateStyled;
