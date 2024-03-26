declare const _sfc_main: import("vue").DefineComponent<{}, {
    MaskBox: import("vue").DefineComponent<{
        value: {
            type: StringConstructor;
            required: true;
            default: () => string;
        };
        mask: {
            type: StringConstructor;
            required: true;
            default: () => string;
        };
        mini: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
    }, {
        props: any;
        emit: (e: "update:value", value: string | null) => void;
        textValue: import("vue").Ref<string | null>;
        lastValue: import("vue").Ref<string | null>;
        onUpdate: (value: string) => void;
        onBlur: () => void;
        InputBox: import("vue").DefineComponent<{
            value: {
                type: null;
                required: false;
            };
            textTransform: {
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
            emit: (e: "update:value", value: string | null) => void;
            localValue: import("vue").Ref<string | null>;
            onInput: (newValue: string) => void;
            onBlur: () => void;
            getValue: (value: any) => any;
            readonly NInput: any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            value: {
                type: null;
                required: false;
            };
            textTransform: {
                type: StringConstructor;
                required: false;
                default: () => string;
            };
            mini: {
                type: BooleanConstructor;
                required: false;
                default: () => boolean;
            };
        }>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, {
            mini: boolean;
            textTransform: string;
        }>;
        readonly mask: typeof import("../../../core/mask");
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: StringConstructor;
            required: true;
            default: () => string;
        };
        mask: {
            type: StringConstructor;
            required: true;
            default: () => string;
        };
        mini: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
    }>> & {
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    }, {
        value: string;
        mini: boolean;
        mask: string;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
