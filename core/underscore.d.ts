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
 * Regex para validar uma data em formato ISO-8601 (yyyy-MM-ddTHH:mm:ss.ffffZ)
 */
export declare const ISO_8601: RegExp;
/**
 * Indica se o valor é uma string em formado de data ISO-8601
 */
export declare function isDateString(value: any): boolean;
export declare const typeName: (v: any) => "string" | "object" | "number" | "undefined" | "boolean" | "null" | "date" | "array" | "unknown";
export declare const typesSort: {
    null: () => number;
    undefined: () => number;
    boolean: (a: boolean, b: boolean) => 0 | 1 | -1;
    string: (a: string, b: string) => number;
    number: (a: number, b: number) => number;
    array: (a: [], b: []) => number;
    date: (a: date, b: date) => number;
    object: () => number;
    unknown: () => number;
};
/**
 * Compara duas variaveis, retornando um inteiro [-1, 0, +1]
 */
export declare const compare: (a: any, b: any) => number;
