import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GbfteamraidService from './services/GbfteamraidService';

class App extends React.Component {

    service: GbfteamraidService

    constructor(props: any, state: any) {
        super(props, state);
        this.service = new GbfteamraidService();
    }

    load() {
        this.service.login();

    }

    render() {
        this.state;
        this.load();
        return (
            <h1>Hello TypeScript! login</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))