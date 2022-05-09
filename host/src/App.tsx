import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { AppRoutes } from './routes';
import { queryClient } from './services/query-client';
import { ModuleRoute } from './shared/modules.routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AppRoutes />
        <ModuleRoute />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
