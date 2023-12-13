export declare const notification: {
    success: (text: string) => Promise<unknown>;
    error: (text: string) => Promise<unknown>;
    alert: (text: string, options?: {
        details: string[];
        title: string;
    }) => Promise<unknown>;
    confirm: (message?: string) => Promise<boolean>;
};
