import { type Ref } from "vue";
type ErrorFormItem = {
    field: string;
    message: string;
};
declare const _sfc_main: import("vue").DefineComponent<{
    model: {
        type: null;
        required: false;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    root: Ref<HTMLElement | null>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    showErrors: Ref<boolean>;
    errors: import("vue").ComputedRef<any[]>;
    validate: () => Promise<Array<ErrorFormItem>>;
    validateDataset: (data: any) => any[];
    validateListItem: (errorList: any, data: any, items: any) => void;
    validateReset: () => void;
    resolvePath: (obj: any, field: string, defaultValue?: any) => any;
    readonly StopwatchOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
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
    model: {
        type: null;
        required: false;
    };
    labelWidth: {
        type: (StringConstructor | NumberConstructor)[];
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
}>>, {
    loading: boolean;
}>;
export default _sfc_main;
