export interface IAppProps {
    CSRFToken?: string;
    components?: { [key: string]: any };
    container?: Element;
    getPath?: () => { currentPath: string; lastPath: string };
    getRouter?: () => string;
    getToken?: () => string;
    getUserInfo?: () => { [key: string]: any };
    userInfo?: Record<string, any>;
    lang?: 'zh-cn' | 'zh-tw' | 'en-us';
    mountComponent?: () => any;
    mountParcel?: () => any;
    name?: string;
    navigate?: () => any;
    onTokenExpired?: () => any;
    port?: string;
    theme?: string;
    refreshToken?: () => any;
    [key: string]: any;
}