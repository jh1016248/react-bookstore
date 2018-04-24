import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Root from './root'
import reducer from './reducer/index'
import axios from 'axios'

import './asset/css/reset.css'
import './asset/css/common.less'
import './asset/css/index.less'
import 'weui'
import 'react-weui/build/packages/react-weui.css'

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    if(res.data.code == 1) {
        localStorage.setItem(res.config.url, JSON.stringify(res.data))
    }
    return res.data
  }, function (error) {
    return Promise.reject(error)
  })

const store = createStore(reducer)

render(
    <Provider store={store}>
        <AppContainer>
            <Root />
        </AppContainer>
    </Provider>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default
        render(
            <Provider store={store}>
                <AppContainer>
                    <NewRoot />
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        )
    })
}
