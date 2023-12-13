export declare type ErrorInfo = {
    code: number;
    message: string;
    inner?: string;
    details: string[];
};
export declare const errorHandler: (value: string | ErrorInfo) => Promise<void>;
