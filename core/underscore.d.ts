/**
 * Retorna true se um valor é `null` ou `undefined`
 */
export declare const isEmpty: (v: any) => boolean;
export declare const isObject: (a: any) => boolean;
export declare const isString: (s: any) => boolean;
export declare const isNumber: (n: any) => boolean;
export declare const isBoolean: (b: any) => boolean;
export declare const isDate: (d: any) => boolean;
export declare const toIsoDateString: (d: any) => any;
export declare function jsonFormatter(key: any, value: any): any;
/**
 * Converte um objeto javascript em um querystring. Suporta multiplos niveis de objeto, criando estrutura de array
 */
export declare function toQueryString(obj: any): string;
/**
 * Função simples de calcular o hash de uma string, gerando um numero inteiro que represente aquela string
 * @param text Texto a ser aplicada a função de hash
 * @returns Inteiro com o hash do texto
 */
export declare function hashString(text: string): number;
/**
 * Regex para validar uma data em formato ISO-8601 (yyyy-MM-ddTHH:mm:ss.ffffZ)
 */
export declare const ISO_8601: RegExp;
/**
 * Indica se o valor é uma string em formado de data ISO-8601
 */
export declare function isDateString(value: any): boolean;
export declare const typeName: (v: any) => "string" | "object" | "number" | "undefined" | "boolean" | "null" | "date" | "array" | "unknown";
export declare const typesSort: {
    null: (a: any, b: any) => number;
    undefined: (a: any, b: any) => number;
    boolean: (a: boolean, b: boolean) => 0 | 1 | -1;
    string: (a: string, b: string) => number;
    number: (a: number, b: number) => number;
    array: typeof compareArrays;
    date: (a: Date, b: Date) => number;
    object: (a: any, b: any) => number;
    unknown: (a: any, b: any) => number;
};
declare function compareArrays(a: any[], b: any[]): number;
/**
 * Compara duas variaveis, retornando um inteiro com a distancia (-, 0, +)
 */
export declare const compare: (a: any, b: any) => number;
export {};
