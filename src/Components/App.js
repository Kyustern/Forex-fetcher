import React, { Component } from 'react'

import CurrencyInput from './CurrencyInput'


class App extends Component {
    state = {
        currency1: '',
        currency2: ''
    }

    render() {
        return (
            <div className="ui container">
                <h1 style={{textAlign : "center"}}>Get some fine exchange rates here</h1>
                <CurrencyInput />
            </div>
        );
    }
}

export default App