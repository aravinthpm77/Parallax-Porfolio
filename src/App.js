import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AllRoutes from './routes'


function App() {
  return (
    <div>
      <BrowserRouter>
        
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;