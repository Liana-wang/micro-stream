import { get, post } from '@/utils/http'
import { GetOrgRoot } from './types'

export * from './types'

/**
 * 获取组织架构根目录
 */
export const getOrgRoot: GetOrgRoot = (userId: string) => {
    return post({ url: '/console/api/ShareMgnt/Usrm_GetSupervisoryRootOrg', data: [userId] })
}