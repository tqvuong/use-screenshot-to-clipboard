interface Screenshot {
    type?: string;
    quality?: number;
    scale?: number;
}
export declare const useScreenshot: ({ type, quality, scale }: Screenshot) => any[];
export {};
