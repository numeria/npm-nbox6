declare const _sfc_main: import("vue").DefineComponent<{
    mini: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}, {
    props: any;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mini: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
}>>, {
    mini: boolean;
}>;
export default _sfc_main;
