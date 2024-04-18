export type ControlOptions_t<T extends string, P = {}> = P & {
  type: T;
};

export interface ColorPresetOption_t {
  title?: string;
  color: string;
}
export interface ColorControlOptions_t {
  presetColors: Array<string | ColorPresetOption_t>;
}

export interface FileControlOptions_t {
  accept: string;
}

export interface NumberControlOptions_t {
  min?: number;
  max?: number;
  step?: number;
}

export type EnumOption_t = string | number;
export type EnumOptions_t = EnumOption_t[];

export interface EnumControlOptions_t {
  labels: Record<string, string>;
}

export interface EnumControlMappingOptions_t {
  labels?: Record<string, EnumOption_t>;
  mapping?: Record<string, unknown>;
}

export interface EnumArgOptions_t<T extends string>
  extends EnumControlMappingOptions_t {
  control: ControlOptions_t<T, EnumControlOptions_t>;
}
export interface BaseEnumOptions_t extends EnumControlMappingOptions_t {
  options?: EnumOptions_t;
}

export type ControlParams_t =
  | ControlOptions_t<'boolean'>
  | ControlOptions_t<'check', BaseEnumOptions_t>
  | ControlOptions_t<'color', ColorControlOptions_t>
  | ControlOptions_t<'date'>
  | ControlOptions_t<'file', FileControlOptions_t>
  | ControlOptions_t<'inline-check', BaseEnumOptions_t>
  | ControlOptions_t<'inline-radio', BaseEnumOptions_t>
  | ControlOptions_t<'object'>
  | ControlOptions_t<'multi-select', BaseEnumOptions_t>
  | ControlOptions_t<'number', NumberControlOptions_t>
  | ControlOptions_t<'radio', BaseEnumOptions_t>
  | ControlOptions_t<'range', NumberControlOptions_t>
  | ControlOptions_t<'select', BaseEnumOptions_t>
  | ControlOptions_t<'text'>;

export type ControlType_t = ControlParams_t['type'];

export interface TableParams_t {
  defaultValue?: {
    summary?: string | number;
  };
  disable?: boolean;
  type?: {
    summary?: string;
  };
}

export interface TypeParams_t {
  required?: boolean;
}

export interface PropOptions_t extends EnumControlMappingOptions_t {
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
  additional: Record<string, unknown> = {},
): PropOptions_t => {
  if (control === false) {
    return { control: false };
  }

  return {
    // @ts-ignore - type cannot reconncile with a single control type
    control: {
      // @ts-ignore - type cannot reconncile with a single control type
      type: control,
      ...options,
    },
    ...additional,
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
  { options = [], labels = {}, mapping = {} }: BaseEnumOptions_t = {},
): PropOptions_t => setControlType(control, { options }, { labels, mapping });

export const radioControl = (options: BaseEnumOptions_t) =>
  baseEnumControl('radio', options);
export const inlineRadioControl = (options: BaseEnumOptions_t) =>
  baseEnumControl('inline-radio', options);
export const checkControl = (options: BaseEnumOptions_t) =>
  baseEnumControl('check', options);
export const inlineCheckControl = (options: BaseEnumOptions_t) =>
  baseEnumControl('inline-check', options);
export const selectControl = (options: BaseEnumOptions_t) =>
  baseEnumControl('select', options);
export const multiSelectControl = (options: BaseEnumOptions_t) =>
  baseEnumControl('multi-select', options);

export const fileControl = (accept: FileControlOptions_t['accept']) =>
  setControlType('file', { accept });

export const colorControl = (
  presetColors: ColorControlOptions_t['presetColors'],
) => setControlType('color', { presetColors });
