import { StyledPage } from '@storybook/components/Page/styles';
import { useLayout, useBackground } from '@storybook/utils/hooks';

import { useStoryContext } from 'components/contexts';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';

import { useMergeStyle } from '../../../src/utils/hooks';

export type PageElement_t = HTMLDivElement;
export interface PageProps_t
  extends Omit<OmitComponentVariantProps_t<typeof StyledPage>, 'color'> {}

export interface PageComponents_t {
  Styled: typeof StyledPage;
}

export const Page = createComponentWithRef<
  PageElement_t,
  PageProps_t,
  PageComponents_t
>(({ children, style: styleProp, ...rest }, forwardedRef) => {
  const { viewMode } = useStoryContext();
  const layout = useLayout();
  // const inverted = useInverted();
  const background = useBackground();
  // const componentName = useComponentName();

  const style = useMergeStyle({ backgroundColor: background }, styleProp, [
    background,
    styleProp,
  ]);

  return (
    <StyledPage
      ref={forwardedRef}
      {...rest}
      // inverted={inverted}
      layout={layout}
      mode={viewMode}
      style={style}
    >
      {children}
    </StyledPage>
  );
});

Page.Styled = StyledPage;
