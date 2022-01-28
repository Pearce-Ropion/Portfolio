type ControlType = string | null;
type EnumOptions = Array<string | number>;

interface NumberControlOptions {
    min?: number;
    max?: number;
    step?: number;
}

interface ControlOptions extends NumberControlOptions {
    labels?: Record<EnumOptions[number], string>;
}

interface Control {
    options?: EnumOptions;
    mapping?: Record<EnumOptions[number], unknown>;
    control: ControlOptions & {
        type: ControlType;
    };
}

interface RemoveControl {
    table: {
        disable: boolean;
    };
}

interface PropControl<C = Control> {
    [propName: string]: C;
}

type SetPropControl<C = Control> = (
    propName: string,
    options?: ControlOptions
) => PropControl<C>;

export const setControlType = (
    control: ControlType,
    options: ControlOptions = {}
): Control => ({
    control: {
        type: control,
        ...options,
    },
});

export const arrayControl: Control = setControlType('array');
export const booleanControl: Control = setControlType('boolean');
export const colorControl: Control = setControlType('color');
export const dateControl: Control = setControlType('date');
export const textControl: Control = setControlType('text');
export const disableControl: Control = setControlType(null);
export const removeControl: RemoveControl = {
    table: {
        disable: true,
    },
};

export const baseNumberControl = (
    control: ControlType,
    { min = 0, max = undefined, step = 1 }: NumberControlOptions = {}
): Control => setControlType(control, { min, max, step });

export const numberControl = (options: NumberControlOptions): Control =>
    baseNumberControl('number', options);
export const rangeControl = (options: NumberControlOptions): Control =>
    baseNumberControl('range', options);

export const baseEnumControl = (
    control: ControlType,
    options: EnumOptions = []
): Control => ({
    options,
    ...setControlType(control),
});

export const radioControl = (options: EnumOptions): Control =>
    baseEnumControl('radio', options);
export const inlineRadioControl = (options: EnumOptions): Control =>
    baseEnumControl('inline-radio', options);
export const checkControl = (options: EnumOptions): Control =>
    baseEnumControl('check', options);
export const inlineCheckControl = (options: EnumOptions): Control =>
    baseEnumControl('inline-check', options);
export const selectControl = (options: EnumOptions): Control =>
    baseEnumControl('select', options);
export const multiSelectControl = (options: EnumOptions): Control =>
    baseEnumControl('multi-select', options);

export const setPropControl =
    (control: ControlType): SetPropControl =>
    (propName: string, options?: ControlOptions): PropControl => ({
        [propName]: setControlType(control, options),
    });

export const setArrayControl: SetPropControl = setPropControl('array');
export const setBooleanControl: SetPropControl = setPropControl('boolean');
export const setColorControl: SetPropControl = setPropControl('color');
export const setDateControl: SetPropControl = setPropControl('date');
export const setTextControl: SetPropControl = setPropControl('text');
export const disablePropControl: SetPropControl = setPropControl(null);
export const removePropControl = (
    propName: string
): PropControl<RemoveControl> => ({
    [propName]: removeControl,
});

export const setPropControls = <C = Control>(
    propNames: string[],
    handler: SetPropControl<C>
): PropControl<C> => {
    const props: Set<string> = new Set();

    if (typeof propNames === 'string') {
        props.add(propNames);
    } else {
        propNames.forEach((propName: string): void => {
            props.add(propName);
        });
    }

    return [...props.values()].reduce(
        (controls, propName) => ({
            ...controls,
            ...handler(propName),
        }),
        {}
    );
};

export const disablePropControls = (propNames: string[] = []): PropControl =>
    setPropControls(propNames, disablePropControl);
export const removePropControls = (
    propNames: string[] = []
): PropControl<RemoveControl> =>
    setPropControls<RemoveControl>(propNames, removePropControl);
export const arrayPropControls = (propNames: string[] = []): PropControl =>
    setPropControls(propNames, setArrayControl);
export const booleanPropControls = (propNames: string[] = []): PropControl =>
    setPropControls(propNames, setBooleanControl);
export const colorPropControls = (propNames: string[] = []): PropControl =>
    setPropControls(propNames, setColorControl);
export const datePropControls = (propNames: string[] = []): PropControl =>
    setPropControls(propNames, setDateControl);
export const textPropControls = (propNames: string[] = []): PropControl =>
    setPropControls(propNames, setTextControl);

export const tabIndexControl: Control = inlineRadioControl([-1, 0]);

export const STORY_ARG_DESCRIPTION =
    'This arg is only used in the storybook. It is not a component prop';

interface TableDetails {
    description?: string;
    type?: {
        required: boolean;
    };
    table?: {
        type?: {
            summary: string;
        };
        defaultValue?: {
            summary: string | number;
        };
    };
    control?: Control['control'];
}

interface SetTableDetailsProps {
    description?: string;
    defaultValue?: string | number;
    type?: string;
    control?: Control;
    required?: boolean;
}

export const setTableDetails = ({
    description,
    defaultValue,
    type,
    control,
    required,
}: SetTableDetailsProps = {}): TableDetails => {
    const result: TableDetails = {};

    if (description) {
        result.description = description;
    }

    if (required) {
        result.type = {
            required,
        };
    }

    if (type || defaultValue) {
        result.table = {};

        if (type) {
            result.table.type = {
                summary: type,
            };
        }

        if (defaultValue) {
            result.table.defaultValue = {
                summary: defaultValue,
            };
        }
    }

    if (control) {
        result.control = control.control;
    }

    return result;
};
