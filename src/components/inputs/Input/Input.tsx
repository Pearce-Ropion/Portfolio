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
        tabIndex,
        icon,
        floating,
        focused: focusedProp,
        inverted,
        disabled,
        componentState = {},
        onChange,
        onBlur,
        onFocus,
        ...props
    }) => {
        const { name, autoFocus, readOnly, value } = props;

        const inputRef = useRef<HTMLInputElement>(null);
        const [focused, setFocused] = useState<boolean>(
            focusedProp || Boolean(autoFocus)
        );

        const id: string = useId(name);

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

        const state: InputStateProps = {
            disabled,
            filled: Boolean(value || inputRef.current?.value),
            floating,
            focused,
            icon: Boolean(icon),
            inverted,
            ...componentState,
        };

        let iconComponent: ReactElement<IconProps> | undefined;
        if (icon) {
            iconComponent = iconFactory(icon, {
                color: Colors.neutral700,
                css: inputIconStyles(state),
            });
        }

        return (
            <div css={{ position: 'relative' }}>
                {label && (
                    <StyledInputLabel htmlFor={id} componentState={state}>
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
                        componentState={state}
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
