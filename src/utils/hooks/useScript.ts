import { useEffect, useState } from 'react';

import { HookStatus } from 'utils/hooks/status';

export interface UseScriptOptions {
    async?: boolean;
    defer?: boolean;
    appendToHead?: boolean;
    onLoad?: (event: HTMLElementEventMap['load']) => void;
    onError?: (event: HTMLElementEventMap['error']) => void;
}

export const useScript = (
    src: string,
    {
        async = true,
        defer = false,
        appendToHead,
        onLoad,
        onError,
    }: UseScriptOptions = {}
): HookStatus => {
    const [status, setStatus] = useState<HookStatus>(HookStatus.IDLE);

    useEffect(() => {
        let script: HTMLScriptElement | null =
            document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.setAttribute('data-status', HookStatus.LOADING);

            if (async) {
                script.async = true;
            }

            if (defer) {
                script.defer = true;
            }

            if (appendToHead) {
                document.head.appendChild(script);
            } else {
                document.body.appendChild(script);
            }

            setStatus(HookStatus.LOADING);
        } else {
            const status: string | null = script.getAttribute('data-status');

            if (status) {
                setStatus(status as HookStatus);
            }
        }

        const setStateFromEvent = (
            event: HTMLElementEventMap['load'] | HTMLElementEventMap['error']
        ): void => {
            const status: HookStatus =
                event.type === 'load' ? HookStatus.READY : HookStatus.ERROR;

            if (script) {
                script.setAttribute('data-status', status);
            }

            setStatus(status);
        };

        script.addEventListener('load', setStateFromEvent);
        script.addEventListener('error', setStateFromEvent);

        if (onLoad) {
            script.addEventListener('load', onLoad);
        }

        if (onError) {
            script.addEventListener('error', onError);
        }

        return () => {
            if (script) {
                script.removeEventListener('load', setStateFromEvent);
                script.removeEventListener('error', setStateFromEvent);

                if (onLoad) {
                    script.removeEventListener('load', onLoad);
                }

                if (onError) {
                    script.removeEventListener('error', onError);
                }
            }
        };
    }, [src, async, appendToHead, onLoad, onError]);

    return status;
};
