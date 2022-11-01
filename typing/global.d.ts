declare global {
    interface Window {
        ___navigate: (pathname: string) => void;

        grecaptcha?: {
            ready: (callback: () => PromiseLike<void>) => void;

            execute: (widgetId: number) => void;

            render: (
                container: string | HTMLElement,
                options: {
                    sitekey: string;
                    size?: 'normal' | 'compact' | 'invisible';
                    callback?: (response: string) => void;
                    'error-callback'?: () => void;
                }
            ) => number;
        };
    }
}

export {};
