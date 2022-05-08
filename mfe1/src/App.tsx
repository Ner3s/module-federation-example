import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { AppRoutes } from './routes/mfe1';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
