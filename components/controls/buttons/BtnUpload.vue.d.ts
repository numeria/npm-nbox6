import { UploadFile } from "../../../core/storage";
declare const _sfc_main: import("vue").DefineComponent<{
    multiple: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: any;
    emit: (e: "file-select", files: UploadFile[]) => void;
    fileChange: (event: any) => Promise<void>;
    readFile: (file: any) => Promise<string>;
    readonly CloudUploadSharp: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "file-select"[], "file-select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    multiple: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    "onFile-select"?: ((...args: any[]) => any) | undefined;
}, {
    multiple: boolean;
}>;
export default _sfc_main;
