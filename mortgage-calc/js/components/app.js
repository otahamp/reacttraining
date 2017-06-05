import React from 'react';
import Header from './header'
import MortgageCalculator from './mortgagecalculator';

class App extends React.Component {
    constructor(properties) {
        super(properties);
    }
    render() {
        let markup = (
            <div>
                <Header title="Mortgage Calculator" />
                <MortgageCalculator principal="20000" years="20" rate="5" />
            </div>
        );
        return markup;
    }
}

export default App;