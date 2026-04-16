import './App.css';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Routes/Todo';
import Login from './auth/Login';
import Register from './auth/Register';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
