declare module 'anchorate' {
    interface HashOptions {
        callback: (sucess: boolean) => void;
        scroller: (element: HTMLElement) => boolean;
    }

    function scroller(element: HTMLElement): boolean;
    function anchorate(options?: HashOptions): void;
}
