import { useCallback, useEffect, useMemo, useState } from 'react';

import { RECAPTCHA_V3_KEY } from 'config';

import { HookStatus } from 'utils/hooks/status';
import { useScript } from 'utils/hooks/useScript';

export interface UseReCaptchaOptions {
  containerId: string;
  size?: 'normal' | 'compact' | 'invisible';
  onLoad?: (event: HTMLElementEventMap['load']) => void;
  onLoadError?: (event: HTMLElementEventMap['error']) => void;
  onSuccess?: (response: string) => void;
  onError?: () => void;
}

export interface UseReCaptchaReturnValue {
  status: HookStatus;
  container: JSX.Element;
  execute: () => void;
}

const reCaptchaAPI = new URL('https://www.recaptcha.net/recaptcha/api.js');
reCaptchaAPI.searchParams.set('render', 'explicit');

export const useReCaptcha = ({
  containerId,
  size = 'invisible',
  onLoad,
  onLoadError,
  onError,
  onSuccess,
}: UseReCaptchaOptions): UseReCaptchaReturnValue => {
  const [status, setStatus] = useState<HookStatus>(HookStatus.LOADING);
  const [widgetId, setWidgetId] = useState<number | null>(null);

  const scriptStatus: HookStatus = useScript(reCaptchaAPI.href, {
    onLoad,
    onError: onLoadError,
  });

  useEffect(() => {
    if (scriptStatus === HookStatus.LOADING) {
      setStatus(HookStatus.LOADING);
    } else if (scriptStatus === HookStatus.ERROR) {
      setStatus(HookStatus.ERROR);
    }
  }, [scriptStatus]);

  useEffect(() => {
    // We poll for window.grecaptcha.render because the function isn't
    // available yet even when the script has loaded.  Google supports an
    // "onload" parameter that would call a globally defined callback, but
    // that makes it difficult to support multiple reCAPTCHA widgets with a
    // hook.
    const intervalID = setInterval(() => {
      if (window.grecaptcha) {
        clearInterval(intervalID);
        setStatus(HookStatus.READY);
      }
    }, 100);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    if (status === HookStatus.READY && widgetId === null) {
      if (window.grecaptcha) {
        const _widgetId: number = window.grecaptcha?.render(containerId, {
          sitekey: RECAPTCHA_V3_KEY,
          size,
          callback: onSuccess,
          'error-callback': () => {
            setStatus(HookStatus.ERROR);

            if (onError) {
              onError();
            }
          },
        });

        setWidgetId(_widgetId);
      }
    }
  }, [status, widgetId, containerId, size, onSuccess, onError]);

  const container = useMemo(() => <div id={containerId} />, [containerId]);

  const execute = useCallback(() => {
    if (widgetId !== null) {
      window.grecaptcha?.execute(widgetId);
    } else {
      console.error(
        `Error: "grecaptcha.execute" called before widget has been initialized. Make sure status is set to "ready" before calling execute`,
      );
    }
  }, [widgetId]);

  return {
    status,
    container,
    execute,
  };
};
