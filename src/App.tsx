import './App.css';
import {createContext, useContext, useState} from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    if (!isLoggedIn) {
        return (
            <>
                <h1>Login to your app!</h1>
                <form>
                    <input
                        type={'text'}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <button onClick={() => setLoggedIn(true)}>Login</button>
                </form>
            </>
        );
    } else {
        return (
            <>
                <h1>Hello!</h1>
                <h2>{username}</h2>
                <button onClick={() => setLoggedIn(false)}>Logout</button>
            </>
        )
    }
}

export default App;
