import {
    HTMLAttributes,
    memo,
    TextareaHTMLAttributes as TextAreaHTMLAttributes,
    useEffect,
    useRef,
    useState,
    VFC,
} from 'react';
import { debounce, defer } from 'lodash-es';

import {
    StyledTextArea,
    StyledTextAreaLabel,
    TextAreaProps,
    TextAreaStateProps,
} from 'components/inputs/TextArea';

import { useId } from 'utils/hooks/use-id';

export const TextArea: VFC<TextAreaProps> = memo(
    ({
        label,
        labelClassName,
        tabIndex,
        floating,
        focused: focusedProp,
        inverted,
        disabled,
        componentState = {},
        textAreaRef: controlledRef,
        onChange,
        onBlur,
        onFocus,
        ...props
    }) => {
        const { name, autoFocus, readOnly, value } = props;

        const textAreaRef = useRef<HTMLTextAreaElement>(
            controlledRef?.current || null
        );
        const [focused, setFocused] = useState<boolean>(
            focusedProp || Boolean(autoFocus)
        );

        const id: string = useId(name);

        useEffect(() => {
            if (disabled && focused) {
                setFocused(false);

                if (textAreaRef.current && onBlur) {
                    // @ts-ignore: Can't have an onBlur focus event here
                    onBlur();
                }
            }
        }, [disabled, focused, onBlur]);

        const handleWrapperClick: HTMLAttributes<HTMLDivElement>['onClick'] =
            event => {
                if (disabled || readOnly) {
                    event.preventDefault();
                    event.stopPropagation();
                } else if (textAreaRef.current) {
                    textAreaRef.current.focus();
                }
            };

        const handleChange: TextAreaHTMLAttributes<HTMLTextAreaElement>['onChange'] =
            event => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                } else if (textAreaRef.current) {
                    const { value: currentValue } = textAreaRef.current;

                    if (onChange) {
                        onChange(event, currentValue);
                    }
                }
            };

        const handleFocus: TextAreaHTMLAttributes<HTMLTextAreaElement>['onFocus'] =
            event => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    setFocused(true);

                    defer(() => {
                        textAreaRef.current?.focus();
                    });

                    if (onFocus) {
                        onFocus(event);
                    }
                }
            };

        const handleBlur: TextAreaHTMLAttributes<HTMLTextAreaElement>['onBlur'] =
            event => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    setFocused(false);

                    if (onBlur) {
                        onBlur(event);
                    }
                }
            };

        const state: TextAreaStateProps = {
            disabled,
            filled: Boolean(value || textAreaRef.current?.value),
            floating,
            focused,
            inverted,
            ...componentState,
        };

        return (
            <div css={{ position: 'relative' }}>
                {label && (
                    <StyledTextAreaLabel
                        htmlFor={id}
                        className={labelClassName}
                        componentState={state}
                    >
                        {label}
                    </StyledTextAreaLabel>
                )}

                <div
                    css={{ position: 'relative' }}
                    onClick={handleWrapperClick}
                >
                    <StyledTextArea
                        {...props}
                        ref={textAreaRef}
                        componentState={state}
                        name={name}
                        id={id}
                        disabled={disabled}
                        tabIndex={disabled ? -1 : tabIndex}
                        onChange={debounce(handleChange, 300)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
        );
    }
);
