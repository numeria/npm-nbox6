export interface ApiError {
    code: number;
    message: string;
    source: string;
    stackTrace: string;
    inner?: string;
    trackId: string;
}
export default function <T>(method: string, template: string, routeData: any, body: any, auth: boolean): Promise<T>;
