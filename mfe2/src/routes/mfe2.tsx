import { Route, Switch } from 'react-router-dom';

import { AppProvider } from '~/contexts';
import { Mfe2 } from '~/pages/Mfe2';

function AppRoutes() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/mfe2" component={Mfe2} exact />
      </Switch>
    </AppProvider>
  );
}
export { AppRoutes };
