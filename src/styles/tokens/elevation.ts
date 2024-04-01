import { PaletteElevation } from 'styles/tokens/color';

export const Elevation = {
  low: `0px -1px 8px 0px ${PaletteElevation.shadowStrong}, 0px 4px 8px 0px ${PaletteElevation.shadowSoft}, 4px 0px 8px 0px ${PaletteElevation.shadowSoft}`,
  lowFilter: `drop-shadow(0px -1px 8px ${PaletteElevation.shadowStrong}) drop-shadow(0px 4px 8px ${PaletteElevation.shadowSoft}) drop-shadow(4px 0px 8px ${PaletteElevation.shadowSoft})`,
  high: `0px -1px 8px 0px ${PaletteElevation.shadowStronger}, 0px 4px 8px 0px ${PaletteElevation.shadowStrong}, 4px 0px 8px 0px ${PaletteElevation.shadowStrong}`,
  highFilter: `drop-shadow(0px -1px 8px ${PaletteElevation.shadowStronger}) drop-shadow(0px 4px 8px ${PaletteElevation.shadowStrong}) drop-shadow(4px 0px 8px ${PaletteElevation.shadowStrong})`,
} as const;

export const ZIndex = {
  drawer: 900,
  modalOverlay: 1000,
  modal: 1100,
  dropdown: 2000,
  popover: 2100,
  tooltip: 2200,
  toast: 3000,
} as const;
