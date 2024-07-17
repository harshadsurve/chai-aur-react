import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
    return (
        <UserContextProvider>
            <Login />
            <Profile />
            <h1>Chai aur React</h1>
        </UserContextProvider>
    );
}

export default App;
