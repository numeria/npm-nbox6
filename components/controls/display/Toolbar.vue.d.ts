declare const _sfc_main: import("vue").DefineComponent<{}, {
    readonly NSpace: import("vue").DefineComponent<{
        readonly align: import("vue").PropType<"end" | "center" | "stretch" | "baseline" | "start" | "flex-end" | "flex-start">;
        readonly justify: {
            readonly type: import("vue").PropType<import("naive-ui/es/space/src/Space").Justify>;
            readonly default: "start";
        };
        readonly inline: BooleanConstructor;
        readonly vertical: BooleanConstructor;
        readonly size: {
            readonly type: import("vue").PropType<number | "small" | "medium" | "large" | [number, number]>;
            readonly default: "medium";
        };
        readonly wrapItem: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly itemStyle: import("vue").PropType<string | import("vue").CSSProperties>;
        readonly wrap: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly internalUseGap: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Space", {
            gapSmall: string;
            gapMedium: string;
            gapLarge: string;
        }, any>>;
        readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Space", {
            gapSmall: string;
            gapMedium: string;
            gapLarge: string;
        }, any>>>;
        readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Space", {
            gapSmall: string;
            gapMedium: string;
            gapLarge: string;
        }, any>>>;
    }, {
        useGap: boolean;
        rtlEnabled: import("vue").Ref<import("naive-ui/es/config-provider/src/internal-interface").RtlItem | undefined> | undefined;
        mergedClsPrefix: import("vue").ComputedRef<string>;
        margin: import("vue").ComputedRef<{
            horizontal: number;
            vertical: number;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly align: import("vue").PropType<"end" | "center" | "stretch" | "baseline" | "start" | "flex-end" | "flex-start">;
        readonly justify: {
            readonly type: import("vue").PropType<import("naive-ui/es/space/src/Space").Justify>;
            readonly default: "start";
        };
        readonly inline: BooleanConstructor;
        readonly vertical: BooleanConstructor;
        readonly size: {
            readonly type: import("vue").PropType<number | "small" | "medium" | "large" | [number, number]>;
            readonly default: "medium";
        };
        readonly wrapItem: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly itemStyle: import("vue").PropType<string | import("vue").CSSProperties>;
        readonly wrap: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly internalUseGap: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly theme: import("vue").PropType<import("naive-ui/es/_mixins").Theme<"Space", {
            gapSmall: string;
            gapMedium: string;
            gapLarge: string;
        }, any>>;
        readonly themeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Space", {
            gapSmall: string;
            gapMedium: string;
            gapLarge: string;
        }, any>>>;
        readonly builtinThemeOverrides: import("vue").PropType<import("naive-ui/es/_mixins/use-theme").ExtractThemeOverrides<import("naive-ui/es/_mixins").Theme<"Space", {
            gapSmall: string;
            gapMedium: string;
            gapLarge: string;
        }, any>>>;
    }>>, {
        readonly inline: boolean;
        readonly size: number | "small" | "medium" | "large" | [number, number];
        readonly wrap: boolean;
        readonly vertical: boolean;
        readonly justify: import("naive-ui/es/space/src/Space").Justify;
        readonly wrapItem: boolean;
        readonly internalUseGap: boolean;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
