import { ComponentProps, CSSProperties, ElementRef } from 'react';

import { Palette } from 'styles/tokens';
import { ValueOf_t } from 'types/helpers';
import { JSXComponent_t } from 'types/react';
// import { Background_t } from '@sb/utils/backgrounds';
import { ComponentWithRef_t } from 'utils/component';

export type DefaultBackground_t<
  Color extends keyof typeof Palette = 'neutral0',
> = Color;

export type StoryControlSort_t = 'alpha' | 'asc' | 'desc';
export type StoryLayout_t = 'fullscreen' | 'padded' | 'centered';
export type StoryViewMode_t = 'docs' | 'story';

export interface StoryArgs_t {
  [arg: string]: any;
}

export type StoryArgTypes_t<Args extends StoryArgs_t = StoryArgs_t> = {
  [Arg in keyof Args]: {
    control?: {
      type: string;
    };
    options?: string[];
  };
};

export type StoryComponent_t<Component extends JSXComponent_t | never> =
  Component extends JSXComponent_t
    ? ComponentWithRef_t<ElementRef<Component>, ComponentProps<Component>>
    : never;

export interface StoryGlobals_t {
  [key: string]: unknown;
  backgrounds?: {
    value: ValueOf_t<typeof Palette>;
  };
  measureEnabled: boolean;
  outline: boolean;
}

export interface StoryParameters_t<Args extends StoryArgs_t = StoryArgs_t> {
  actions: Record<string, unknown>;
  args: Args;
  argTypes: StoryArgTypes_t<Args>;
  // backgrounds: {
  //   default: DefaultBackground_t;
  //   values: Background_t[];
  //   grid?: {
  //     cellAmount: number;
  //     cellSize: number;
  //     opacity: number;
  //   };
  // };
  componentName?: string;
  controls: {
    exclude: string[];
    hideNoControlsWarning?: boolean;
    matchers: Record<string, RegExp>;
    sort: StoryControlSort_t;
  };
  filename: string;
  framework: 'react';
  globals: StoryGlobals_t;
  layout: StoryLayout_t;
  storySource: { source: string };
  page: {
    background?: ValueOf_t<typeof Palette>;
    description?: string;
    inverted?: boolean;
    layout?: StoryLayout_t;
    notes?: string;
  };
  viewport: {
    defaultViewport: string;
    viewports: Record<string, { name: string; styles: CSSProperties }>;
  };
}

export interface StoryContext_t<
  Args extends StoryArgs_t = StoryArgs_t,
  Component extends JSXComponent_t = never,
> {
  args: Args;
  argTypes: StoryArgTypes_t<Args>;
  canvasElement: Element;
  component: StoryComponent_t<Component> | undefined;
  componentId: string;
  globals: StoryGlobals_t;
  id: string;
  initialArgs: Args;
  kind: string;
  name: string;
  parameters: StoryParameters_t<Args>;
  story: string;
  subcomonents: Record<string, StoryComponent_t<Component>> | undefined;
  title: string;
  viewMode: StoryViewMode_t;
}
