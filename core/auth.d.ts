/**
 * Objeto de usuario atual. Reativo. Utilize isLoggedIn para testar se esta logado
 */
export declare const user: import("vue").Ref<{
    isLoggedIn: boolean;
}>;
/**
 * Objeto com as permissões/roles do usuário, para testar no client: if(permissions.R_USUARIO.LIST)
 */
export declare const permissions: import("vue").Ref<{}>;
/**
 * Estrutura de lista com o sitemap da aplicação
 */
export declare const sitemap: import("vue").Ref<never[]>;
/**
 * Efetua um novo login confirmo corpo necessário. Retorna um objeto do tipo IUserSession
 */
export declare const doLogin: (loginData: any, fgPersiste: boolean) => Promise<any>;
/**
 * Verifica se o navegador possui o access_token no localStorage. Se possuir, tenta fazer login acessando /auth/me.
 * Retorna true se conseguir ou false por qualquer outro motivo
 */
export declare const tryLogin: () => Promise<boolean>;
/**
 * Limpa a sessão do usuário. Deve ser redirecionado depois para tela de login /
 */
export declare const doLogout: () => void;
