import { useCallback } from 'react';

import { useAnalyticsEvent } from 'components/contexts';
import { createComponentWithRef } from 'utils/component';
import { useComposedCallback } from 'utils/hooks';

import { StyledAriaButton } from './styles';
import { AriaButtonElement_t, AriaButtonProps_t } from './types';

export const AriaButton = createComponentWithRef<
  AriaButtonElement_t,
  AriaButtonProps_t
>(({ onPress, segment, ...rest }, forwardedRef) => {
  const handlePressEvent = useAnalyticsEvent('button-press', segment);

  const handlePress = useComposedCallback(
    onPress,
    useCallback(() => handlePressEvent(), [handlePressEvent]),
  );

  return (
    <StyledAriaButton ref={forwardedRef} {...rest} onPress={handlePress} />
  );
});
