declare function getProfile(key: any): Promise<any>;
/**
 * Adiciona um key com um delay de chamada
 */
declare function setProfile(key: any, content: any): Promise<void>;
declare const _default: {
    get: typeof getProfile;
    set: typeof setProfile;
};
export default _default;
