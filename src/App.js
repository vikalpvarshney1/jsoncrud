import React from 'react';
import Navbar from './Components/Navbar';
import Adduser from './Users/Adduser';
import EditUser from './Users/EditUser';
import User from './Users/User';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/user/add" element={<Adduser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>

    </div>
  );
}

export default App;
