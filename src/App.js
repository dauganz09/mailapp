import './App.css';
import { useState } from 'react';
import { Main, Sidebar } from './components';

function App() {

  const [mail, setMail] = useState({
    inbox : null,
    flagged : null,
    spam : null,
    trash :null
  })

  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar mail={mail}/>
      {/* Main */}
      <Main/>
    </div>
  );
}

export default App;
