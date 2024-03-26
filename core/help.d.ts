declare function getHelpText(key: any): {
    content: string;
    userId: string;
    lastUpdate: Date;
};
declare function setHelpText(id: any, content: any): Promise<unknown>;
declare const _default: {
    get: typeof getHelpText;
    set: typeof setHelpText;
};
export default _default;
