import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from 'react';

function App() {
  
  const [users,setUsers] = useState(
    [
        {
            username:"nandhu",
            password:"123"
        }
  
    ]
  )
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
        <Route path='/Signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
        <Route path='/landing' element={<Landing />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
