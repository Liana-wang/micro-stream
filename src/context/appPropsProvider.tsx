import React from 'react'
import { isFunction } from 'lodash-es';
import { IAppProps } from './type'

interface IAppPropsProvider {
    children: any;
    appProps?: IAppProps;
}

export const AppPropsContext = React.createContext<IAppProps>({})

export const AppPropsConsumer = AppPropsContext.Consumer

export const AppPropsProvider: React.FC<IAppPropsProvider> = ({
    appProps,
    children,
}) => {
    const props = {
        ...appProps,
        userInfo: isFunction(appProps?.getUserInfo) ? appProps?.getUserInfo() : {},
    }

    return (
        <AppPropsContext.Provider value={{ ...props }}>
            {children}
        </AppPropsContext.Provider>
    )
}
