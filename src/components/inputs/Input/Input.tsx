import {
    HTMLAttributes,
    InputHTMLAttributes,
    memo,
    ReactElement,
    useEffect,
    useRef,
    useState,
    VFC,
} from 'react';
import { debounce, defer } from 'lodash-es';

import { iconFactory, IconProps } from 'components/Icon';
import {
    inputIconStyles,
    InputProps,
    InputStateProps,
    StyledInput,
    StyledInputLabel,
} from 'components/inputs/Input';

import { useId } from 'utils/hooks/use-id';

import { Colors } from 'styles/tokens/colors';

export const Input: VFC<InputProps> = memo(
    ({
        type = 'text',
        label,
        labelClassName,
        tabIndex,
        icon,
        floating: floatingProp,
        focused: focusedProp,
        inverted,
        disabled,
        bordered,
        componentState = {},
        inputRef: controlledRef,
        onChange,
        onBlur,
        onFocus,
        ...props
    }) => {
        const { name, autoFocus, readOnly, value, defaultValue } = props;

        const inputRef = useRef<HTMLInputElement>(
            controlledRef?.current || null
        );

        const [focused, setFocused] = useState<boolean>(
            Boolean(focusedProp || autoFocus)
        );

        const id: string = useId(name);

        useEffect(() => {
            if (defaultValue) {
                setFocused(true);
            }
        }, [defaultValue]);

        useEffect(() => {
            if (disabled && focused) {
                setFocused(false);

                if (inputRef.current && onBlur) {
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
                } else if (inputRef.current) {
                    inputRef.current.focus();
                }
            };

        const handleChange: InputHTMLAttributes<HTMLInputElement>['onChange'] =
            event => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                } else if (inputRef.current) {
                    const { value: currentValue } = inputRef.current;

                    if (onChange) {
                        onChange(event, currentValue);
                    }
                }
            };

        const handleFocus: InputHTMLAttributes<HTMLInputElement>['onFocus'] =
            event => {
                if (disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    setFocused(true);

                    defer(() => {
                        inputRef.current?.focus();
                    });

                    if (onFocus) {
                        onFocus(event);
                    }
                }
            };

        const handleBlur: InputHTMLAttributes<HTMLInputElement>['onBlur'] =
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

        const inputState: InputStateProps = {
            disabled,
            bordered,
            filled: Boolean(value || inputRef.current?.value),
            floating: floatingProp,
            focused,
            icon: Boolean(icon),
            inverted,
            ...componentState,
        };

        let iconComponent: ReactElement<IconProps> | undefined;
        if (icon) {
            iconComponent = iconFactory(icon, {
                color: Colors.neutral700,
                css: inputIconStyles(inputState),
            });
        }

        return (
            <div css={{ position: 'relative' }}>
                {label && (
                    <StyledInputLabel
                        htmlFor={id}
                        className={labelClassName}
                        componentState={inputState}
                    >
                        {label}
                    </StyledInputLabel>
                )}

                <div
                    css={{ position: 'relative' }}
                    onClick={handleWrapperClick}
                >
                    {icon && iconComponent}
                    <StyledInput
                        {...props}
                        ref={inputRef}
                        componentState={inputState}
                        name={name}
                        id={id}
                        type={type}
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
