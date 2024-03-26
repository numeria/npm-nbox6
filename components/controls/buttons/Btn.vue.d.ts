declare const _sfc_main: import("vue").DefineComponent<{
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
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    value: {
        type: BooleanConstructor;
        required: true;
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
    emit: {
        (e: "click", event: any): void;
        (e: "update:value", event: any): void;
    };
    value: import("vue").Ref<boolean>;
    classNames: import("vue").ComputedRef<(string | {
        "btn-button": boolean;
        "btn-link": boolean;
        "btn-is-disabled": boolean;
        "btn-is-full": boolean;
        "btn-is-loading": boolean;
        "btn-is-mini": boolean;
        "btn-pressed": boolean;
    })[]>;
    componentName: import("vue").ComputedRef<"span" | "RouterLink" | "button">;
    onClick: (event: any) => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "update:value")[], "click" | "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    toggle: {
        type: BooleanConstructor;
        required: false;
        default: () => boolean;
    };
    value: {
        type: BooleanConstructor;
        required: true;
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
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    mode: string;
    full: boolean;
    disabled: boolean;
    toggle: boolean;
    loading: boolean;
    mini: boolean;
}>;
export default _sfc_main;
