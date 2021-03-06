import React, {Component} from 'react';
import {Library} from "./library";

class App extends Component {
    componentDidMount() {
        this.library = new Library(this.eGridDiv)
    }

    render() {
        return React.createElement("div", {
            style: {height: 200, width: 200, backgroundColor: "lightblue"},
            ref: e => {
                this.eGridDiv = e;
            }
        });
    }
}

export default App;
