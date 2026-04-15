import './App.css';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Routes/Todo';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
