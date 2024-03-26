declare const _sfc_main: import("vue").DefineComponent<{
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
export default _sfc_main;
