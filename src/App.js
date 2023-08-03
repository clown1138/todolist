import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Todolist from './Pages/Todolist.js';
function App() {
  const user={userEmail:"user@mail.com",userpassword:"a12345678"} 

  return (
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Todolist" element={<Todolist />} />
            <Route path="/" element={<Login user={user}/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
