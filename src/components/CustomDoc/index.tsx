import React from 'react';
import __ from './locale'
import Icon, { DoubleLeftOutlined } from 'lia-ui/icons'
import { Button } from 'lia-ui'
import IconCreate from '@/icons/icon-create.svg'
import styles from './styles.module.less'

const CustomDoc: React.FC = () => {
    // console.log(Icon)
    console.log(styles)
    return (
        <div>
            CustomDo  hhh {__('自定义文档库')}
            <div>
                <Button type='link' key='ellipsis' size='small' tabIndex={-1}>
                    ddddd 按钮
                </Button>
                <DoubleLeftOutlined />
                <IconCreate />
                <Icon spin={true} component={() => <IconCreate />} />
            </div>
            <div className={styles['test']}></div>
        </div>
    )
}
export default CustomDoc;