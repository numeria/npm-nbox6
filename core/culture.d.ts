export declare const useCulture: (lang?: string) => {
    culture: any;
    format: (value: any, fmt: any) => any;
    parseDate: (str: any) => any;
    parseNumber: (str: any) => any;
    timeAgo: (date: any) => any;
    dateAdd: (datepart: any, number: any, date: any) => Date;
    dateDiff: (datepart: any, start: any, end: any) => number | null;
};
