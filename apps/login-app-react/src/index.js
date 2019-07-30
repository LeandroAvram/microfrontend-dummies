import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './App';


const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => document.getElementById('login-app-react')
});

export function bootstrap(props) {
    return reactLifecycles.bootstrap(props);
}

export function mount(props) {
    return reactLifecycles.mount(props);
}

export function unmount(props) {
    return reactLifecycles.unmount(props);
}