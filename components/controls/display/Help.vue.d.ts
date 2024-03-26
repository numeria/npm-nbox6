declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
}, {
    props: any;
    md: any;
    el: import("vue").Ref<any>;
    showHelp: import("vue").Ref<boolean>;
    showEditor: import("vue").Ref<boolean>;
    canEditHelp: import("vue").Ref<boolean>;
    content: import("vue").Ref<string>;
    saveHelp: () => Promise<unknown>;
    openHelpBox: (e: any) => void;
    readonly AlbumsOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: () => string;
    };
}>>, {
    mode: string;
}>;
export default _sfc_main;
