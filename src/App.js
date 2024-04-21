import { useState } from 'react';
import './App.css';
import TicToe from './components/TicToe';

function App() {
  const [number,setNumber] = useState(3)
  return (
    <div className="App">
      <div>
      <input style={{width:"200px",marginTop:20}} type='number' min={3} max={6} value={number} onChange={(e)=>setNumber(e.target.value)}/>
      </div>
      <TicToe boardNumber={number}/>
    </div>
  );
}

export default App;
