import type { DataTableRowKey } from "naive-ui";
declare type GridViewItemOptions<T> = {
    align?: "left" | "center" | "right";
    color?: "default" | "primary" | "info" | "success" | "warning" | "error";
    mode?: "default" | "link";
    icon?: any;
    mini?: boolean;
    width?: number;
    title?: string | ((row: T) => string);
    disabled?: (row: T) => boolean;
    format?: string;
    sort?: string;
};
export declare class GridViewOptions<T> {
    private _data;
    private _selectedItems;
    private _enableScrollX;
    readonly key: string;
    columns: any[];
    options: any;
    get data(): T[];
    set data(value: T[]);
    /**
     * Retorna a lista de todas os IDs que estão selecionados. Lista vazia em caso de nenhum
     */
    get selectedItems(): DataTableRowKey[];
    /**
     * Retorna o ID do item selecionado (null em caso de nenhum)
     */
    get selectedItem(): DataTableRowKey | null;
    /**
     * Adiciona um ID na lista dos selecionados e marca na GridView
     */
    set selectedItem(value: DataTableRowKey | null);
    /**
     * Cria uma nova instancia de GridViewOptions para ser utilizada no componente grid-view
     * @param key A chave primaria ou identificador unico da Dto
     */
    constructor(key: string);
    /**
     * Carrega a gridview utilizando uma função assincrona
     * @param asyncLoad Metodo assincrono que retorna um array do tipo T da gridview
     */
    load(asyncLoad: () => Promise<T[]>): Promise<void>;
    /**
     * Indica que a GridView terá seleção multipla (checkbox)
     */
    multiple(options?: {
        disabled?: (row: T) => boolean;
    }): GridViewOptions<T>;
    /**
     * Indica que a GridView terá seleção simples (radio)
     */
    select(options?: {
        disabled?: (row: T) => boolean;
    }): GridViewOptions<T>;
    /**
     * Adiciona suporte a scroll horizontal na tabela.
     * As colunas definidas antes destes metodos serão fixadas a esquerda
     * A largura total da tabela é computada pela somas dos width de cada coluna. Quando uma GridView utiliza
     * este metodo, todas as colunas de tamanho variavel devem estar preenchidas para o scroll funcionar corretamente
     */
    freeze(): this;
    /**
     * Adiciona uma coluna do tipo botão na gridview
     * @param text Texto a exibir no botão
     * @param onclick Evento do click do botão
     * @param options Opções de renderização (align, disabled, width, color, mode, title, icon)
     */
    button(text: string, onclick: (row: T) => void, options?: GridViewItemOptions<T>): GridViewOptions<T>;
    /**
     * Adiciona uma coluna do tipo botão com um icone na GridView
     * @param name Referencia do icone. Utilizar import { NomeIcone } from "@vicons/ionicons5"
     * @param onclick Metodo para capturar o evento de click neste icone
     * @param options Opções de renderização (width, align, title, color, disabled)
     */
    icon(icon: any, onclick: (row: T) => void, options?: GridViewItemOptions<T>): GridViewOptions<T>;
    /**
     * Adiciona uma coluna a GridView do tipo edição de registro. Pode renderizar apenas um icone (quando o parametro onClickOrUrl for uma função)
     * ou renderizar um link com um icone apontando para o template de navegacao.
     * Um template de navegação é representado por ex "/pat/processo/{idProcesso}" aonde idProcesso é um field do objeto row T
     * @param onClickOrUrl Quando um metodo, dispara no click do icone passando a row T. Se uma string, é um template de navegação
     * @param options Opções de renderização ()
     */
    edit(onClickOrUrl: ((row: T) => void) | string, options?: GridViewItemOptions<T>): GridViewOptions<T>;
    /**
     * Adiciona uma coluna na gridview com os dados vinculadas ao field do dataSource
     * @param header Titulo na header
     * @param key Chave/Caminho para obter o dado do objeto
     * @param width Largura da coluna (em 'rem'). Sempre deixar uma das colunas sem este parametro (= null) para o responsivo
     * @param options Opções de renderização (align, disabled, format)
     */
    column(header: string, field: string, width?: number, options?: GridViewItemOptions<T>): GridViewOptions<T>;
    /**
     * Adiciona uma coluna que testa o campo (que deve ser boolean) e exibe um icone de Check ou X (ex: fgAtivo)
     * @param header Texto a exibir no botão
     * @param field Nome do campo do objeto T
     * @param options Opções de renderização (align, width)
     */
    boolean(header: string, field: string, width?: number, options?: GridViewItemOptions<T>): GridViewOptions<T>;
    /**
     * Renderiza um componente ou um texto ou componente no lugar da coluna. Utilizado para condicionais ou colunas avançadas
     * @param header Titulo na header
     * @param width Largura da coluna (em rem)
     * @param fn Função de renderização. Retorna um componente ou um texto
     * @param options Opções de renderização (align, disabled, sort)
     */
    render(header: string, width: number | null | undefined, fn: (row: T, index?: number) => string | any, options?: GridViewItemOptions<T>): this;
    createControl(control: any, bindName: string, { header, field, width, controlOptions, options }: {
        header: any;
        field: any;
        width: any;
        controlOptions: any;
        options: any;
    }): this;
    /**
     * Renderiza um componente do tipo InputBox e faz bind do value com a field informado.
     * @param header Titulo na header
     * @param field Nome do campo
     * @param width Largura da coluna (em rem)
     * @param inputOptions Opções de customização do objeto InputBox (suas propriedades/eventos)
     * @param options Opções de renderização (align, disabled, sort)
     */
    inputbox(header: string, field: string, width?: number, inputOptions?: any, options?: GridViewItemOptions<T>): this;
    /**
     * Renderiza um componente do tipo ComboBox e faz bind do value com a field informado. Para popular a combo, utilize comboOptions
     * @param header Titulo na header
     * @param field Nome do campo
     * @param width Largura da coluna (em rem)
     * @param comboOptions Opções para customizar o componente de ComboBox. Utilize este campo para popular a combo. { options: [...], valueKey: "idPessoa", textKey: "noPessoa" })
     * @param options Opções de renderização (align, disabled, sort)
     */
    combobox(header: string, field: string, width?: number, comboOptions?: any, options?: GridViewItemOptions<T>): this;
    /**
     * Renderiza um componente do tipo NumberBox e faz bind do value com a field informado.
     * @param header Titulo na header
     * @param field Nome do campo
     * @param width Largura da coluna (em rem)
     * @param numberOptions Opções para customizar o componente de NumberBox.
     * @param options Opções de renderização (align, disabled, sort)
     */
    numberbox(header: string, field: string, width?: number, numberOptions?: any, options?: GridViewItemOptions<T>): this;
    /**
     * Renderiza um componente do tipo CheckBox e faz bind do checked (boolean) com a field informado.
     * @param header Titulo na header
     * @param field Nome do campo
     * @param width Largura da coluna (em rem)
     * @param checkboxOptions Opções para customizar o componente de CheckBox.
     * @param options Opções de renderização (align, disabled, sort)
     */
    checkbox(header: string, field: string, width?: number, checkboxOptions?: any, options?: GridViewItemOptions<T>): this;
    /**
     * Renderiza um componente do tipo DateBox e faz bind do date (Date) com a field informado.
     * @param header Titulo na header
     * @param field Nome do campo
     * @param width Largura da coluna (em rem)
     * @param dateboxOptions Opções para customizar o componente de DateBox.
     * @param options Opções de renderização (align, disabled, sort)
     */
    datebox(header: string, field: string, width?: number, dateboxOptions?: any, options?: GridViewItemOptions<T>): this;
    createOptions(): {
        scrollX: () => any;
        columns: any[];
        bordered: boolean;
        data: T[];
        loading: boolean;
        pagination: {
            pageSize: number;
        };
        selectedItems: DataTableRowKey[];
        rowKey: (row: any) => any;
        handleCheck: (rowKeys: DataTableRowKey[]) => void;
    };
}
export {};
