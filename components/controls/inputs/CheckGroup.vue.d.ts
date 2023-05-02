declare const _sfc_main: import("vue").DefineComponent<{}, {
    readonly NCheckboxGroup: import("vue").DefineComponent<{
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: import("vue").PropType<"small" | "medium" | "large">;
        readonly value: import("vue").PropType<(string | number)[] | null>;
        readonly defaultValue: {
            readonly type: import("vue").PropType<(string | number)[] | null>;
            readonly default: null;
        };
        readonly disabled: {
            readonly type: import("vue").PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly 'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: (string | number)[], meta: {
            actionType: "check" | "uncheck";
            value: string | number;
        }) => void>>;
        readonly onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: (string | number)[], meta: {
            actionType: "check" | "uncheck";
            value: string | number;
        }) => void>>;
        readonly onChange: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: (string | number)[]) => void> | undefined>;
    }, {
        mergedClsPrefix: import("vue").ComputedRef<string>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: import("vue").PropType<"small" | "medium" | "large">;
        readonly value: import("vue").PropType<(string | number)[] | null>;
        readonly defaultValue: {
            readonly type: import("vue").PropType<(string | number)[] | null>;
            readonly default: null;
        };
        readonly disabled: {
            readonly type: import("vue").PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly 'onUpdate:value': import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: (string | number)[], meta: {
            actionType: "check" | "uncheck";
            value: string | number;
        }) => void>>;
        readonly onUpdateValue: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: (string | number)[], meta: {
            actionType: "check" | "uncheck";
            value: string | number;
        }) => void>>;
        readonly onChange: import("vue").PropType<import("naive-ui/es/_utils").MaybeArray<(value: (string | number)[]) => void> | undefined>;
    }>>, {
        readonly disabled: boolean | undefined;
        readonly defaultValue: (string | number)[] | null;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
