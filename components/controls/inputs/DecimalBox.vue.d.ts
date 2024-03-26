declare const _sfc_main: import("vue").DefineComponent<{
    format: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {
    props: any;
    culture: {
        culture: any;
        format: (value: any, fmt: any) => any;
        parseDate: (str: any) => any;
        parseNumber: (str: any) => any;
        timeAgo: (date: any) => any;
        dateAdd: (datepart: any, number: any, date: any) => Date;
        dateDiff: (datepart: any, start: any, end: any) => number | null;
    };
    parseDecimal: (input: string) => any;
    formatDecimal: (value: number | null) => any;
    readonly NInputNumber: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    format: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>>, {
    mini: boolean;
    format: string;
}>;
export default _sfc_main;
