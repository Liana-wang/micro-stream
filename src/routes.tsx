import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Spin } from 'lia-ui'
import NotFound from '@/pages/NotFound'

const UserDocPage = React.lazy(() => import('@/pages/UserDocPage'))
const DeptDocPage = React.lazy(() => import('@/pages/DeptDocPage'))
const CustomDocPage = React.lazy(() => import('@/pages/CustomDocPage'))

export const routes = [
    {
        path: '/userdoc',
        exact: true,
        component: UserDocPage,
    },
    {
        path: '/deptdoc',
        exact: true,
        component: DeptDocPage,
    },
    {
        path: '/customdoc',
        exact: true,
        component: CustomDocPage,
    },
    {
        path: '*',
        component: NotFound,
    },
]

const Routes: React.FC = () => (
    <Suspense fallback={<Spin />}>
        <Switch>
            {routes.map((item) => (
                <Route
                    key={item.path}
                    path={item.path}
                    exact={item.exact}
                    render={(props: any) => <item.component {...props} />}
                />
            ))}
            <Redirect to='*' />
        </Switch>
    </Suspense>
)

export default Routes
