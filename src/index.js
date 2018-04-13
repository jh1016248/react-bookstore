import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './root';
import themeReducer from './reducer/themeColor';

import './asset/css/reset.css';
import './asset/css/common.less';
import './asset/css/index.less';

const store = createStore(themeReducer);

render(
    <Provider store={store}>
        <AppContainer>
            <Root />
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render(
            <Provider store={store}>
                <AppContainer>
                    <NewRoot />
                </AppContainer>
            </Provider>,
            document.getElementById('root')
        );
    });
}
