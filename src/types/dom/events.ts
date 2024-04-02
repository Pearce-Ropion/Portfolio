import type { DOMAttributes } from 'react';

type PickDOMEvent_t<T, E extends keyof DOMAttributes<T>> = Pick<
  DOMAttributes<T>,
  E
> & {
  [Event in keyof Pick<
    DOMAttributes<T>,
    E
  > as `${Event}Capture`]?: DOMAttributes<T>[Event];
};

export interface ClipboardDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onCopy' | 'onCut' | 'onPaste'> {}

export interface CompositionDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    'onCompositionEnd' | 'onCompositionStart' | 'onCompositionUpdate'
  > {}

export interface FocusDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onFocus' | 'onBlur'> {}

export interface FormDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    | 'onChange'
    | 'onBeforeInput'
    | 'onInput'
    | 'onReset'
    | 'onSubmit'
    | 'onInvalid'
  > {}

export interface ImageDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onLoad' | 'onError'> {}

export interface KeyboardDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onKeyDown' | 'onKeyUp'> {}

export interface MediaDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    | 'onAbort'
    | 'onCanPlay'
    | 'onCanPlayThrough'
    | 'onDurationChange'
    | 'onEmptied'
    | 'onEncrypted'
    | 'onEnded'
    | 'onLoadedData'
    | 'onLoadedMetadata'
    | 'onLoadStart'
    | 'onPause'
    | 'onPlay'
    | 'onPlaying'
    | 'onProgress'
    | 'onRateChange'
    | 'onSeeked'
    | 'onSeeking'
    | 'onStalled'
    | 'onSuspend'
    | 'onTimeUpdate'
    | 'onVolumeChange'
    | 'onWaiting'
  > {}

export interface MouseDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    | 'onAuxClick'
    | 'onClick'
    | 'onContextMenu'
    | 'onDoubleClick'
    | 'onMouseDown'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseOut'
    | 'onMouseOver'
    | 'onMouseUp'
  > {}

export interface MouseDragDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    | 'onDrag'
    | 'onDragEnd'
    | 'onDragEnter'
    | 'onDragExit'
    | 'onDragLeave'
    | 'onDragOver'
    | 'onDragStart'
    | 'onDrop'
  > {}

export interface SelectionDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onSelect'> {}

export interface TouchDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    'onTouchCancel' | 'onTouchEnd' | 'onTouchMove' | 'onTouchStart'
  > {}

export interface PointerDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    | 'onPointerDown'
    | 'onPointerMove'
    | 'onPointerUp'
    | 'onPointerCancel'
    | 'onPointerEnter'
    | 'onPointerLeave'
    | 'onPointerOver'
    | 'onPointerOut'
    | 'onGotPointerCapture'
    | 'onLostPointerCapture'
  > {}

export interface ScrollDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onScroll' | 'onWheel'> {}

export interface AnimationDOMEvents_t<T>
  extends PickDOMEvent_t<
    T,
    'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > {}

export interface TransitionDOMEvents_t<T>
  extends PickDOMEvent_t<T, 'onTransitionEnd'> {}

export interface StandardDOMEvents_t<T>
  extends FocusDOMEvents_t<T>,
    KeyboardDOMEvents_t<T>,
    MouseDOMEvents_t<T>,
    TouchDOMEvents_t<T>,
    PointerDOMEvents_t<T>,
    ScrollDOMEvents_t<T> {}
