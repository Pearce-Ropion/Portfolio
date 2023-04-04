import { GatsbyLinkProps } from 'gatsby';
import { ElementRef, MouseEventHandler } from 'react';

import {
  StyledLink,
  StyledGatsbyLink,
} from 'components/foundations/Link/styles';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { useComposedEvent } from 'utils/hooks/useComposedEvent';
import { useAnalyticsEvent } from 'components/contexts/Analytics/useAnalytics';
import { SegmentEvent_t } from 'utils/events';
import { useNormalizedLink } from 'components/foundations/Link/util';
import { HTMLSpan } from 'components/foundations/Html';
import { cx } from 'utils/style/classes';

export type AnchorElement_t = ElementRef<typeof StyledLink>;
export interface AnchorProps_t
  extends OmitComponentVariantProps_t<typeof StyledLink> {}

export const Anchor = createComponentWithRef<AnchorElement_t, AnchorProps_t>(
  ({ ...rest }, forwardedRef) => {
    return <StyledLink ref={forwardedRef} {...rest} />;
  },
);

type GatsbyLinkProps_t = Pick<
  GatsbyLinkProps<{}>,
  | 'activeClassName'
  | 'activeStyle'
  | 'partiallyActive'
  | 'replace'
  | 'state'
  | 'getProps'
>;

export type LinkElement_t = ElementRef<typeof StyledLink>;
export interface LinkProps_t
  extends Omit<OmitComponentVariantProps_t<typeof StyledLink>, 'href'>,
    GatsbyLinkProps_t {
  disabled?: boolean;
  inverted?: boolean;
  to?: string | URL;
  segment?: SegmentEvent_t;
}

interface LinkComponents_t {
  Styled: typeof StyledLink;
  GatsbyStyled: typeof StyledGatsbyLink;
}

export const Link = createComponentWithRef<
  LinkElement_t,
  LinkProps_t,
  LinkComponents_t
>(
  (
    {
      // Gatsby Link Props
      activeClassName,
      activeStyle,
      getProps,
      partiallyActive,
      replace,
      state,

      // Other Props
      disabled,
      onClick,
      segment,
      to: toProp,
      ...rest
    },
    forwardedRef,
  ) => {
    const handleClick = useComposedEvent(
      onClick,
      useAnalyticsEvent('link-click', segment),
    );

    const { to, isExternal, isAnchor, isTelephone } = useNormalizedLink(toProp);

    if (!to || disabled) {
      return (
        <StyledLink
          as={HTMLSpan}
          {...rest}
          disabled={disabled}
          onClick={handleClick as MouseEventHandler<HTMLSpanElement>}
        />
      );
    }

    const rel = cx({
      noopener: isExternal || isTelephone,
      noreferrer: isExternal || isTelephone,
      nofollow: isTelephone,
    });

    const href = typeof to === 'string' ? to : to.href;

    if (isExternal || isTelephone) {
      <StyledLink
        rel={rel}
        href={href}
        target="_blank"
        {...rest}
        onClick={handleClick}
      />;
    }

    if (isAnchor) {
      <StyledLink rel={rel} href={href} {...rest} onClick={handleClick} />;
    }

    return (
      <StyledGatsbyLink
        // @ts-ignore - gatsby's link component doesn't use the modern ref API
        ref={forwardedRef}
        rel={rel}
        {...rest}
        to={href}
        activeClassName={activeClassName}
        activeStyle={activeStyle}
        getProps={getProps}
        onClick={handleClick}
        partiallyActive={partiallyActive}
        replace={replace}
        state={state}
      />
    );
  },
);

Link.Styled = StyledLink;
Link.GatsbyStyled = StyledGatsbyLink;