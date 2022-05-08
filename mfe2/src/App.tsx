import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { AppRoutes } from './routes/mfe2';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
