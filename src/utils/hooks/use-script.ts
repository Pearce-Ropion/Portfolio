import { useEffect, useState } from 'react';

export enum UseScriptStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    READY = 'ready',
    ERROR = 'error',
}

export interface UseScriptOptions {
    async?: boolean;
    appendToHead?: boolean;
    onLoad?: (event: HTMLElementEventMap['load']) => void;
    onError?: (event: HTMLElementEventMap['error']) => void;
}

const useScript = (
    src: string,
    { async = true, appendToHead, onLoad, onError }: UseScriptOptions = {}
): string => {
    const [status, setStatus] = useState<string>(UseScriptStatus.IDLE);

    useEffect(() => {
        let script: HTMLScriptElement | null =
            document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = async;
            script.setAttribute('data-status', UseScriptStatus.LOADING);

            if (appendToHead) {
                document.head.appendChild(script);
            } else {
                document.body.appendChild(script);
            }

            setStatus(UseScriptStatus.LOADING);
        } else {
            const status: string | null = script.getAttribute('data-status');

            if (status) {
                setStatus(status);
            }
        }

        const setStateFromEvent = (
            event: HTMLElementEventMap['load'] | HTMLElementEventMap['error']
        ): void => {
            const status: string =
                event.type === 'load'
                    ? UseScriptStatus.READY
                    : UseScriptStatus.ERROR;

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

export default useScript;
