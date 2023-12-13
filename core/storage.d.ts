export declare type UploadFile = {
    filename: string;
    contentBase64: string;
};
/**
 * Envia para o servidor armazenar (no container padrão) o arquivo. Retorna um
 * array com os fileIds adicionados
 * @param files Retorno do evento "file-select" do controle BtnUpload
 */
export declare function upload(files: UploadFile[]): Promise<string>;
/**
 * Solicita ao usuário permissão para fazer download do arquivo informado
 * pelo fileId
 */
export declare function download(fileId: string): Promise<void>;
/**
 * Exclui um arquivo do storage pelo fileId
 */
export declare function remove(fileId: string): Promise<void>;
