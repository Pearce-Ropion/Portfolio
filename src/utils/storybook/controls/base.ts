type ControlOptions_t<T extends string, P = {}> = P & {
  type: T;
};

export interface ColorPresetOption_t {
  title?: string;
  color: string;
}
interface ColorControlOptions_t {
  presetColors: Array<string | ColorPresetOption_t>;
}

interface FileControlOptions_t {
  accept: string;
}

interface NumberControlOptions_t {
  min?: number;
  max?: number;
  step?: number;
}

type EnumOption_t = string | number;
type EnumOptions_t = EnumOption_t[];
interface EnumControlOptions_t {
  options?: EnumOptions_t;
  labels?: Record<EnumOption_t, string>;
  mapping?: Record<EnumOption_t, unknown>;
}

type ControlParams_t =
  | ControlOptions_t<'boolean'>
  | ControlOptions_t<'check', EnumControlOptions_t>
  | ControlOptions_t<'color', ColorControlOptions_t>
  | ControlOptions_t<'date'>
  | ControlOptions_t<'file', FileControlOptions_t>
  | ControlOptions_t<'inline-check', EnumControlOptions_t>
  | ControlOptions_t<'inline-radio', EnumControlOptions_t>
  | ControlOptions_t<'object'>
  | ControlOptions_t<'multi-select', EnumControlOptions_t>
  | ControlOptions_t<'number', NumberControlOptions_t>
  | ControlOptions_t<'radio', EnumControlOptions_t>
  | ControlOptions_t<'range', NumberControlOptions_t>
  | ControlOptions_t<'select', EnumControlOptions_t>
  | ControlOptions_t<'text'>;

export type ControlType_t = ControlParams_t['type'];

interface TableParams_t {
  defaultValue?: {
    summary?: string | number;
  };
  disable?: boolean;
  type?: {
    summary?: string;
  };
}

interface TypeParams_t {
  required?: boolean;
}

export interface PropOptions_t {
  control?: ControlParams_t | false;
  description?: string;
  table?: TableParams_t;
  type?: TypeParams_t;
}

export interface ArgTypes_t {
  [propName: string]: PropOptions_t;
}

type ControlArg_t = ControlType_t | false;
type ControlTypeOptions_t = Omit<ControlParams_t, 'type'>;

export const setControlType = (
  control: ControlArg_t,
  options: ControlTypeOptions_t = {},
): PropOptions_t => {
  if (control === false) {
    return { control: false };
  }

  return {
    control: {
      // @ts-ignore - type cannot reconncile with a single control type
      type: control,
      ...options,
    },
  };
};

export const booleanControl = setControlType('boolean');
export const dateControl = setControlType('date');
export const textControl = setControlType('text');
export const disableControl = setControlType(false);
export const removeControl: PropOptions_t = {
  table: {
    disable: true,
  },
};

export const baseNumberControl = (
  control: Extract<ControlType_t, 'number' | 'range'>,
  { min = 0, max = undefined, step = 1 }: NumberControlOptions_t = {},
): PropOptions_t => setControlType(control, { min, max, step });

export const numberControl = (options: NumberControlOptions_t) =>
  baseNumberControl('number', options);
export const rangeControl = (options: NumberControlOptions_t) =>
  baseNumberControl('range', options);

export const baseEnumControl = (
  control: Extract<
    ControlType_t,
    | 'check'
    | 'inline-check'
    | 'select'
    | 'multi-select'
    | 'radio'
    | 'inline-radio'
  >,
  { options = [], labels = {}, mapping = {} }: EnumControlOptions_t = {},
): PropOptions_t => setControlType(control, { options, labels, mapping });

export const radioControl = (options: EnumControlOptions_t) =>
  baseEnumControl('radio', options);
export const inlineRadioControl = (options: EnumControlOptions_t) =>
  baseEnumControl('inline-radio', options);
export const checkControl = (options: EnumControlOptions_t) =>
  baseEnumControl('check', options);
export const inlineCheckControl = (options: EnumControlOptions_t) =>
  baseEnumControl('inline-check', options);
export const selectControl = (options: EnumControlOptions_t) =>
  baseEnumControl('select', options);
export const multiSelectControl = (options: EnumControlOptions_t) =>
  baseEnumControl('multi-select', options);

export const fileControl = (accept: FileControlOptions_t['accept']) =>
  setControlType('file', { accept });

export const colorControl = (
  presetColors: ColorControlOptions_t['presetColors'],
) => setControlType('color', { presetColors });
