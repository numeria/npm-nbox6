export declare const useLoading: (initState?: false) => {
    loading: import("vue").Ref<false | undefined>;
    /**
     * Mantem o state do loading = true enquando a função async está em execução
     * @param {Function} asyncFunc
     */
    handler: (asyncFunc: () => void) => Promise<void>;
};
