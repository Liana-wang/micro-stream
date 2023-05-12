import './public-path';
import React from 'react'
import ReactDOM from 'react-dom';
import i18nInstance from '@/utils/i18n'
import { setupOpenApi } from '@/utils/http'
import { IAppProps } from '@/context/type'
import App from './App';
import __ from './locale'
import './index.css';

export async function bootstrap(app: any) {
    // console.log('app bootstraped')
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: IAppProps) {
    const {
        protocol = window.location.protocol,
        lang = 'zh-cn',
        host = window.location.hostname,
        port,
        getToken = () => '',
        refreshToken,
        CSRFToken,
        onTokenExpired,
    } = props

    i18nInstance.setup({ locale: lang })

    setupOpenApi({
        protocol,
        host,
        port: Number(port),
        token: getToken,
        CSRFToken,
        refreshToken,
        onTokenExpired,
        onNetworkError: () => {
            open(__('无法连接网络'))
        },
        onServerError: () => {
            open(__('无法连接文档域'))
        },
        onTimeout: () => {
            open(__('您的请求已超时'))
        },
    })

    ReactDOM.render(
        <App appProps={props} />,
        props.container
            ? props.container.querySelector('#micro-stream')
            : document.getElementById('micro-stream'),
    );
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
    ReactDOM.unmountComponentAtNode(
        props.container
            ? props.container.querySelector('#micro-stream')
            : document.getElementById('micro-stream'),
    );
}

if (!window.__POWERED_BY_QIANKUN__) {
    ReactDOM.render(<App />, document.getElementById('micro-stream'));
}
