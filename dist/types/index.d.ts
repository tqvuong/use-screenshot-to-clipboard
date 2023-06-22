export declare const useScreenshot: ({ type, quality }: {
    type?: string | undefined;
    quality: number;
}) => (((node: HTMLElement, nameOfDownload: string) => Promise<void>) | null)[];
declare const useScreenshotToClipboard: ({ type, quality }: {
    type?: string | undefined;
    quality: number;
}) => (((node: HTMLElement) => Promise<void>) | null)[];
export default useScreenshotToClipboard;
