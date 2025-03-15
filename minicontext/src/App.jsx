import './App.css'
import UserContextProvider from './context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Hello React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
