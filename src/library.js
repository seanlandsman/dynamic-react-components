import React from 'react';
import ReactDOM from 'react-dom';

import {DynamicComponent} from "./dynamicComponent";

export class Library {
    _eGridDiv;
    _el;

    constructor(eGridDiv) {
        this._eGridDiv = eGridDiv;

        // not really necessary, but in the real library the components are created at a later point
        // the same behaviour would occur without a setTimeout
        setTimeout(() => {
            this.createDynamicComponent();
        }, 250)
    }

    createDynamicComponent() {
        this._el = document.createElement('div');
        this._eGridDiv.appendChild(this._el);

        const ReactComponent = React.createElement(DynamicComponent, {});
        const portal = ReactDOM.createPortal(
            ReactComponent,
            this._el,
        );

        ReactDOM.render(portal, this._el);
    }
}
