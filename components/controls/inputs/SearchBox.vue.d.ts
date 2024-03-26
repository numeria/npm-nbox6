/**
 * Componente "n-auto-complete" que garante o "null" no "v-model" quando componente está vazio
 * <SearchBox v-model="searchModel" :search-api-fn="conceitoService.search"></SearchBox>
 */
declare enum State {
    Initial = "Initial",
    Typing = "Typing",
    Selected = "Selected",
    Clear = "Clear"
}
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: null;
        required: false;
    };
    searchApiFn: {
        type: FunctionConstructor;
        required: true;
    };
    valueKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    textKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    delay: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}, {
    State: typeof State;
    props: any;
    emit: (e: "update:modelValue", args: any | null) => void;
    state: import("vue").Ref<State>;
    localValue: any;
    localText: import("vue").Ref<string | null>;
    innerText: import("vue").Ref<string | null>;
    options: import("vue").Ref<{
        value: any;
        label: string;
    }[]>;
    loading: import("vue").Ref<boolean>;
    timer: import("vue").Ref<number | undefined>;
    onModelChange: (newValue: any) => Promise<void>;
    onInput: (newText: string | null) => Promise<void>;
    onSelect: (newValue: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    handleSearch: (newText: string | null) => Promise<void>;
    handleSearchRequest: (newText: string | null) => Promise<void>;
    clear: () => void;
    getValue: (value: any) => any;
    getText: (value: string | null) => string | null;
    readonly NAutoComplete: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: null;
        required: false;
    };
    searchApiFn: {
        type: FunctionConstructor;
        required: true;
    };
    valueKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    textKey: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    delay: {
        type: NumberConstructor;
        required: false;
        default: () => number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    delay: number;
}>;
export default _sfc_main;
