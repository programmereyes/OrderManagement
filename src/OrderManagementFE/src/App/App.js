import React, { Component } from 'react';
import css from './App.css';
class App extends Component {
    state = {
        time: 'Hello',
    };
    constructor() {
        super();
    }

    render() {
        console.log(css);
        return <div>This is app component</div>;
    }
}
export default App;
