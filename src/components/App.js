import React from 'react';
import Collection from './Collection';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import useToken from './UseToken';

const App = () => {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div>
            <Header />
            <Collection />
            <Footer />
        </div>
    );
};

export default App;