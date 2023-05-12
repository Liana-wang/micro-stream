import { get } from '@/utils/http'
import { GetUserDocs, SearchParams } from './types'

export * from './types'

/**
 * 获取个人文档库列表
 */
export const getUserDocs: GetUserDocs = (params: SearchParams) => {
    return get({ url: '/api/efast/v1/doc-lib/user', params })
}