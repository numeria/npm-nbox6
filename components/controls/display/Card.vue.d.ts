declare const _sfc_main: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        required: false;
    };
    icon: {
        type: null;
        required: false;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    showReset: {
        type: BooleanConstructor;
        required: true;
    };
}, {
    props: any;
    emit: {
        (e: "update:modelValue", args: any): void;
        (e: "reset", args: any): void;
    };
    collapsed: import("vue").Ref<boolean>;
    collapsedIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
    onClickCollapse: () => void;
    onResetClick: () => void;
    Icon: import("vue").DefineComponent<{
        name: {
            type: null;
            required: true;
        };
        spin: {
            type: BooleanConstructor;
            required: false;
        };
    }, {
        props: any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: null;
            required: true;
        };
        spin: {
            type: BooleanConstructor;
            required: false;
        };
    }>>, {
        spin: boolean;
    }>;
    readonly TrashBinOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Btn: import("vue").DefineComponent<{
        color: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        mode: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        full: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        icon: {
            type: null;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        loading: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        mini: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        to: {
            type: StringConstructor;
            required: false;
        };
    }, {
        props: any;
        classNames: import("vue").ComputedRef<(string | {
            "btn-button": boolean;
            "btn-link": boolean;
            "btn-is-disabled": boolean;
            "btn-is-full": boolean;
            "btn-is-loading": boolean;
            "btn-is-mini": boolean;
        })[]>;
        componentName: import("vue").ComputedRef<"span" | "RouterLink" | "button">;
        Icon: import("vue").DefineComponent<{
            name: {
                type: null;
                required: true;
            };
            spin: {
                type: BooleanConstructor;
                required: false;
            };
        }, {
            props: any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: null;
                required: true;
            };
            spin: {
                type: BooleanConstructor;
                required: false;
            };
        }>>, {
            spin: boolean;
        }>;
        readonly Reload: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        mode: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        full: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        icon: {
            type: null;
            required: false;
        };
        disabled: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        loading: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        mini: {
            type: BooleanConstructor;
            required: false;
            default: () => boolean;
        };
        to: {
            type: StringConstructor;
            required: false;
        };
    }>>, {
        color: string;
        mode: string;
        full: boolean;
        disabled: boolean;
        loading: boolean;
        mini: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "reset")[], "update:modelValue" | "reset", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        required: false;
    };
    icon: {
        type: null;
        required: false;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    showReset: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onReset?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
