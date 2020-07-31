import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Hello TypeScript!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))