import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { AppRoutes } from './routes';
import { ModuleRoute } from './shared/modules.routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ModuleRoute />
    </BrowserRouter>
  );
}

export default App;
