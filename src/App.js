import './App.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import Home from './Components/Home.js';
import PersonDetails from './Components/PersonDetails';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { store } from 'state-pool';

store.setState("pageNumber", 1, true);

function App() {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.REACT_APP_API_URL,
    });

    return (
        <Router>
            <div className="App">
                <ApolloProvider client={client}>
                    <Switch>
                        <Route path="/persondetails/:name" component={PersonDetails} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </ApolloProvider>
            </div>
        </Router>
    );
}

export default App;
