declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: NumberConstructor;
        required: false;
    };
    profileKey: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: any;
    uniqueID: string;
    emit: (e: "update:modelValue", args: any) => void;
    close: () => void;
    getUniqueID: (key: string) => string;
    readonly CloseOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    DraggableDiv: import("vue").DefineComponent<{
        profileKey: {
            type: StringConstructor;
            required: false;
        };
    }, {
        style: {
            top: undefined;
            left: undefined;
            height: undefined;
            widht: undefined;
        };
        props: any;
        positions: {
            clientX: undefined;
            clientY: undefined;
            movementX: number;
            movementY: number;
        };
        resize: {
            clientX: undefined;
            clientY: undefined;
            movementX: number;
            movementY: number;
        };
        el: import("vue").Ref<any>;
        dragMouseDown: (e: any) => void;
        elementDrag: (e: any) => void;
        closeDragElement: () => void;
        resizeMouseDown: (e: any) => void;
        elementResize: (e: any) => void;
        closeResizeElement: () => void;
        updateProfile: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        profileKey: {
            type: StringConstructor;
            required: false;
        };
    }>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: NumberConstructor;
        required: false;
    };
    profileKey: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
