import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { ChatContextProvider } from './Context/ChatContext';

function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <ChatContextProvider user={user}>
        <NavBar />
        <Container >
          <Routes>
            <Route path='/' element={user ? <Chat /> : <Login />} />
            <Route path='/register' element={user ? <Chat /> : <Register />} />
            <Route path='/Login' element={user ? <Chat /> : <Login />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Container>
      </ChatContextProvider>
    </>
  )
}

export default App
