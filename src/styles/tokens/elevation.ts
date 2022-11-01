import { PaletteShadows } from 'styles/tokens/color';

export const Elevation = {
  level0: 'none',
  // cards
  level2: `0 2px 4px -2px ${PaletteShadows.lightest}`,
  // popups
  level3: `0 4px 8px -2px ${PaletteShadows.light}`,
  // tooltips / dnd
  level4: `0 2px 8px -4px ${PaletteShadows.light}, 0 1px 4px ${PaletteShadows.light}`,
  // modals
  level5: `0 2px 8px ${PaletteShadows.dark}, 0 4px 16px -8px ${PaletteShadows.dark}`,
  // system-level actions
  level6: `0 3px 12px ${PaletteShadows.dark}, 0 6px 24px -16px ${PaletteShadows.dark}`,
} as const;

export enum ZIndex {
  drawer = 900,
  modalOverlay = 1000,
  modal = 1100,
  dropdown = 2000,
  popover = 2100,
  tooltip = 2200,
  toast = 3000,
}
