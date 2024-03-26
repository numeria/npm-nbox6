declare const _sfc_main: import("vue").DefineComponent<{
    options: {
        type: ArrayConstructor;
        required: true;
        default: () => never[];
    };
    valueKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: () => number;
    };
    textKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: () => number;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {
    props: any;
    opts: import("vue").ComputedRef<{
        value: never;
        label: never;
    }[]>;
    readonly NSelect: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: ArrayConstructor;
        required: true;
        default: () => never[];
    };
    valueKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: () => number;
    };
    textKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
        default: () => number;
    };
    mini: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>>, {
    mini: boolean;
    options: unknown[];
    valueKey: string | number;
    textKey: string | number;
}>;
export default _sfc_main;
