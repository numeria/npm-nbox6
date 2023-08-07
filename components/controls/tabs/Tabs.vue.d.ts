declare const _sfc_main: import("vue").DefineComponent<{
    selectedIndex: {
        type: NumberConstructor;
        required: true;
        default: () => number;
    };
}, {
    props: any;
    emit: (e: "update:selectedIndex", value: number) => void;
    selectedIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:selectedIndex"[], "update:selectedIndex", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selectedIndex: {
        type: NumberConstructor;
        required: true;
        default: () => number;
    };
}>> & {
    "onUpdate:selectedIndex"?: ((...args: any[]) => any) | undefined;
}, {
    selectedIndex: number;
}>;
export default _sfc_main;
