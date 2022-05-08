import { Route, Switch } from 'react-router-dom';

import { AppProvider } from '~/contexts';
import { Mfe1 } from '~/pages/Mfe1';

function AppRoutes() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/mfe1" component={Mfe1} exact />
      </Switch>
    </AppProvider>
  );
}
export { AppRoutes };
