import React from 'react';
import Collection from './Collection';
import Login from './Login';
import useToken from './UseToken';

const App = () => {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div>
            <Collection />
        </div>
    );
};

export default App;