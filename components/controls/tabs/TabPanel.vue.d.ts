declare const _sfc_main: import("vue").DefineComponent<{
    index: {
        type: NumberConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: null;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
        default: () => boolean;
    };
}, {
    props: any;
    selectedIndex: import("vue").Ref<number>;
    isSelectedTab: import("vue").ComputedRef<boolean>;
    selectTab: () => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    index: {
        type: NumberConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: null;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
        default: () => boolean;
    };
}>>, {
    disabled: boolean;
}>;
export default _sfc_main;
