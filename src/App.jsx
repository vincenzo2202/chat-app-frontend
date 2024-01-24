import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <>
    <NavBar />
    <Container >
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
    </>
  )
}

export default App
