import { useMemo } from 'react';

import { useMarkdownContext } from 'components/composites/Markdown/MarkdownContext';
import { Copy, CopyElement_t, CopyProps_t } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';
import { mergeCSS } from 'utils/style/css';

export const Paragraph = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    return <Copy ref={forwardedRef} {...props} inverted={inverted} />;
  },
);

export const Bold = createComponentWithRef<CopyElement_t, CopyProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    return (
      <Copy
        ref={forwardedRef}
        {...props}
        inline
        inverted={inverted}
        weight="bold"
      />
    );
  },
);

export const Italic = createComponentWithRef<CopyElement_t, CopyProps_t>(
  ({ css, ...rest }, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    const mergedCSS = useMemo(() => {
      return mergeCSS(
        {
          fontStyle: 'italic',
        },
        css,
      );
    }, [css]);

    return (
      <Copy
        ref={forwardedRef}
        {...rest}
        css={mergedCSS}
        inline
        inverted={inverted}
      />
    );
  },
);

export const Underline = createComponentWithRef<CopyElement_t, CopyProps_t>(
  ({ css, ...rest }, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    const mergedCSS = useMemo(() => {
      return mergeCSS(
        {
          textDecoration: 'underline',
        },
        css,
      );
    }, [css]);

    return (
      <Copy
        ref={forwardedRef}
        {...rest}
        css={mergedCSS}
        inline
        inverted={inverted}
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
        inline
        inverted={inverted}
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
        inline
        inverted={inverted}
        size="small"
        weight="bold"
      />
    );
  },
);
