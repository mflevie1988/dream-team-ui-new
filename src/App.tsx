import './App.css';

import { Route, Routes } from 'react-router';

import Login from './components/login/Login';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
