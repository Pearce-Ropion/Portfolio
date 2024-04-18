import { Copy, CopyElement_t, CopyProps_t } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';
import { useMergeCSS } from 'utils/hooks';

import { useMarkdownContext } from '../MarkdownContext';

export const Paragraph = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    return <Copy ref={forwardedRef} {...props} isInverted={inverted} />;
  },
);

export const Bold = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    return (
      <Copy
        ref={forwardedRef}
        {...props}
        isInline
        isInverted={inverted}
        weight="bold"
      />
    );
  },
);

export const Italic = createComponentWithRef<CopyElement_t, CopyProps_t>(
  ({ css, ...rest }, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    const mergedCSS = useMergeCSS(
      {
        fontStyle: 'italic',
      },
      css,
      [css],
    );

    return (
      <Copy
        ref={forwardedRef}
        {...rest}
        css={mergedCSS}
        isInline
        isInverted={inverted}
      />
    );
  },
);

export const Caption = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();

    return (
      <Copy
        ref={forwardedRef}
        {...props}
        isInline
        isInverted={inverted}
        size="small"
      />
    );
  },
);

export const Label = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();

    return (
      <Copy
        ref={forwardedRef}
        {...props}
        isInline
        isInverted={inverted}
        size="small"
        weight="bold"
      />
    );
  },
);

export const Underline = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();

    return (
      <Copy
        ref={forwardedRef}
        {...props}
        isInline
        isInverted={inverted}
        size="small"
        weight="bold"
        css={{
          textDecoration: 'underline',
        }}
      />
    );
  },
);
