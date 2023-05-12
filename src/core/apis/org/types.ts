import { OpenAPI } from '../type'

/**
 * 用户类型
 */
export enum UserType {
    /**
     * 本地用户
     */
    Local = 1,

    /**
     * 域用户
     */
    Domain = 2,

    /**
     * 第三方验证用户
     */
    Third = 3,
}

/**
 * 用户状态
 */
export enum UserStatus {
    /**
     * 启用
     */
    Enable = 0,

    /**
     * 禁用
     */
    Disable = 1,

    /**
     * 用户被第三方系统删除
     */
    Delete = 2,
}

/**
 * 对象存储信息
 */
export interface OSSInfo {
    /**
     * 对象存储ID
     */
    ossId: string;

    /**
     * 对象存储名称
     */
    ossName: string;

    /**
     * 对象存储归属站点名称
     */
    siteName: string;

    /**
     * 对象存储状态
     */
    enabled: boolean;

    /**
     * 0 表示当前站点配置、管理的对象存储，1 表示分站点同步到总站点的对象存储
     */
    type: number;
}

/**
 * 管理员限额信息
 */
export interface LimitSpaceInfo {
    /**
     * 用户限额，默认为-1(无限制)
     */
    limitUserSpace: number;

    /**
     * 已分配的用户限额,默认0
     */
    allocatedLimitUserSpace: number;

    /**
     * 文档库限额，默认为-1(无限制)
     */
    limitDocSpace: number;

    /**
     * 已分配的文档库限额，默认0
     */
    allocatedLimitDocSpace: number;
}

/**
 * 角色信息
 */
export interface RoleInfo {
    /**
     * 名称
     */
    name: string;

    /**
     * 描述
     */
    description: string;

    /**
     * 创建者id
     */
    creatorId: string;

    /**
     * 角色id标识
     */
    id: string;

    /**
     * 显示名
     */
    displayName: string;
}

/**
 * 用户基本信息
 */
export interface UserInfo {
    /**
     * 用户名称
     */
    loginName: string;

    /**
     * 显示名
     */
    displayName: string;

    /**
     * 邮箱
     */
    email: string;

    /**
     * 配额空间，单位Bytes，默认5GB，最小1GB
     */
    space: number;

    /**
     * 用户类型
     */
    userType: UserType;

    /**
     * 所属部门id，-1时表示为未分配用户
     */
    departmentIds: ReadonlyArray<string>;

    /**
     * 所属部门名称
     */
    departmentNames: ReadonlyArray<string>;

    /**
     * 用户状态
     */
    status: UserStatus;

    /**
     * 已使用配额空间,单位Bytes
     */
    usedSize: number;

    /**
     * 排序优先级
     */
    priority: number;

    /**
     * 用户密级
     */
    csfLevel: number;

    /**
     * 密码管控
     */
    pwdControl: boolean;

    /**
     * 对象存储信息
     */
    ossInfo: OSSInfo;

    /**
     * 管理员限额信息
     */
    limitSpaceInfo: LimitSpaceInfo;

    /**
     * 用户创建时间
     */
    createTime: number;

    /**
     * 用户冻结状态，true:冻结 false:未冻结
     */
    freezeStatus: boolean;

    /**
     * 手机号
     */
    telNumber: string;

    /**
     * 用户角色
     */
    roles: ReadonlyArray<RoleInfo>;

    /**
     * 用户账号有效期(单位：秒), 默认为 -1, 永久有效
     */
    expireTime: number;

    /**
     * 备注
     */
    remark: string;

    /**
     * 身份证号
     */
    idcardNumber: string;
}

/**
 * 简单定义的用户信息
 */
export interface SimpleUserInfo {
    /**
     * 用户id
     */
    id: string;

    /**
     * 用户显示名
     */
    displayName: string;

    /**
     * 用户名
     */
    loginName: string;

    /**
     * 用户状态
     */
    status: UserStatus;
}

/**
 * 直属部门信息
 */
export interface DirectDeptInfo {
    /**
     * 部门id
     */
    departmentId: string;

    /**
     * 部门名称
     */
    departmentName: string;

    /**
     * 管理员信息
     */
    responsiblePersons: ReadonlyArray<SimpleUserInfo>;
}

/**
 * 用户节点信息
 */
export interface NodeUserInfo {
    /**
     * 用户id
     */
    id: string;

    /**
     * 用户基本信息
     */
    user: UserInfo;

    /**
     * 是否为初始密码
     */
    originalPwd: boolean;

    /**
     * 用户密码
     */
    password: string;

    /**
     * 直属部门信息
     */
    directDeptInfo: DirectDeptInfo;
}

/**
 * 组织结构根目录信息
 */
export interface OrgRootInfo {
    /**
     * 组织邮箱地址
     */
    email: string;

    /**
     * 组织id
     */
    id: string;

    /**
     * 是否是组织
     */
    isOrganization: boolean;

    /**
     * 名称
     */
    name: string;

    /**
     * 对象存储信息
     */
    ossInfo: OSSInfo;

    /**
     * 部门管理员
     */
    responsiblePersons: ReadonlyArray<NodeUserInfo>;

    /**
     * 子部门数量
     */
    subDepartmentCount: number;

    /**
     * 子用户数量
     */
    subUserCount: number;
}

// ================================================ 函数声明 ======================================================================

/**
 * 获取组织架构根目录
 */
export type GetOrgRoot = OpenAPI<string, ReadonlyArray<OrgRootInfo>>;