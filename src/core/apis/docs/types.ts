import { OpenAPI } from '../type'

/**
 * 文档库信息
 */
export interface DocInfo {
    /**
     * 文档库名称
     */
    name: string;

    /**
     * 创建者信息
     */
    created_by: {
        /**
         * 用户id
         */
        id: string;

        /**
         * 用户显示名
         */
        name: string;

        /**
         * 用户账号
         */
        account: string;
    };

    /**
     * 文档库id
     */
    id: string;

    /**
     * 配额信息
     */
    quota: {
        /**
         * 总配额
         */
        allocated: number;

        /**
         * 已使用配额
         */
        used: number;
    };

    /**
     * 所有者信息
     */
    owned_by: ReadonlyArray<
        {
            /**
             * 所有者id
             */
            id: string;

            /**
             * 所有者显示名
             */
            name: string;

            /**
             * 所有者账号
             */
            account: string;

            /**
             * 所有者类型
             */
            type: string;
        }
    >;

    /**
     * 对象存储信息
     */
    storage: {
        /**
         * 对象存储id
         */
        id: string;

        /**
         * 对象存储名称
         */
        name: string;
    };

    /**
     * 创建时间
     */
    created_at: string;

    /**
     * 创建类型
     */
    type: string;
}

/**
 * 搜索文档库参数
 */
export interface SearchParams {
    /**
     * 排序规则
     */
    sort?: string;

    /**
     * 排序方向
     */
    direction?: string;

    /**
     * 搜索关键字
     */
    keyword?: string;

    /**
     * 搜索范围 部门id数组
     */
    search_in_departments?: ReadonlyArray<string>;

    /**
     * 搜索范围 用户id数组
     */
    search_in_users?: ReadonlyArray<string>;

    /**
     * 搜索范围 用户组id数组
     */
    search_in_groups?: ReadonlyArray<string>;

    /**
     * 开始响应的项目的偏移量
     */
    offset: number;

    /**
     * 项目数
     */
    limit: number;
}

// ============================================================================================================================

/**
 * 获取插件列表
 */
export type GetUserDocs = OpenAPI<SearchParams, {
    entries: ReadonlyArray<DocInfo>;
    /**
     * 信息总数
     */
    total_count: number;
}>;