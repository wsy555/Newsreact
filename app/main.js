import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores';

const store = configureStore();

import RouterMap from './router/RouterMap';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
    },
});
ReactDom.render(
    <Provider store={store} key="provider">
        <MuiThemeProvider theme={theme}>
            <RouterMap/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('content')
);