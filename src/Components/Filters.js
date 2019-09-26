import React from 'react'
import CurrencyInput from './CurrencyInput'

class Filters extends React.Component {
    render () {
        return (
            <div style={styling.root}>
                <CurrencyInput />
            </div>
        );
    }
}
    
export default Filters


const styling = {
    root: {
        textAlign: "center"
    }
}