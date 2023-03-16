import './App.css';
import Links from './links';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="mainnn" style={{'overflowX': 'hidden'}}>
    <BrowserRouter>
    <Links />
    
    
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
