import { useRef, useState, VFC } from 'react';
import { ClassNames } from '@emotion/react';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';

import { FormField } from 'components/form/Field';
import { FormTextAreaProps } from 'components/form/TextArea';
import { Icon } from 'components/Icon';
import { TextArea } from 'components/inputs/TextArea';
import { Text } from 'components/Text';

import { Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export const FormTextArea: VFC<FormTextAreaProps> = ({
    error,
    success,
    className,
    textAreaClassName,
    onFocus,
    onBlur,
    ...props
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
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

    const filled = Boolean(props.value || textAreaRef.current?.value);

    return (
        <FormField className={className}>
            <ClassNames>
                {({ css }) => (
                    <TextArea
                        floating
                        textAreaRef={textAreaRef}
                        className={textAreaClassName}
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
