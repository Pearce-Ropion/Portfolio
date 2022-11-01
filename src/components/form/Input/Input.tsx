import { forwardRef, memo, useState } from 'react';
import { ClassNames } from '@emotion/react';

import { FormError } from 'components/form/Error';
import { FormField } from 'components/form/Field';
import { FormInputProps } from 'components/form/Input';
import { Input } from 'components/inputs/Input';

import { useForwardedRef } from 'utils/hooks/use-forwarded-ref';

import { Colors } from 'styles/tokens/colors';

export const FormInput = memo(
    forwardRef<HTMLInputElement, FormInputProps>(
        (
            {
                required,
                value,
                error,
                success,
                className,
                inputClassName,
                onFocus,
                onBlur,
                ...props
            },
            ref
        ) => {
            const inputRef = useForwardedRef<HTMLInputElement>(ref);
            const [focused, setFocused] = useState(props.autoFocus || false);

            const handleFocus: FormInputProps['onFocus'] = event => {
                setFocused(true);

                if (onFocus) {
                    onFocus(event);
                }
            };

            const handleblur: FormInputProps['onBlur'] = event => {
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
                            <Input
                                floating
                                inputRef={inputRef}
                                className={inputClassName}
                                bordered={bordered}
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
