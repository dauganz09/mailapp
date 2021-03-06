import './App.css';
import { Main, Sidebar } from './components';
import MailContextProvider from './context/MailContext';

function App() {

  

  return (
    <MailContextProvider>
    <div className="App">
      {/* Sidebar */}
      <Sidebar/>
      {/* Main */}
      <Main/>
    </div>
    </MailContextProvider>
  );
}

export default App;
