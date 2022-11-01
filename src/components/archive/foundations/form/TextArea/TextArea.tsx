import { forwardRef, memo, useState } from 'react';
import { ClassNames } from '@emotion/react';

import { FormError } from 'components/form/Error';
import { FormField } from 'components/form/Field';
import { FormTextAreaProps } from 'components/form/TextArea';
import { TextArea } from 'components/inputs/TextArea';

import { useForwardedRef } from 'utils/hooks/use-forwarded-ref';

import { Colors } from 'styles/tokens/colors';

export const FormTextArea = memo(
    forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
        (
            {
                required,
                value,
                error,
                success,
                className,
                textAreaClassName,
                onFocus,
                onBlur,
                ...props
            },
            ref
        ) => {
            const textAreaRef = useForwardedRef<HTMLTextAreaElement>(ref);
            const [focused, setFocused] = useState(props.autoFocus || false);

            const handleFocus: FormTextAreaProps['onFocus'] = event => {
                setFocused(true);

                if (onFocus) {
                    onFocus(event);
                }
            };

            const handleblur: FormTextAreaProps['onBlur'] = event => {
                setFocused(false);

                if (onBlur) {
                    onBlur(event);
                }
            };

            const filled = Boolean(value);
            const showSuccess = Boolean(required ? success : success && value);
            const bordered = Boolean(error || showSuccess || focused || filled);

            return (
                <FormField className={className} required={required}>
                    <ClassNames>
                        {({ css }) => (
                            <TextArea
                                floating
                                bordered={bordered}
                                textAreaRef={textAreaRef}
                                className={textAreaClassName}
                                labelClassName={css({
                                    ...(bordered && {
                                        ...(error && {
                                            color: Colors.red900,
                                        }),

                                        ...(showSuccess && {
                                            color: Colors.green900,
                                        }),
                                    }),
                                })}
                                css={{
                                    ...(bordered && {
                                        ...(error && {
                                            borderColor: Colors.red900,
                                        }),

                                        ...(showSuccess && {
                                            borderColor: Colors.green900,
                                        }),
                                    }),
                                }}
                                onFocus={handleFocus}
                                onBlur={handleblur}
                                {...props}
                            />
                        )}
                    </ClassNames>
                    {error && <FormError>{error}</FormError>}
                </FormField>
            );
        }
    )
);
