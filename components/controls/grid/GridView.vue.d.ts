declare const _sfc_main: import("vue").DefineComponent<Readonly<{
    options?: any;
}>, {
    props: any;
    readonly NDataTable: any;
    readonly TrashOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly MenuOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly Filter: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly CopyOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    SortItems: import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
        };
        itemKey: {
            type: StringConstructor;
            required: true;
        };
        itemClass: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        handle: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
    }, {
        props: any;
        emit: (e: "update:modelValue", value: string | null) => void;
        el: import("vue").Ref<null>;
        draggable: import("vue").Ref<boolean>;
        dragIndex: number;
        handleDragStart: (index: any) => void;
        handleDrop: (index: any) => void;
        sortArray: (array: [], fromIndex: number, toIndex: number) => never[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
        };
        itemKey: {
            type: StringConstructor;
            required: true;
        };
        itemClass: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
        handle: {
            type: StringConstructor;
            required: false;
            default: () => string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        itemClass: string;
        handle: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    options?: any;
}>>>, {
    readonly options?: any;
}>;
export default _sfc_main;
