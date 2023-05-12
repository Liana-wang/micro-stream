import React from 'react';
import { Button, Space, Tabs, Select, Input } from 'lia-ui';
import Icon, { ApplistFilled, PandaColored, AppleFilled, DocsFilled, DocsOutlined, SearchOutlined } from 'lia-ui/icons'
import IconCreate from '@/icons/icon-create.svg'
import __ from './locale'

const items = [
    { label: '项目 1', key: 'item-1', children: '内容 1' }, // 务必填写 key
    { label: '项目 2', key: 'item-2', children: '内容 2' },
];

const DeptDoc: React.FC = () => (
    <div>
        {__('部门文档库')}
        <div>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button type="primary" icon={<SearchOutlined style={{ fontSize: 16 }} />}>Icon Button</Button>
                <Button disabled type="primary">Disabled Button</Button>
                <Button>Default Button</Button>
                <Button icon={<DocsOutlined style={{ fontSize: 16 }} />}>Default Button</Button>
                <Button disabled>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>

            <div>
                <DocsOutlined onClick={() => console.log(1111111)} style={{ color: 'green', fontSize: 30 }} />
                <DocsFilled style={{ color: 'green', fontSize: 30 }} />
                <ApplistFilled style={{ color: 'green', fontSize: 30 }} />
                <PandaColored style={{ color: 'red', fontSize: 30 }} />
                <AppleFilled style={{ color: 'red', fontSize: 30 }} />
                <IconCreate />

                <div>
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={(item) => { console.log(item) }}
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'disabled',
                                disabled: true,
                                label: 'Disabled',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                        ]}
                    />
                </div>
            </div>

            <div>
                <Input />
            </div>

            <Tabs items={items} />
        </div>
    </div>
)

export default DeptDoc;