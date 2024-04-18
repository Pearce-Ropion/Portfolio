import { useCallback } from 'react';
import { useButton } from '@react-aria/button';
import { ButtonContext, useContextProps } from 'react-aria-components';

import { useAnalyticsEvent } from 'components/contexts';
import { createComponentWithRef } from 'utils/component';
import { useComposedCallback } from 'utils/hooks';
import { mergeProps } from 'utils/merge';

import { StyledAriaButton } from './styles';
import { AriaButtonElement_t, AriaButtonProps_t } from './types';

export const AriaButton = createComponentWithRef<
  AriaButtonElement_t,
  AriaButtonProps_t
>((props, forwardedRef) => {
  [props, forwardedRef] = useContextProps(props, forwardedRef, ButtonContext);

  const handlePressEvent = useAnalyticsEvent('button-press', props.segment);

  const handlePress = useComposedCallback(
    props.onPress,
    useCallback(() => handlePressEvent(), [handlePressEvent]),
    { disabled: props.isDisabled },
  );

  const { buttonProps } = useButton(
    mergeProps(props, { onPress: handlePress }),
    forwardedRef,
  );

  return <StyledAriaButton ref={forwardedRef} {...buttonProps} />;
});
