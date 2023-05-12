import React, { useEffect, useState, useContext } from 'react';
import { getUserDocs, DocInfo } from '@/core/apis/docs'
import { getOrgRoot } from '@/core/apis/org'
import { AppPropsContext } from '@/context/appPropsProvider'
import { IAppProps } from '@/context/type'
import __ from './locale';
import img from '@/assets/imgs/5kb.png'
import img2 from '@/assets/imgs/22kb.png'

const UserDoc: React.FC = () => {
    const [docs, setDocs] = useState([] as ReadonlyArray<DocInfo>)
    const { userInfo } = useContext<IAppProps>(AppPropsContext)
    const getDocs = async () => {
        try {
            console.log(userInfo)
            const { entries } = await getUserDocs({ offset: 0, limit: 10 })
            const res = await getOrgRoot(userInfo?.id)
            console.log(res)
            setDocs(entries)
        } catch (e) { }
    }

    useEffect(() => {
        getDocs()
    }, [])
    return (
        <div>
            <span>{__('个人文档库')} userDoc</span>
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <div>{docs.map((item: any) => item.name).join(',')}</div>
        </div>
    )
}

export default UserDoc;