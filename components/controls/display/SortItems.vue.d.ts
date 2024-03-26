import { type Ref } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
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
    el: Ref<null>;
    draggable: Ref<boolean>;
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
export default _sfc_main;
