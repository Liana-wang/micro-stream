import React from 'react'
import { ConfigProvider } from 'lia-ui'
import { BrowserRouter } from 'react-router-dom'
import { AppPropsProvider } from '@/context/appPropsProvider'
import { IAppProps } from '@/context/type'
import Routes from './routes'
import './theme-file.less'

interface IApp {
    appProps?: IAppProps;
}

function App({ appProps }: IApp) {
    return (
        <BrowserRouter basename={'/console/#/home/'}>
            <AppPropsProvider appProps={appProps}>
                <ConfigProvider
                    prefixCls={ANT_PREFIX}
                    iconPrefixCls={ANT_ICON_PREFIX}
                    autoInsertSpaceInButton={false}
                    getPopupContainer={() => document.getElementById('micro-stream') || document.body}
                    appName={APP_NAME}
                    theme={appProps?.theme}
                    lang={appProps?.lang}
                >
                    <Routes />
                </ConfigProvider>
            </AppPropsProvider>
        </BrowserRouter>
    )
}

export default App
