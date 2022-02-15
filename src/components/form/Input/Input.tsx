import { useRef, useState, VFC } from 'react';
import { ClassNames } from '@emotion/react';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';

import { FormField } from 'components/form/Field';
import { FormInputProps } from 'components/form/Input';
import { Icon } from 'components/Icon';
import { Input } from 'components/inputs/Input';
import { Text } from 'components/Text';

import { Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export const FormInput: VFC<FormInputProps> = ({
    error,
    success,
    className,
    inputClassName,
    onFocus,
    onBlur,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
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

    const filled = Boolean(props.value || inputRef.current?.value);

    return (
        <FormField className={className}>
            <ClassNames>
                {({ css }) => (
                    <Input
                        floating
                        inputRef={inputRef}
                        className={inputClassName}
                        labelClassName={css({
                            ...(focused && {
                                ...(error && {
                                    color: Colors.red900,
                                }),

                                ...(success && {
                                    color: Colors.green900,
                                }),
                            }),
                        })}
                        css={{
                            ...(focused && {
                                ...(error && {
                                    borderColor: Colors.red900,
                                }),

                                ...(success && {
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
            {error && (
                <Text
                    css={{
                        fontSize: toPixels(14),
                        paddingLeft: Shorthand.paddingToEm(0.625),
                        marginTop: Shorthand.marginToPx(4),
                    }}
                    color={Colors.red900}
                >
                    <Icon
                        duotone
                        css={{ marginRight: Shorthand.marginToEm(0.5) }}
                        icon={duotone('exclamation-triangle')}
                        color={Colors.red900}
                    />
                    {error}
                </Text>
            )}
        </FormField>
    );
};
