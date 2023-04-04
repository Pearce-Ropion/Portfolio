import { useMemo } from 'react';

import { HTMLDivElement_t } from 'components/foundations';
import { StyledPage } from 'components/Page/styles';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { mergeStyle } from 'utils/style/css';
import { useStoryContext } from 'components/contexts';
import {
  // useInverted,
  useLayout,
  useBackground,
  // useComponentName,
} from 'utils/hooks';

export type PageElement_t = HTMLDivElement_t;
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

  const style = useMemo(() => {
    return mergeStyle({ backgroundColor: background }, styleProp);
  }, [background, styleProp]);

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
